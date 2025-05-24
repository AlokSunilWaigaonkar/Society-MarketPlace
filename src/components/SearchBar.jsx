import React from 'react'

export default function SearchBar() {
  return (
    <div className=" search-bar">
        <input
          type="search"
          placeholder="Search by product name..."
          className="form-control input-section"
          style={{ maxWidth: "300px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
    <select
      className="form-select w-auto mx-3 input-section pe-5"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
        <option style={{background:'none'}} >All</option>
        <option>Books</option>
        <option>Furniture</option>
        <option>Electronics</option>
        <option>Fitness</option>
        <option>Appliances</option>
        <option>Home Decor</option>
        <option>Accessories</option>
=
    </select>
  </div>
  )
}
