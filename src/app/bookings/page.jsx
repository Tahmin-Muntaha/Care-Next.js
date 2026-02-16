import React from 'react';

const fetchBookings = async () => {
  const res = await fetch(`http://localhost:3000/api/bookings`);
  const data = await res.json();
  return data;
};

const BookingsPage = async () => {
  const bookings = await fetchBookings();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Bookings</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.length === 0 ? (
          <p className="text-gray-500 col-span-full">No bookings available.</p>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white shadow-md rounded-lg p-5 flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {booking.name}
              </h2>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Category:</span> {booking.category}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Duration:</span> {booking.duration} hrs
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Location:</span> {booking.location}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Total Cost:</span> ${booking.totalCost}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Date:</span> {new Date(booking.date).toLocaleString()}
              </p>
              <p
                className={`mt-2 font-semibold ${
                  booking.status === "Pending"
                    ? "text-yellow-600"
                    : booking.status === "Confirmed"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Status: {booking.status}
              </p>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
