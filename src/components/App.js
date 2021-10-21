import React,  {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from "./Form";


function App() {

  const [listing, setListing] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState(false)
  // const [addedListing, setAddedListing] = useState("")

  
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

  const handleSearch = (userInput) => {
    setSearch(userInput)
  }

  const filteredResults = () => {
    if (search.length > 0) {
      return listing.filter(singleListing => singleListing.description.toLowerCase().includes(search.toLowerCase()))
    } else {
      return listing
    }
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const sortedListings = () => {
    if (sort) {
      return [...filteredResults()].sort((a,b) => {
        if (a.location < b.location) {
          return -1
        } else {
          return 1
        }
      })
    }
    return filteredResults()
  }

  const addListingToState = (listingInput) => {
    const updatedListing = [listingInput, ...listing]
    setListing(updatedListing)
  }
  
  return (
    <div className="app">
      <Header 
      handleSearch={handleSearch}
      handleSort={handleSort}
      />
      <Form addListingToState={addListingToState}/>
      <ListingsContainer 
      listing={sortedListings()} 
      handleDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
