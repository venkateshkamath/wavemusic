import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    //return some JSX
    <nav>
      <h3>Waves </h3>
      {/* <h5>by Media House</h5> */}
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        {/*Can do here itself, negate the libraryStatus on click*/}
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};
export default Nav;
