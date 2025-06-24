import React from "react";
import MovieNavbar from "../Component/Navbar/MovieNavbar.Component";

const MovieLayoutHOC =
  (Component) =>
  (...props) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
        Footer
      </div>
    );
  };

export default MovieLayoutHOC;
