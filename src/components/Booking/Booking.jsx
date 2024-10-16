import React, { useState } from 'react';

function Booking() {
  const [tripType, setTripType] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [error, setError] = useState('');

  const handleTripChange = (e) => {
    setTripType(e.target.value);
  };

  const handlePassengerChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= 0) {
      setError('Passenger count must be at least 1.');
    } else if (tripType === 'Solo Travel' && value > 1) {
      setError('Solo travel allows only 1 passenger.');
    } else {
      setPassengers(value);
      setError('');
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen"
        style={{
          backgroundImage: 'url("https://wallpapers.com/images/featured/best-travel-background-04ml2h9wywaoo6ei.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg p-8 mt-10 md:mt-20 bg-slate-400 shadow-xl mb-16 flex justify-center opacity-90">
          <form
            action="https://formspree.io/f/mwpedyoq"
            method="POST"
            className="flex flex-col gap-6 w-full"
          >
            <input
              type="text"
              name="Username"
              className="rounded-lg outline-none border-2 p-3 w-full text-gray-700 placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-300"
              placeholder="Enter Full Name"
              required
            />
            <input
              type="email"
              name="Email"
              className="rounded-lg outline-none border-2 p-3 w-full text-gray-700 placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-300"
              placeholder="Enter a valid Email"
              required
            />
            <input
              type="tel"
              name="Contact"
              className="rounded-lg outline-none border-2 p-3 w-full text-gray-700 placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-300"
              placeholder="Enter Contact Number"
              required
            />
            <input
              type="text"
              name="Address"
              className="rounded-lg outline-none border-2 p-3 w-full text-gray-700 placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-300"
              placeholder="Enter Pickup Address/Location"
              required
            />
            <input
              type="number"
              name="Passenger"
              className="rounded-lg outline-none border-2 p-3 w-full text-gray-700 placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-300"
              placeholder="No. of Passengers"
              onChange={handlePassengerChange}
              required
            />
            {error && <span className="text-red-600">{error}</span>}
            <select
              name="tripType"
              className="rounded-lg outline-none border-2 p-3 w-full text-gray-700 placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-300"
              value={tripType}
              onChange={handleTripChange}
              required
            >
              <option value="">Select Trip Type</option>
              <option value="Solo Travel">Solo Travel</option>
              <option value="Family Travel">Family Travel</option>
              <option value="Pet Travel">Pet Travel</option>
            </select>
            <input
              type="datetime-local"
              name="pickupDate"
              className="rounded-lg outline-none border-2 p-3 w-full text-gray-700 placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-300"
              required
            />
            <div className="flex gap-4">
              <input
                type="submit"
                className="w-full md:w-1/3 lg:w-1/4 outline-none bg-red-600 text-white p-3 rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-red-700"
                value="Submit"
              />
              <button
                type="reset"
                className="w-full md:w-1/3 lg:w-1/4 outline-none bg-gray-600 text-white p-3 rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-700"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Booking;
