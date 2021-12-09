from flask import Blueprint
from flask_restful import Api, Resource

from . import models

bp = Blueprint('main', __name__)
api = Api(bp)


class UserAPI(Resource):
    def get(self, id):
        pass

    def put(self, id):
        pass

    def delete(self, id):
        pass


api.add_resource(UserAPI, '/users/<int:id>', endpoint='user')

