import React from "react";
import "./style.css";


function Search({searchTerm, editSearchTerm}) {
 
    return (
      <div>
        <form className="SearchForm">
          <input
            value = {searchTerm} 
            // value={this.state.name}
            name="name"
            onChange = {editSearchTerm}
            // onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
        
          {/* <button onClick={this.handleFormSubmit}>Submit</button> */}
        </form>
      </div>
    );
  }


export default Search;
