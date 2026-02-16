"use client"

import React, { useState } from "react"

const BookNowBtn = ({ care }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [duration, setDuration] = useState("")
  const [location, setLocation] = useState("")
  const [totalCost, setTotalCost] = useState(0)

  const calculateCost = (value) => {
    if (!care) return
    const cost = Number(value) * care.chargePerHour
    setTotalCost(cost)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const booking = {
      careId: care._id,
      name: care.serviceName,
      category: care.category,
      duration,
      location,
      totalCost,
      status: "Pending",
      date:new Date()
    }

    try {
      const res = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      })

      if (!res.ok) {
        alert("Booking failed")
        return
      }

      await res.json()

      alert("Booking confirmed! Status: Pending")
      setIsOpen(false)
      setDuration("")
      setLocation("")
      setTotalCost(0)

    } catch (error) {
      alert("Something went wrong")
    }
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
      >
        Book Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 md:w-1/2 p-6 relative">

            <h2 className="text-2xl font-bold mb-4">
              Book {care?.serviceName}
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              &times;
            </button>

            <form onSubmit={handleSubmit}>

              <div className="mb-4">
                <label className="block font-semibold mb-1">
                  Duration (hours)
                </label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value)
                    calculateCost(e.target.value)
                  }}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div className="mb-4 font-semibold">
                Total Cost: 
                <span className="text-green-700"> ₹{totalCost}</span>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
              >
                Confirm Booking
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookNowBtn
