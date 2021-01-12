import React from "react";

const SearchForm = props => {
  return (
    <form>
    <div className="form-group" style ={{ textAlign: "center"}}>
      <input style ={{ textAlign: "left" }}
      onChange ={props.handleInputChange}
      value={props.value}
      name="search"
      type="text"
      className="form-control"
      placeholder="Search for a Book, Author or Topic"
      id="search"
       />
    </div>
    <button onClick={props.handleFormSubmit} className="btn-primary">
      search
    </button>
    ,</form>
  );
}

export default SearchForm;

