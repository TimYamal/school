import importlib

from flask import Flask, redirect, current_app, url_for, request
from flask_ckeditor import CKEditor
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin, AdminIndexView
from flask_bootstrap import Bootstrap
from flask_login import LoginManager, current_user
from flask_mail import Mail, Message
# from flask_cors import CORS

from config import Config

db = SQLAlchemy()
migrate = Migrate()
admin = Admin(template_mode='bootstrap3')
bootstrap = Bootstrap()
mail = Mail()

# Авторизация
login = LoginManager()
login.login_view = 'auth.login'
login.login_message = 'Пожалуйста авторизуйтесь для доступа к этой странице'


class SchoolAdminIndexView(AdminIndexView):
    def is_accessible(self):
        return current_user.is_authenticated

    def inaccessible_callback(self, name, **kwargs):
        return redirect(url_for('auth.login', next=request.url))


def create_app(config_class=Config):
    app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db)
    admin.init_app(app, index_view=SchoolAdminIndexView(name='Главная'))
    bootstrap.init_app(app)
    login.init_app(app)
    mail.init_app(app)
    CKEditor(app)
    # CORS(app)

    for module in app.config['MODULES']:
        mod = importlib.import_module('app.modules.' + module)
        app.register_blueprint(mod.bp)

    return app