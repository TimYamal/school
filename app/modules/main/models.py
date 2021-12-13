from app import db


class Teacher(db.Model):
    __tablename__ = 'teacher'
    id = db.Column(db.Integer, primary_key=True)
    surname = db.Column(db.String(255), index=True)
    name = db.Column(db.String(255), index=True)
    patronymic = db.Column(db.String(255), index=True)
    description = db.Column(db.Text, index=True)
    courses = db.relationship('Course', backref='teacher', lazy='dynamic')

    def full_name(self):
        """Полное имя преподавателя"""
        return f'{self.surname} {self.name} {self.patronymic}'

    def __repr__(self):
        return self.full_name()


class Course(db.Model):
    __tablename__ = 'course'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), index=True, nullable=False)
    short_description = db.Column(db.String(255))
    description = db.Column(db.Text)
    date_start = db.Column(db.Date)
    duration = db.Column(db.Integer)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teacher.id'))
    members = db.relationship('Member', backref='course', lazy='dynamic')

    def __repr__(self):
        return self.title


class Member(db.Model):
    __tablename__ = 'member'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), index=True)
    telephone = db.Column(db.String(20), index=True)
    email = db.Column(db.String(30), index=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'))

    def __repr__(self):
        return self.name
