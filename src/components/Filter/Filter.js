import React, { useEffect, useState } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import {
  FaGripHorizontal,
  FaListUl,
  FaDollarSign,
  FaTenge,
} from "react-icons/fa"
const FilterSidebar = ({ categories, filters, setFilters }) => {
  const handleFilterChange = (event) => {
    const filterName = event.target.name
    const filterValue = event.target.value.toLowerCase()

    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }))
  }

  const handlePriceRangeChange = (range) => {
    const [minPrice, maxPrice] = range

    setFilters((prevFilters) => ({
      ...prevFilters,
      price_min: minPrice,
      price_max: maxPrice,
    }))
  }

  const handleCategorySelectChange = (event) => {
    const categoryId = event.target.value
    setFilters((prevFilters) => ({
      ...prevFilters,
      categoryId: categoryId === "all" ? null : categoryId,
    }))
  }

  useEffect(() => {
    const queryParams = []

    if (filters.categoryId) {
      queryParams.push(`categoryId=${filters.categoryId}`)
    }

    if (filters.title) {
      queryParams.push(`title=${filters.title}`)
    }

    if (filters.price_min && filters.price_max) {
      queryParams.push(
        `price_min=${filters.price_min}&price_max=${filters.price_max}`,
      )
    }

    const queryString = queryParams.join("&")
    window.history.replaceState({}, "", `/products?${queryString}`)
  }, [filters, categories])
  return (
    <div
      className={`filters z-10 -mt-12 sticky text-bkg hover:text-bkg/60 top-0 bg-accent pl-2 pr-12 py-4 w-0 overflow-hidden h-screen hover:w-96 transition-all ease-in-out duration-300`}
    >
      <div className="grid grid-cols-2 mt-24 h-96 -space-x-8">
        <div className="grid grid-rows-4   h-full">
          <FaGripHorizontal className=" inline-block text-4xl mb-4 " />
          <FaTenge className=" inline-block text-4xl mb-4" />
          <FaListUl className=" inline-block text-4xl mb-4" />
          <FaDollarSign className=" inline-block text-4xl mb-4" />
        </div>
        <div className="filtersChild grid grid-rows-4 text-center h-full transition-all duration-600 ease-in-out">
          <div className="mb-4 ">
            <h2 className="text-xl font-semibold text-bkg inline-block">
              Filter Products
            </h2>
          </div>
          <div className="mb-4 ">
            {/* <label htmlFor="title" className="block">
              Title:
            </label> */}
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 text-content"
              onChange={handleFilterChange}
              value={filters.title || ""}
              placeholder="Lookup a title"
            />
          </div>
          <div className="mb-4 ">
            {/* <label htmlFor="category" className="block">
              Category:
            </label> */}
            <select
              id="category"
              name="category"
              className="border rounded w-full py-2 px-3 text-content"
              value={filters.categoryId || "all"}
              onChange={handleCategorySelectChange}
            >
              <option value="all">Categories</option>
              {categories.slice(0, 5).map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 ">
            {/* <label htmlFor="price">Price Range:</label> */}
            <Slider
              range
              min={0}
              max={1000}
              step={100}
              dots={true}
              value={[filters.price_min, filters.price_max]}
              onChange={handlePriceRangeChange}
            />
            <div className="flex justify-between text-bkg font-semibold">
              <span>{`${filters.price_min} $`}</span>
              <span>{`${filters.price_max} $`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
