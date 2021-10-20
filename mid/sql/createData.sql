INSERT INTO roles(id, description)
VALUES(1, 'journalist');

INSERT INTO roles(id, description)
VALUES(2, 'public');

INSERT INTO users(id, username, role_id)
VALUES(1, 'John', 1);

INSERT INTO users(id, username, role_id)
VALUES(2, 'Aisha', 2);

INSERT INTO users(id, username, role_id)
VALUES(3, 'Kyra', 2);

INSERT INTO submissions(user_id, title, text)
VALUES(2, 'Tree in Birmingham', 'It fell over!');

INSERT INTO submissions(user_id, title, text)
VALUES(2, 'Tree in Birmingham 2', 'It''s back up');

INSERT INTO submissions(user_id, title, text)
VALUES(3, 'Zoom Hackin in the Lords', 'I have some details about how the Lords have been hacked!');