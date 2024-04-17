import pickle

# Load the pickled model
with open('E:\crop\server\ml_model\crop_fire.pkl', 'rb') as f:
    model = pickle.load(f)

label={
    1:'low Chance Of Fire',
    0:'high Chance of Fire'
}

def crop_fire_predict(data):
    pred = model.predict(data)  #
    return label[pred[0]]