from flask import url_for, flash, render_template, request
from flask_login import current_user, logout_user, login_user
from werkzeug.urls import url_parse
from werkzeug.utils import redirect

from app import login as app_login
from . import bp
from .forms import LoginForm
from .models import User


@bp.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return url_for('admin.index')

    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Некорректная пара лоин-пароль')
            return redirect(url_for('auth.login'))

        login_user(user, remember=form.remember_me.data)

        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('admin.index')

        return redirect(next_page)

    return render_template(
        'login.html',
        title='Войти',
        form=form
    )


@bp.route('/logout')
def logout():
    logout_user()
    return redirect('/')


@app_login.user_loader
def load_user(user_id):
    return User.query.get(user_id)
