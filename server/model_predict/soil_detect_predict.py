import tensorflow as tf
import cv2 
import numpy as np

loaded_model = tf.keras.models.load_model('E:\crop\server\ml_model\soil_detection.h5')

def soil_output(img):
    img = cv2.imread(img)
    img =  cv2.resize(img, (128, 128))
    img=np.reshape(img, (1, 128, 128, 3))
    y_pred= loaded_model.predict(img)
    y_pred = np.argmax(y_pred, axis=1)
    if y_pred == 0:
        return "Alluvial soil"
    elif y_pred==1:
        return "Clay soil"
    elif y_pred==2:
        return "Black soil"
    elif y_pred==3:
        return "Red soil"