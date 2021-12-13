from flask import Blueprint
from flask_admin.contrib.sqla import ModelView
from flask_restful import Api, Resource, reqparse

from app import db, admin

from .models import Course, Member, Teacher

bp = Blueprint('main', __name__)
api = Api(bp)


class CourseModelView(ModelView):
    column_labels = {
        'title': 'Название',
        'short_description': 'Краткое описание',
        'description': 'Описание',
        'date_start': 'Дата начала',
        'duration': 'Кол-во занятий',
        'teacher': 'Преподаватель'
    }


admin.add_view(CourseModelView(Course, db.session, name='Курсы'))
admin.add_view(ModelView(Teacher, db.session, name='Преподаватели'))
admin.add_view(ModelView(Member, db.session, name='Участники'))


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

    def get(self):
        courses = Course.query.all()
        return [{
            "id": rec.id,
            "title": rec.title,
            "description": rec.description,
            "start_date": str(rec.date_start)
        } for rec in courses]


api.add_resource(Courses, '/course/<int:id>', endpoint='course')
api.add_resource(CoursesList, '/courses/', endpoint='courses')

