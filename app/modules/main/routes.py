from app import current_app

from . import bp


@bp.route('/')
def index():
    return current_app.send_static_file(
        'index.html'
    )
