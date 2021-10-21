import React from "react";

const SortActivator = ({handleSort}) => {


    return(
        <div style={{margin: "20px"}} onChange={(e)=>handleSort()}>
            Sort By Location<input type="checkbox" style={{margin: "5px"}} />
        </div>
    )


}

export default SortActivator;