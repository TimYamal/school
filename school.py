from app import db, create_app
from app.modules.main.models import Course

app = create_app()


@app.route('/')
@app.route('/index.html')
def index():
    return app.send_static_file('index.html')


@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'Course': Course}
