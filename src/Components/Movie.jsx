const Movie = (props) => {
  return (
    <div>
      <img
        src="http://dummyimage.com/250x250.png/5fa2dd/ffffff"
        alt="Movie-Thumbnail"
      />
      <h3>Name :{props.movie_name}</h3>
      <div>Type :{props.genre}</div>
      <h4>Rate :{props.rating}</h4>
      <div>RDate : {props.release_date}</div>
    </div>
  );
};

export default Movie;
