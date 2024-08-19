import os
import tensorflow as tf
import cv2
import numpy as np
import keras.utils as image
from keras.utils import load_img

current_directory = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(current_directory, '..','ml_model', 'crop_disease.h5')
model_path = os.path.normpath(model_path)
loaded_model = tf.keras.models.load_model(model_path)

def model_predict(img_path):
    print(img_path)
    img = image.load_img(img_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x=x/255
    x = np.expand_dims(x, axis=0)
    preds = loaded_model.predict(x)
    preds=np.argmax(preds, axis=1)
    classes=['apple scab','apple black rot','cedar apple rust','apple healthy','blueberry healthy','cherry powdery mildew','cherry healthy','corn cercospora leaf gray leaf spot','corn common rust','corn northern leaf blight','corn healthy','grape black rot','grape black measles','grape leaf blight','grape healthy','orange haunglongbing','peach bacterial spot','peach healthy','pepper bell Bacterial spot','pepper bell healthy','potato early blight','potato late blight','potato healthy','raspberry healthy','soybean healthy','squash powdery mildew','strawberry leaf scotch','strawberry healthy','tomato bacterial spot','tomato early blight','tomato late blight','tomato leaf mold','tomato septoria leaf spot','tomato spider mites two spotted spider mite','tomato target spot','Tomato yellow leaf curl virus','tomato mosaic virus','tomato healthy']
    return classes[int(preds)].upper()