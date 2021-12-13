from datetime import datetime

from flask_admin.contrib.sqla import ModelView

from app import admin, db
from app.modules.main import Course, Teacher, Member


class CourseModelView(ModelView):
    column_labels = {
        'title': 'Название',
        'short_description': 'Краткое описание',
        'description': 'Описание',
        'date_start': 'Дата начала',
        'duration': 'Кол-во занятий',
        'teacher': 'Преподаватель'
    }

    column_formatters = {
        'date_start': lambda view, context, model, name: datetime.strftime(getattr(model, name), '%d.%m.%Y')
    }


admin.add_view(CourseModelView(Course, db.session, name='Курсы'))
admin.add_view(ModelView(Teacher, db.session, name='Преподаватели'))
admin.add_view(ModelView(Member, db.session, name='Участники'))
