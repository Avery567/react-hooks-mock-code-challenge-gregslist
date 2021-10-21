import React, {useState} from "react";

function ListingCard({singleListing, description, image, location, handleDeleteListing}) {
 
    
  const [favorate, setFavorate] = useState(false)

  const handleFavorate = () => setFavorate(!favorate)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details" >
        {/* <button onClick={handleFavorate} className="emoji-button favorite active"> {
          true? '★' : '☆'}</button> */}
        {favorate ? (
          <button className="emoji-button favorite active" onClick={handleFavorate}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorate}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={()=>handleDeleteListing(singleListing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
