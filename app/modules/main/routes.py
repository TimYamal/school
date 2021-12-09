from flask import send_from_directory
from app import current_app

from . import bp


@bp.route('/', defaults={'path': ''})
def index(path):
    return send_from_directory(
        current_app.static_folder,
        'index.html'
    )
