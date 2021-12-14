from datetime import datetime

from flask_admin.contrib.sqla import ModelView
from flask_ckeditor import CKEditorField

from app import admin, db
from .models import Course, Teacher, Member


class CourseAdminView(ModelView):
    column_labels = {
        'title': 'Название',
        'short_description': 'Краткое описание',
        'description': 'Описание',
        'date_start': 'Дата начала',
        'duration': 'Кол-во занятий',
        'teacher': 'Преподаватель'
    }

    column_list = [
        'title',
        'date_start',
        'duration',
        'teacher'
    ]

    column_formatters = {
        'date_start': lambda view, context, model, name: datetime.strftime(getattr(model, name), '%d.%m.%Y')
    }

    form_overrides = {
        'description': CKEditorField
    }

    create_template = 'edit.html'
    edit_template = 'edit.html'


class TeacherAdminView(ModelView):
    column_labels = {
        'surname': 'Фамилия',
        'name': 'Имя',
        'patronymic': 'Отчество',
        'description': 'Описание',
        'courses': 'Курсы',
        'photo': 'Фото'
    }


class MemberAdminView(ModelView):
    column_labels = {
        'name': 'Имя',
        'telephone': 'Телефон',
        'email': 'Email',
        'course': 'Курс'
    }

    column_searchable_list = [
        'name',
        'telephone',
        'email',
        'course.title'
    ]

    column_filters = [
        'name',
        'email',
        'telephone',
        'course.title'
    ]


admin.add_view(CourseAdminView(Course, db.session, name='Курсы'))
admin.add_view(TeacherAdminView(Teacher, db.session, name='Преподаватели'))
admin.add_view(MemberAdminView(Member, db.session, name='Участники'))
