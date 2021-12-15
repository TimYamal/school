from flask_admin.contrib.sqla import ModelView

from app import admin, db
from .models import User


class UserAdminView(ModelView):
    column_labels = {
        'username': 'Логин',
        'password_hash': 'Хэш пароля'
    }

    can_delete = False
    can_edit = False

    column_exclude_list = [
        'password_hash'
    ]


admin.add_view(UserAdminView(User, db.session, name='Администраторы'))
