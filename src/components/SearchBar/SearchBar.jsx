/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './SearchBar.css'

const SearchBar = ({searchNews}) => {

    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        searchNews(query);
    }
    return (
        <>
            <div className="search-bar">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder='Search for news...'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit">
                        <AiOutlineSearch />
                    </button>
                </form>
            </div>
        </>
    )
}

export default SearchBar
