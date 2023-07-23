from flask import Flask

api = Flask(__name__)

#Call this from the frontend to get the response_body dictionary
@api.route('/profile')
def my_profile():
    response_body = {
        "name":"Nagato",
        "about" : "Hello! I'm a full stack developer that loves python and javascript"
    }
    
    return response_body