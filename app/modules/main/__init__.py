from flask import Blueprint
from flask_restful import Api, Resource, reqparse

from .models import Course, Member, Teacher
from . import admin

bp = Blueprint('main', __name__)
api = Api(bp)


class Courses(Resource):

    parser = reqparse.RequestParser()

    def get(self, id):
        rec = Course.query.get(id)
        return {
            "id": rec.id,
            "title": rec.title,
            "description": rec.description,
            "start_date": str(rec.date_start)
        }


class CoursesList(Resource):

    def post(self):
        courses = Course.query.all()
        return [{
            "id": rec.id,
            "title": rec.title,
            "description": rec.description,
            "start_date": str(rec.date_start)
        } for rec in courses]


api.add_resource(Courses, '/course/', endpoint='course')
api.add_resource(CoursesList, '/courses/', endpoint='courses')

