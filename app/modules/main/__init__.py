from flask import Blueprint, request, render_template
from flask_restful import Api, Resource
from flask_mail import Message

from app import db, mail
from . import admin
from .models import Course, Member, Teacher

bp = Blueprint('main', __name__, template_folder='templates')
api = Api(bp)


class Courses(Resource):

    def get(self, id):
        rec = Course.query.get(id)
        return {
            "id": rec.id,
            "title": rec.title,
            "short_description": rec.short_description,
            "description": rec.description,
            "date_start": str(rec.date_start),
            "duration": str(rec.duration),
            "teacher":{
                "surname": rec.teacher.surname,
                "name": rec.teacher.name,
                "photo": rec.teacher.photo
            }
        }


class CoursesList(Resource):

    def get(self):
        courses = Course.query.all()
        return [{
            "id": rec.id,
            "title": rec.title,
            "short_description": rec.short_description,
            "description": rec.description,
            "date_start": str(rec.date_start),
            "duration": str(rec.duration),
            "teacher":{
                "id": rec.teacher.id,
                "surname": rec.teacher.surname,
                "name": rec.teacher.name,
                "photo": rec.teacher.photo,
                "description": rec.teacher.description
            }
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
            "photo": rec.photo
        }


class TeachersList(Resource):

    def get(self):
        teachers = Teacher.query.all()
        return [{
            "id": rec.id,
            "surname": rec.surname,
            "name": rec.name,
            "patronymic": rec.patronymic,
            "description": rec.description,
            "photo": rec.photo
        } for rec in teachers]


class Members(Resource):

    def post(self):
        new_member = Member(**request.json)
        course = Course.query.get(new_member.course_id)
        msg = Message("Вы успешно зарегистрированы на курс", sender="tensorschool.project@gmail.com", recipients=[new_member.email])
        msg.html = render_template('letter.html', course_name = course.title, course_date = (course.date_start).strftime("%m.%d.%Y"), member_name = new_member.name)
        mail.send(msg)

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
