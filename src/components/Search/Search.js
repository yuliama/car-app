import React, { useState } from 'react';
import './Search.css';

function Search({ setSearchTerm }) {

    return (
        <div className="search">
            <input type="text" placeholder="Please enter a name to filter actors"></input>
            {/* onChange={(e) => setSearchTerm(e.target.value)}  */}
        </div>
    )
}

export default Search;