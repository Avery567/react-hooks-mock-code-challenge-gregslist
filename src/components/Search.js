import React, { useState } from "react";

function Search({handleSearch}) {

  const [form, setForm] = useState("")

  const handleForm = (e) => setForm(e.target.value)

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submitted");
    handleSearch(form)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={form}
        onChange={handleForm}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
