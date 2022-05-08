CREATE TABLE films_Chuck_Norris(
	films_name VARCHAR(50) PRIMARY KEY,
	films_director VARCHAR(50),
	films_date INTEGER NOT NULL,
	films_country_production VARCHAR(50));

CREATE TABLE award_Chuck_Norris(
	award_name VARCHAR(50)PRIMARY KEY,
	award_year INTEGER,
	award_movie_name VARCHAR(50),
	award_type VARCHAR(50));

CREATE TABLE martial_arts_Chuck_Norris(
	martial_arts_name VARCHAR(50)PRIMARY KEY,
	martial_arts_level VARCHAR(50),
	martial_arts_landmark_year INTEGER,
	martial_arts_position INTEGER);

CREATE TABLE actors_rival_Chuck_Norris(
	actors_name VARCHAR(50)PRIMARY KEY,
	date_of_birth INTEGER,
	movies_in_common VARCHAR(50),
	country VARCHAR(50));