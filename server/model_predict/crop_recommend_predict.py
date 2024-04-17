import pickle

# Load the pickled model
with open('E:\crop\server\ml_model\crop_recommend.pkl', 'rb') as f:
    model = pickle.load(f)

Label_mapping = {20: 'rice', 11: 'maize', 3: 'chickpea', 9: 'kidneybeans', 18: 'pigeonpeas', 13: 'mothbeans', 14: 'mungbean', 2: 'blackgram', 10: 'lentil', 19: 'pomegranate', 1: 'banana', 12: 'mango', 7: 'grapes', 21: 'watermelon', 15: 'muskmelon', 0: 'apple', 16: 'orange', 17: 'papaya', 4: 'coconut', 6: 'cotton', 8: 'jute', 5: 'coffee'}


def crop_recommend(data):
    pred = model.predict(data)  #
    return Label_mapping[pred[0]]