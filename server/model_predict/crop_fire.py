import pickle
import os
current_directory = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(current_directory, '..','ml_model', 'crop_fire.pkl')
model_path = os.path.normpath(model_path)


# Load the pickled model
with open(model_path, 'rb') as f:
    model = pickle.load(f)

label={
    1:'low Chance Of Fire',
    0:'high Chance of Fire'
}

def crop_fire_predict(data):
    pred = model.predict(data)  #
    return label[pred[0]]