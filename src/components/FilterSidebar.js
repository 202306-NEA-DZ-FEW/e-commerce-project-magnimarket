import React, { useEffect } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

const FilterSidebar = ({ categories, filters, setFilters }) => {
  const handleFilterChange = (event) => {
    const filterName = event.target.name
    const filterValue = event.target.value

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
    <div className=" left-0 top-0 h-full bg-white w-1/4 md:w-1/5 p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold">Filter Products</h2>
      <div className="mt-4">
        <div className="mb-4">
          <label htmlFor="title" className="block">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border rounded"
            onChange={handleFilterChange}
            value={filters.title || ""}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block">
            Price Range:
          </label>
          <Slider
            range
            min={0}
            max={1000}
            step={100}
            value={[filters.price_min, filters.price_max]}
            onChange={handlePriceRangeChange}
          />
          <div className="flex justify-between">
            <span>{filters.price_min}</span>
            <span>{filters.price_max}</span>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block">
            Category:
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-3 py-2 border rounded"
            value={filters.categoryId || "all"}
            onChange={handleCategorySelectChange}
          >
            <option value="all">All</option>
            {categories.slice(0, 5).map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
