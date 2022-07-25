from datetime import datetime

from pydantic import BaseModel


class User(BaseModel):
    id: int
    username: str
    created_at: datetime
    role_id: int
    description: str


class Submission(BaseModel):
    id: int
    title: str
    text: str
    created_at: datetime
    user_id: int
    username: str