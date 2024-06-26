from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Invoice
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


CORS(api)


@api.route('/token', methods=['POST'])
def generate_token():
      
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    email = email.lower()  
    user = User.query.filter_by(email = email, password = password).first()

    if user is None: 
        response = {
            "msg": "Email or Password does not match."
        }
        return jsonify(response), 401 
    
    access_token = create_access_token(identity=user.id)
    response = {
        "access_token": access_token, 
        "user_id": user.id, 
        "msg": f"Welcome {user.email}! This worked!" 
    }
    return jsonify(response), 200 

@api.route('/signup', methods=['POST'])
def register_user():
  email = request.json.get('email', None)
  password = request.json.get('password', None)
  
  email = email.lower()  
  user = User.query.filter_by(email=email).first()

  if user is not None and user.email == email:
     response = {
        'msg': 'User already exist.'
        }
     return jsonify(response), 403
  
  user = User()
  user.email = email
  user.password = password
  
  user.is_active = True
  db.session.add(user)
  db.session.commit()
  
  response = {
     'msg': f'Congratulations {user.email}. You have successfully signed up!'
  }
  return jsonify(response), 200

@api.route('/invoices', methods=['GET'])
@jwt_required()
def get_invoices():
   
   user_id = get_jwt_identity()
   user = user.query.filter_by(id = user_id).first()  
   user_invoices = Invoice.query.filter_by(user_id=user_id), all()
   
   processed_invoices = [each_invoice.serialize() for each_invoice in user_invoices]

   response = {
      'msg': f'Hello {user.email}, here are your invoices.',
      'invoices': processed_invoices
   }
   return jsonify(response), 200
 
 









        