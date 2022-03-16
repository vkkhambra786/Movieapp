import React, { Fragment } from "react";
import Movie from "./Movie";
import classes from "./Moviedashboar.module.css";

const movies = [
  {
    id: 1,
    movie_name: "Tar",
    genre: "Drama",
    rating: 1.1,
    release_date: "12/18/2021",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    id: 2,
    movie_name: "Long Ships, The",
    genre: "Adventure",
    rating: 5,
    release_date: "1/3/2022",
    image_url: "http://dummyimage.com/250x250.png/dddddd/000000",
  },
  {
    id: 3,
    movie_name: "Landscape Suicide",
    genre: "Crime|Drama",
    rating: 3,
    release_date: "3/16/2021",
    image_url: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    id: 4,
    movie_name: "Pleasure at Her Majesty's",
    genre: "Comedy|Documentary",
    rating: 3,
    release_date: "4/2/2021",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    id: 5,
    movie_name: "Blue Like Jazz",
    genre: "Comedy|Drama",
    rating: 5,
    release_date: "9/25/2021",
    image_url: "http://dummyimage.com/250x250.png/dddddd/000000",
  },
  {
    id: 6,
    movie_name: "Hitchhiker's Guide to the Galaxy, The",
    genre: "Adventure|Comedy|Sci-Fi",
    rating: 2,
    release_date: "3/6/2022",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    id: 7,
    movie_name: "Hum Tum",
    genre: "Comedy|Drama|Musical|Romance",
    rating: 4,
    release_date: "12/29/2021",
    image_url: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    id: 8,
    movie_name: "Standing Up",
    genre: "Adventure|Children",
    rating: 2,
    release_date: "10/23/2021",
    image_url: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    id: 9,
    movie_name: "If I Were You",
    genre: "Comedy|Drama",
    rating: 4,
    release_date: "1/10/2022",
    image_url: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    id: 10,
    movie_name: "Steam of Life (Miesten vuoro)",
    genre: "Documentary",
    rating: 2,
    release_date: "5/10/2021",
    image_url: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    id: 11,
    movie_name: "They All Laughed",
    genre: "Comedy",
    rating: 4,
    release_date: "2/1/2022",
    image_url: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    id: 12,
    movie_name: "We Can Be Heroes",
    genre: "(no genres listed)",
    rating: 1,
    release_date: "3/4/2022",
    image_url: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    id: 13,
    movie_name: "Dante's Inferno: An Animated Epic",
    genre: "Action|Animation|Fantasy",
    rating: 4,
    release_date: "8/19/2021",
    image_url: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    id: 14,
    movie_name: "15 Minutes",
    genre: "Thriller",
    rating: 3,
    release_date: "12/11/2021",
    image_url: "http://dummyimage.com/250x250.png/dddddd/000000",
  },
  {
    id: 15,
    movie_name: "Cherry Crush",
    genre: "Drama|Thriller",
    rating: 2,
    release_date: "5/29/2021",
    image_url: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    id: 16,
    movie_name: "Havana",
    genre: "Drama",
    rating: 5,
    release_date: "5/21/2021",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    id: 17,
    movie_name: "Candidate, The (Kandidaten)",
    genre: "Thriller",
    rating: 1,
    release_date: "8/15/2021",
    image_url: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    id: 18,
    movie_name: "Primrose Path",
    genre: "Drama",
    rating: 5,
    release_date: "11/11/2021",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    id: 19,
    movie_name: "Tell It to the Marines",
    genre: "Comedy|Drama|Romance|War",
    rating: 2,
    release_date: "9/13/2021",
    image_url: "http://dummyimage.com/250x250.png/dddddd/000000",
  },
  {
    id: 20,
    movie_name: "Finding Fela!",
    genre: "Documentary",
    rating: 5,
    release_date: "1/17/2022",
    image_url: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    id: 21,
    movie_name: "Joffrey: Mavericks of American Dance",
    genre: "Documentary",
    rating: 3,
    release_date: "12/17/2021",
    image_url: "http://dummyimage.com/250x250.png/dddddd/000000",
  },
  {
    id: 22,
    movie_name: "Monkey Business",
    genre: "Comedy",
    rating: 5,
    release_date: "10/7/2021",
    image_url: "http://dummyimage.com/250x250.png/ff4444/ffffff",
  },
  {
    id: 23,
    movie_name: "Sunset Strip",
    genre: "Comedy",
    rating: 2,
    release_date: "9/28/2021",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    id: 24,
    movie_name: "Spring is Here",
    genre: "Comedy|Musical|Romance",
    rating: 5,
    release_date: "9/26/2021",
    image_url: "http://dummyimage.com/250x250.png/dddddd/000000",
  },
  {
    id: 25,
    movie_name: "Easier with Practice",
    genre: "Drama|Romance",
    rating: 5,
    release_date: "7/6/2021",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    id: 26,
    movie_name:
      "Pilate and Others (Pilatus und andere - Ein Film für Karfreitag) ",
    genre: "Drama",
    rating: 4,
    release_date: "10/31/2021",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    id: 27,
    movie_name: "Soviet Story, The",
    genre: "Documentary",
    rating: 4,
    release_date: "5/2/2021",
    image_url: "http://dummyimage.com/250x250.png/cc0000/ffffff",
  },
  {
    id: 28,
    movie_name: "Hana (Hana yori mo naho)",
    genre: "Comedy|Drama",
    rating: 3,
    release_date: "1/21/2022",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    id: 29,
    movie_name: "Burn Paris Burn",
    genre: "Animation|Fantasy|Mystery",
    rating: 2,
    release_date: "10/25/2021",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    id: 30,
    movie_name: "About Schmidt",
    genre: "Comedy|Drama",
    rating: 5,
    release_date: "6/18/2021",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
  {
    id: 31,
    movie_name: "About Schmidt",
    genre: "Comedy|Drama",
    rating: 5,
    release_date: "6/18/2021",
    image_url: "http://dummyimage.com/250x250.png/5fa2dd/ffffff",
  },
];

const MoviesDashboard = () => {
  const moviesContainer = movies.map((movie) => (
    <Movie
      movie_name={movie.movie_name}
      genre={movie.genre}
      rating={movie.rating}
      release_date={movie.release_date}
      key={movie.id}
    />
  ));
  return (
    <Fragment>
      <div className={classes["movies-cont"]}>{moviesContainer}</div>
    </Fragment>
  );
};

export default MoviesDashboard;
