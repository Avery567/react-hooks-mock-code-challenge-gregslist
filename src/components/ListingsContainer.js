import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing, handleDeleteListing}) {

  return (
    <main>
      <ul className="cards">
        {listing.map(singleListing => 
        <ListingCard 
          handleDeleteListing={handleDeleteListing}
          description={singleListing.description} 
          key={singleListing.id}
          image={singleListing.image} 
          location={singleListing.location}
          singleListing={singleListing}
          />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
