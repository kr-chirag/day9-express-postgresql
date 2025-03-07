CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR, email VARCHAR UNIQUE, password VARCHAR);
INSERT INTO users(name, email, password) VALUES('a','a','a'),('b','b','b');
TRUNCATE TABLE users;
DROP TABLE users;
SELECT * FROM users;
SELECT * FROM users WHERE email='a@b.com' LIMIT 1;


CREATE TABLE IF NOT EXISTS user_tokens (id SERIAL PRIMARY KEY,user_id INT, token VARCHAR, 
	FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE);
INSERT INTO user_tokens(user_id, token) VALUES(25,'bbbbbb');
SELECT * FROM user_tokens;
TRUNCATE TABLE user_tokens;
DROP TABLE user_tokes;