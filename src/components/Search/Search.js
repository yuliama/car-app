import React, { useState } from 'react';
import './Search.css';

function Search({ setSearchTerm }) {

    return (
        <div className="search">
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Please enter a name to filter actors"></input>

        </div>
    )
}

export default Search;