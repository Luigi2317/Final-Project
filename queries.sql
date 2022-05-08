SELECT * FROM martial_arts_Chuck_Norris;

SELECT films_name FROM films_Chuck_Norris;

SELECT films_name, actors_name FROM films_Chuck_Norris
JOIN actors_rival_Chuck_Norris ON films_name = movies_in_common;

SELECT films_name,award_name FROM  films_Chuck_Norris 
JOIN award_Chuck_Norris ON award_movie_name=films_name;