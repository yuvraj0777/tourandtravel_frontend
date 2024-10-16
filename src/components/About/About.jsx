import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen overflow-hidden bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hill_background.jfif')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-opacity-60 text-white min-h-screen">
          <div className="text-white mt-5 flex flex-col md:flex-row w-full max-w-6xl mx-auto py-8 px-6 mb-16">
            <img
              src="/images/cabforabout.jfif"
              alt="Cab Service"
              className="w-full md:w-1/2 mb-5 md:mb-0 mr-0 md:mr-10 rounded-xl object-cover shadow-xl transform transition-transform hover:scale-105"
            />

            <div className="flex flex-col justify-center w-full md:w-1/2">
              <h1 className="text-gray-100 text-4xl font-extrabold text-center">
                Hi Everyone
              </h1>
              <p className="text-gray-200 text-lg mt-6 leading-relaxed text-center">
                Whether you're traveling solo, with family, or with a pet, our
                cab services provide the perfect balance of comfort,
                convenience, and safety for all your needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-10 px-10">
            <h1 className="text-4xl font-bold text-center text-gray-100">
              Our Services
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {["Solo Travel", "Family Travel", "Pet Friendly"].map(
                (service, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition hover:shadow-xl"
                  >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      {service}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {service === "Solo Travel" &&
                        "Fast, reliable, and comfortable transport for solo travelers."}
                      {service === "Family Travel" &&
                        "Spacious cabs perfect for family trips, ensuring comfort for everyone."}
                      {service === "Pet Friendly" &&
                        "Safe and comfortable rides for you and your pets."}
                    </p>
                    <Link
                      to="/services"
                      className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                    >
                      Learn More
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/booking"
              className="bg-green-500 text-white text-2xl py-3 px-8 rounded-lg hover:bg-green-600 transition"
            >
              Book a Ride
            </Link>
          </div>

          <div className="flex flex-col items-start mt-16 px-10 mb-5">
            <h1 className="text-3xl font-bold text-gray-100 mb-4">
              Contact Us
            </h1>
            <div className="space-y-2 text-lg text-gray-300">
              <p>
                <i className="fa-solid fa-phone"></i> 7409182391
              </p>
              <p>
                <i className="fa-solid fa-message"></i> 7867878576
              </p>
              <p className="text-blue-500 hover:underline">
                <i className="fa-solid fa-envelope text-gray-300"></i>{" "}
                deepaktourandtravels970@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-16 px-10">
            <h1 className="text-3xl font-bold text-gray-100 text-center mb-4">
              Why Choose Us?
            </h1>
            <ul className="list-none space-y-2 text-lg text-gray-300">
              <li className="flex items-center">
                <i className="fa-solid fa-clock text-green-400 mr-3"></i>
                Reliable and punctual service
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-user-tie text-blue-400 mr-3"></i>
                Professional and friendly drivers
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-tag text-yellow-400 mr-3"></i>
                Affordable pricing with no hidden fees
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-car-side text-red-400 mr-3"></i>
                Clean and well-maintained vehicles
              </li>
            </ul>
          </div>

          <div className="mt-16 px-10 mb-5">
            <h1 className="text-3xl font-bold text-gray-100 text-center mb-4">
              Frequently Asked Questions
            </h1>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <h2 className="text-gray-800 font-semibold">
                  1. How can I book a ride?
                </h2>
                <p className="text-gray-600">
                  You can easily book a ride through our website.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <h2 className="text-gray-800 font-semibold">
                  2. Are your drivers insured?
                </h2>
                <p className="text-gray-600">
                  Yes, all our drivers are fully insured and undergo background
                  checks.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <h2 className="text-gray-800 font-semibold">
                  3. Can I cancel my booking?
                </h2>
                <p className="text-gray-600">
                  Yes, you can cancel your booking anytime before your scheduled
                  ride without any charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
