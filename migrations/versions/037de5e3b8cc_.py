"""empty message

Revision ID: 037de5e3b8cc
Revises: b698a76bea4c
Create Date: 2021-12-13 23:05:10.335880

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '037de5e3b8cc'
down_revision = 'b698a76bea4c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('member', sa.Column('course_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'member', 'course', ['course_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'member', type_='foreignkey')
    op.drop_column('member', 'course_id')
    # ### end Alembic commands ###
