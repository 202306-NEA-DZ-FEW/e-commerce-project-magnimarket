import React, { useState } from "react"

export default function ProductRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission, e.g., send data to the server
    console.log("Form data:", formData)
    // You can implement form submission logic here
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-bkg shadow-lg rounded-lg relative">
      <button
        className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 focus:outline-none"
        onClick={() => window.history.back()}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <h1 className="text-2xl font-semibold dark:text-gray-400 text-center mb-4">
        Product Registration
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Country Selector */}
        <div className="mb-4 dark:text-gray-400">
          <label htmlFor="country" className="block text-lg font-semibold">
            Country:
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
          >
            <option value="">Select your country</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="canada">Algeria</option>
            <option value="canada">Germany</option>
            <option value="canada">Yamen</option>
            <option value="canada">Japan</option>
            <option value="canada">Turkey</option>
            <option value="canada">Egypt</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        {/* Personal Information */}
        <fieldset className="mb-6">
          <legend className="text-lg dark:text-gray-400 font-semibold">
            Personal Information
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-serif text-gray-700 dark:text-gray-500"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-serif text-gray-700 dark:text-gray-500"
              >
                Phone Number:
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="phoneCode"
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  required
                  placeholder="+213"
                  className="flex-none w-16 px-4 py-2 mt-1 mr-2 text-sm border border-gray-300 rounded-l-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                />
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="123456789"
                  className="flex-grow px-4 py-2 mt-1 text-sm border border-gray-300 rounded-r-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-serif text-gray-700 dark:text-gray-500"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
        </fieldset>

        {/* Shipping Address */}
        <fieldset className="mb-6">
          <legend className="text-lg font-semibold dark:text-gray-400">
            Shipping Address
          </legend>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-serif text-gray-700 dark:text-gray-500"
            >
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="123 Main St"
              className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-serif text-gray-700 dark:text-gray-500"
              >
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="New York"
                className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="zipCode"
                className="block text-sm font-serif text-gray-700 dark:text-gray-500"
              >
                ZIP Code:
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                placeholder="12345"
                className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
          </div>
        </fieldset>

        {/* Payment Information */}
        <fieldset className="mb-6">
          <legend className="text-lg dark:text-gray-400 font-semibold">
            Payment Information
          </legend>
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-serif text-gray-700 dark:text-gray-500"
            >
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              placeholder="**** **** **** ****"
              className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="expDate"
                className="block text-sm font-serif text-gray-700 dark:text-gray-500"
              >
                Expiration Date:
              </label>
              <input
                type="text"
                id="expDate"
                name="expDate"
                value={formData.expDate}
                onChange={handleChange}
                required
                placeholder="MM/YYYY"
                className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cvv"
                className="block text-sm font-serif text-gray-700 dark:text-gray-500"
              >
                CVV:
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                placeholder="123"
                className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              />
            </div>
          </div>
        </fieldset>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-serif text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Complete Purchase
          </button>
        </div>
      </form>
    </div>
  )
}
