from fastapi import FastAPI

from db import get_submissions_and_users, get_submission_and_user, get_users_and_roles
from models import Submission, User


app = FastAPI()


@app.get("/users")
def get_users() -> list[User]:
    return get_users_and_roles()


@app.get("/submissions")
def get_submissions() -> list[Submission]:
    return get_submissions_and_users()


@app.get("/submissions/{id}")
def get_submission(id: str) -> Submission:
    return get_submission_and_user(id)