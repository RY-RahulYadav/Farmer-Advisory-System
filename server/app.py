from flask import Flask, request, render_template,jsonify
from model_predict.soil_detect_predict import soil_output
from model_predict.crop_recommend_predict import crop_recommend
from model_predict.crop_disease import model_predict
from model_predict.crop_fire import crop_fire_predict
import tensorflow as tf
import cv2 
import numpy as np
import requests
import langchain
import os
import openai
from langchain_openai import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
from langchain_community.utilities.dalle_image_generator import DallEAPIWrapper
from langchain_community.utilities import SerpAPIWrapper
from flask_cors import CORS
from langchain_google_genai import ChatGoogleGenerativeAI
import google.generativeai as genai

load_dotenv()

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'], methods=['GET', 'POST'])
GOOGLE_API_KEY=os.getenv('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)

def weather_fetch(city_name):
    api_key = "f9eaa53dd081cff011d1ad568a446a4a"
    base_url = "http://api.openweathermap.org/data/2.5/weather?"

    complete_url = base_url + "appid=" + api_key + "&q=" + city_name
    response = requests.get(complete_url)
    x = response.json()

    if x["cod"] != "404":
        y = x["main"]

        temperature = round((y["temp"] - 273.15), 2)
        humidity = y["humidity"]
        return temperature, humidity
    else:
        return None
    

@app.route('/')
def home():
    return "hello"


@app.route('/soil_upload', methods=['POST'])
def soil_detect():
    if 'image' not in request.files:
        return 'No file part'

    image = request.files['image']
    if image.filename == '':
        return 'No selected file'

    # Save the uploaded image to a folder or process it as needed
    image.save('soil_image.jpg')
    o = soil_output('soil_image.jpg')
    return o 


@app.route('/crop_upload', methods=['POST'])
def crop_upload():
    data = request.json
    N = int(data.get('n' , None))
    P = int(data.get('p' , None))
    K = int(data.get('k' , None))
    r = float(data.get('r' , None))
    ph= float(data.get('ph' , None))
    city = data.get('city' , None)
    if weather_fetch(city) != None:
        temperature, humidity = weather_fetch(city)
        data = np.array([[N, P, K, temperature, humidity, ph, r]])
        recommendation = crop_recommend(data=data)
        model = genai.GenerativeModel('gemini-pro')
        wc = f"Suggest the name of five natural fertilizers with no description that we can use on the {recommendation} for proper growth."
        response = model.generate_content(wc)

        w = f"Suggest the name of five tools with no description that we can use on the {recommendation} for proper growth."
        res = model.generate_content(w)

        # llm = ChatGoogleGenerativeAI(model="gemini-pro")
        # prompt_name = PromptTemplate(input_variables = ['crop'],template="Suggest the name of five natural fertilizers with no description that we can use on the {crop} for proper growth")
        # chain = LLMChain(llm=llm,prompt=prompt_name)
        # fertilizers = chain.run(recommendation)
        # lines = fertilizers['text'].strip().split('\n')
        # fertilizers = [line.split('. ')[1] for line in lines]
        # image_url = []
        # for x in fertilizers:
        #     image_url.append(DallEAPIWrapper().run(x))
        # llm = ChatGoogleGenerativeAI(model="gemini-pro")
        # prompt_name = PromptTemplate(input_variables = ['crop'],template="suggest the name of five tools and no description with it that we can use for the {crop} for proper growth")
        # chain = LLMChain(llm=llm,prompt=prompt_name)
        # tools = chain.run(recommendation)
        # lines = tools['text'].strip().split('\n')
        # tools = [line.split('. ')[1] for line in lines]
        data = {
        'crop_name':recommendation,
        'fertilizer_name': response.text.split('\n'),
        'tools': res.text.split('\n')
        }
        return jsonify(data)
    else:
        return "error"


@app.route('/crop_disease', methods=['POST'])
def crop_disease():
    if 'image' not in request.files:
        return 'No file part'

    image = request.files['image']
    if image.filename == '':
        return 'No selected file'

    # Save the uploaded image to a folder or process it as needed
    image.save('crop_disease.jpg')
    o = model_predict('crop_disease.jpg')
    tool = SerpAPIWrapper()
    input_t = "List four causes of "+o+ " and also each point in 20 words and seperated by $"
    input_p = "What can be Preventions for "+ o +" so it can be avoided in basic words and also in 100 words"
    input_s = "list possible treatments for "+o+" in basic words and also in 100 words"
    ps = tool.run(input_t)
    pt = tool.run(input_p)
    pb = tool.run(input_s)
    
    data = {
        "Disease_name":o,
        "cause": ps.split("', '") ,
        "prevention": pt.split("', '"),
        "treatment": pb.split("', '")
    }
    return jsonify(data)

@app.route('/crop_fire', methods=['POST'])
def crop_fire():
    data = request.json
    t = float(data.get('t' , None))
    h = float(data.get('h' , None))
    co2 = float(data.get('co2' , None))
    data = np.array([t,h,co2]).reshape(1,3)
    o = crop_fire_predict(data)
    return jsonify({
        'fire':o
    })

@app.route('/crop_upload1', methods=['POST'])
def crop_detect():
    data = request.json
    N = int(data.get('n', None))
    P = int(data.get('p', None))
    K = int(data.get('k', None))
    r = float(data.get('r', None))
    ph = float(data.get('ph', None))
    city = data.get('city', None)
    
    if weather_fetch(city) is not None:
        temperature, humidity = weather_fetch(city)
        data_array = np.array([[N, P, K, temperature, humidity, ph, r]])
        recommendation = crop_recommend(data=data_array)
        
        # Initialize GPT-3
        gpt = GPT()
        gpt.set_api_key('your_api_key')  # Set your GPT-3 API key
        
        # Generate fertilizer recommendations
        prompt_name_fertilizer = PromptTemplate(
            input_variables=['crop'],
            template="Suggest the name of five natural fertilizers with no description that we can use on the {crop} for proper growth"
        )
        fertilizer_response: GPTResponse = gpt.submit_request(prompt_name_fertilizer.generate_template(recommendation))
        fertilizers = fertilizer_response.choices[0].text.strip().split('\n')
        fertilizers = [line.split('. ')[1] for line in fertilizers]

        # Generate tools recommendations
        prompt_name_tools = PromptTemplate(
            input_variables=['crop'],
            template="Suggest the name of five tools and no description with it that we can use for the {crop} for proper growth"
        )
        tools_response: GPTResponse = gpt.submit_request(prompt_name_tools.generate_template(recommendation))
        tools = tools_response.choices[0].text.strip().split('\n')
        tools = [line.split('. ')[1] for line in tools]

        data = {
            'crop_name': recommendation,
            'fertilizer_name': fertilizers,
            'tools': tools
        }
        return jsonify(data)
    else:
        return "error"


if __name__ == '__main__':
    app.run(debug=True)


