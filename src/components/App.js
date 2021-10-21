import React,  {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listing, setListing] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listing => setListing(listing))
  },[])

  const handleDeleteListing = (deletedListing) => {
    // console.log(deletedListing)
      const newListings = listing.filter((singleListing) => singleListing.id !== deletedListing.id);
      setListing(newListings)
      fetch(`http://localhost:6001/listings/${deletedListing.id}`,{
        method: "DELETE",
      })
    }

    const formInput = userText => {
      setSearch(userText)
    }
  
    const filteredListings = () => {
      if (search.length > 0) {
        return listing.filter(singleListing => singleListing.description.toLowerCase().includes(search.toLowerCase()))
      } else {
        return listing
      }
    }
  
  return (
    <div className="app">
      <Header formInput={formInput}/>
      <ListingsContainer 
      listing={listing} 
      listings={filteredListings()}
      handleDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
