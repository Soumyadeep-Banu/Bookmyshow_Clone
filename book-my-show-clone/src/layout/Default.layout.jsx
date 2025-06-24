import React from "react"; //just type rafce
import Navbar from "../Component/Navbar/Navbar.Component";

const DefaultLayoutHOC =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        Footer
      </div>
    );
  };

export default DefaultLayoutHOC;
