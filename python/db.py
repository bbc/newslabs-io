import sqlite3

from models import Submission, User


DB_PATH = '../sql/dev.db'


def dict_factory(cursor, row):
    # https://docs.python.org/3/library/sqlite3.html#sqlite3.Connection.row_factory
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


conn = sqlite3.connect(DB_PATH, check_same_thread=False)
conn.row_factory = dict_factory


def get_users_and_roles():
    cursor = conn.cursor()
    cursor.execute(f"""
        SELECT username, created_at, users.id, role_id, description
        FROM users
        LEFT JOIN roles ON roles.id = users.role_id
    """)
    results = cursor.fetchall()
    cursor.close()
    return [User(**row) for row in results]

def get_submissions_and_users():
    cursor = conn.cursor()
    cursor.execute(f"""
        SELECT submissions.id, title, text, submissions.created_at, user_id, username
        FROM submissions
        LEFT JOIN users ON users.id = submissions.user_id
    """)
    results = cursor.fetchall()
    cursor.close()
    return [Submission(**row) for row in results]

def get_submission_and_user(id: int):
    cursor = conn.cursor()
    cursor.execute(f"""
        SELECT submissions.id, title, text, submissions.created_at, user_id, username
        FROM submissions
        LEFT JOIN users ON users.id = submissions.user_id
        WHERE submissions.id = (?)
    """, (id, ))
    result = cursor.fetchone()
    cursor.close()
    return Submission(**result)