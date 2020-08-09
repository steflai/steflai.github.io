import os
from flask import Flask, request, render_template, jsonify
import requests
import json
from datetime import datetime, timedelta
from random import randint



# create the application object
app = Flask(__name__, static_folder='public', template_folder='views')

app.config['TEMPLATES_AUTO_RELOAD'] = True

# @app.route('/') links a function to a url path
# in this case we are telling the webapp, when you get a request from the client for the url '/' (aka home), display the index.html
@app.route('/')
def homepage():
    return render_template('index.html')

# try this out by going to the url for this glitch sketch with a /test at the end of the url!
@app.route('/test')
def testpage():
    return "hi! I'm a message from the backend!"

# helper functions
def gen_date():
    end_date = datetime.now()
    rand_int = randint(0,1800)
    random_date = end_date- timedelta (days = rand_int)
    target_date = str(random_date.date())
    return target_date

def fetchAPOD():
    URL_APOD = "https://api.nasa.gov/planetary/apod"
    date = date_to_get
    params = {
        'api_key': api_key,
        'date' : date,
        'hd' : 'True'
        }
    response = requests.get (URL_APOD, params=params).json()
    return (response)

# this part says when the server gets a request for the url '/generate', trigger our markov chain function to return sentences!
@app.route('/generate')
def generate():
    date_to_get = gen_date()
    info = fetchAPOD()

    while 'image' not in info['media_type']:
        date_to_get = gen_date()
        info = fetchAPOD()
    else:
        print ('yes! an image!')

    pic_location = info['url']
    pic_description = info['explanation']

    return (pic_location)

    # this line start the server with the 'run()' method
if __name__ == '__main__':
    app.run()
