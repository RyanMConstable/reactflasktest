from flask import Flask
from flask_cors import CORS, cross_origin
import formatsqlresult as fsql

api = Flask(__name__)


#Call this from the frontend to get the response_body dictionary
@api.route('/profile')
@cross_origin(origin='localhost',headers=['Content- Type', 'Authorization'])
def my_profile():
    
    topkilluser = fsql.displayLeaders()
    #Here we can change this to whatever object we want
    response_body = {
        "total" : str(topkilluser)
    }
    
    #This is not a json object, that's because in flask you can return dictionary objects and flask turns it into json
    return response_body