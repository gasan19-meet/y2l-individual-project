from model import Base, Post
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///database.db')
Base.metadata.create_all(engine)
DBSession = sessionmaker(bind=engine)
session = DBSession()


def add_Post(food, recipe):
    post_object = Post(food = food, recipe = recipe)
    session.add(post_object)
    session.commit()


def query_post_by_food(food):
    foods = session.query(Post).filter_by(food = food).all()
    return foods



def query_all_posts():
    posts = session.query(
        Post).all()
    return posts

# def query_post_by_id(post_id):
#     post = session.query(Post).filter_by(id_table=post_id).first()
#     return post

def delete_all_posts():
    session.query(Post).delete()
    session.commit



