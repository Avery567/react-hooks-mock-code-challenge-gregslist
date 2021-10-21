import React from "react";
import Search from "./Search";
import SortActivator from "./SortActivator"



function Header({handleSearch, handleSort}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <SortActivator handleSort={handleSort}/>
      <Search handleSearch={handleSearch}/>
    </header>
  );
}

export default Header;
