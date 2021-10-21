import React, {useState} from "react";

const Form = ({addListingToState}) => {

const [description, setDescription]=useState("") 
const [image, setImage]=useState("")
const [location, setLocation]=useState("")

const addDescription = (e) => setDescription(e.target.value)
const addImage = (e) => setImage(e.target.value)
const addLocation = (e) => setLocation(e.target.value)

const addListing = (e) => {
    e.preventDefault()
    const newAddedListing = {
        description: description,
        image: image,
        location: location
    }
    addListingToState(newAddedListing)
    fetch("http://localhost:6001/listings", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify(newAddedListing)
    });
    // console.log("submitted!!")
}

    return(
        <div style={{margin: "50px"}}>
            <form className="blackbox-form">  

                <label htmlFor="description">Description:</label><input id="description" name="description" onChange={addDescription}/>
                <label htmlFor="image">Image:</label><input id="image" name="image" onChange={addImage}/>
                <label htmlFor="location">Location:</label> <input id="location" name="location" onChange={addLocation}/>
                <button onClick={addListing}>Submit</button>

           </form>
        </div>
    )
}

export default Form;