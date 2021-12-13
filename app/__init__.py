import importlib

from flask import Flask, current_app

from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from config import Config

db = SQLAlchemy()
migrate = Migrate()


def create_app(config_class=Config):
    app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)

    for module in app.config['MODULES']:
        mod = importlib.import_module('app.modules.' + module)
        app.register_blueprint(mod.bp)

    return app
