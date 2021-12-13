from flask import Blueprint
from flask_restful import Api, Resource, reqparse

from app import db

from .models import Course

bp = Blueprint('main', __name__)
api = Api(bp)


class Courses(Resource):

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'short_description': self.short_description,
            'description': self.description,
            'date_start': self.date_start,
            'duration': self.duration
        }

    parser = reqparse.RequestParser()

    def get(self, id):
        rec = Course.query.get(id)
        return {
            "id": rec.id,
            "title": rec.title,
            "description": rec.description,
            "date_start": str(rec.date_start)
        }

    def post(self):
        args = parser.parse_args()
        addedcourse = Course(title=args['title'], short_description=args['short_description'], description=args['description'], date_start=args['date_start'], duration=args['duration'])
        db.session.add(addedcourse)
        db.session.commit()
        return Courses.serialize(addedcourse), 201

    def delete(self, id):
            rec = Course.query.get(id)
            db.session.delete(rec)
            db.session.commit()
            return '', 204


class CoursesList(Resource):

    def get(self):
        courses = Course.query.all()
        return [{
            "id": rec.id,
            "title": rec.title,
            "description": rec.description,
            "date_start": str(rec.date_start)
        } for rec in courses]

class Teachers(Resource):

    def serialize(self):
        return {
            'id': self.id,
            'surname': self.surname,
            'name': self.name,
            'patronymic': self.patronymic,
            'description': self.description
        }

    parser = reqparse.RequestParser()

    def get(self, id):
        rec = Teacher.query.get(id)
        return {
            "id": rec.id,
            "surname": rec.surname,
            "name": rec.name,
            "patronymic": rec.patronymic
        } 

    def post(self):
        args = parser.parse_args()
        addedteacher = Teacher(surname=args['surname'], name=args['name'], patronymic=args['patronymic'], description=args['description'])
        db.session.add(addedteacher)
        db.session.commit()
        return Teachers.serialize(addedteacher), 201

    def delete(self, id):
            rec = Teacher.query.get(id)
            db.session.delete(rec)
            db.session.commit()
            return '', 204

class TeachersList(Resource):

    def get(self):
        teachers = Teacher.query.all()
        return [{
            "id": rec.id,
            "surname": rec.surname,
            "name": rec.name,
            "patronymic": rec.patronymic
        } for rec in teachers]


#api.add_resource(Courses, '/course/', endpoint='course')
api.add_resource(Courses, '/course/<int:id>', endpoint='course')
api.add_resource(CoursesList, '/courses/', endpoint='courses')


#api.add_resource(Teachers, '/teacher/', endpoint='teacher')
api.add_resource(Teachers, '/teacher/<int:id>', endpoint='teacher')
api.add_resource(TeachersList, '/teachers/', endpoint='teachers')

