import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = ({handleSubmit,keywords,setKeywords}) => {
  return (
    <>
      <div className="top">
                    <h1>Image Gen </h1>
                    <form id="search_form" onSubmit={handleSubmit}>
                        <input
                            type="search"
                            id="search_box"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                            placeholder='Search here'
                        />
                        <button type="submit"><CiSearch /></button>
                    </form>
                </div>
    </>
  )
}

export default Search
