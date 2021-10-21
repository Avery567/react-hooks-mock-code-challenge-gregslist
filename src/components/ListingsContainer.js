import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing, handleDeleteListing}) {
  const rendo = () => Math.floor(Math.random()*100000000)
  return (
    <main>
      <ul className="cards">
        {listing.map(singleListing => 
        <ListingCard 
          handleDeleteListing={handleDeleteListing}
          description={singleListing.description} 
          key={rendo()}
          image={singleListing.image} 
          location={singleListing.location}
          singleListing={singleListing}
          />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
