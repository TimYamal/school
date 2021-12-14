from flask import Blueprint, request
from flask_restful import Api, Resource, reqparse
from app import db

from .models import Course, Member, Teacher
from . import admin

bp = Blueprint('main', __name__)
api = Api(bp)


class Courses(Resource):

    def get(self, id):
        rec = Course.query.get(id)
        return {
            "id": rec.id,
            "title": rec.title,
            "short_description": rec.description,
            "description": rec.description,
            "date_start": str(rec.date_start),
            "duration": str(rec.duration)
        }

class CoursesList(Resource):

    def get(self):
        courses = Course.query.all()
        return [{
            "id": rec.id,
            "title": rec.title,
            "short_description": rec.description,
            "description": rec.description,
            "date_start": str(rec.date_start),
            "duration": str(rec.duration)
        } for rec in courses]

class Teachers(Resource):

    def get(self, id):
        rec = Teacher.query.get(id)
        return {
            "id": rec.id,
            "surname": rec.surname,
            "name": rec.name,
            "patronymic": rec.patronymic,
            "description": rec.description,
            "courses": rec.courses
        } 

class TeachersList(Resource):

    def get(self):
        teachers = Teacher.query.all()
        return [{
            "id": rec.id,
            "surname": rec.surname,
            "name": rec.name,
            "patronymic": rec.patronymic
        } for rec in teachers]

class Members(Resource):


    def post(self):
        
        #name = request.args.get('name')
        #telephone = request.args.get('telephone')
        #email = request.args.get('email')

        #course_id = request.args.get('course_id')

        #new_member = Member(name, telephone, email, course_id)
        new_member = Member(**request.args)
        
        db.session.add(new_member)
        db.session.commit()

        return {
            "id": new_member.id,
            "name": new_member.name,
            "telephone": new_member.telephone,
            "email": new_member.email,
            "course_id": new_member.course_id
        }

api.add_resource(Courses, '/course/<int:id>', endpoint='course')
api.add_resource(CoursesList, '/courses/', endpoint='courses')


api.add_resource(Teachers, '/teacher/<int:id>', endpoint='teacher')
api.add_resource(TeachersList, '/teachers/', endpoint='teachers')


api.add_resource(Members, '/member/', endpoint='member')
