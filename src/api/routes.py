from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
#jwt modules 
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/token', methods=['POST'])
def generate_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    #testing
    if email != "test" or password != "test":
        return jsonify(
            {
                "msg": "Bad email or password"
            }
        ), 401 
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)