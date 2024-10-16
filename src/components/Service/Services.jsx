import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <div
        className={`flex flex-col bg-gradient-to-br from-slate-400 via-gray-300 to-white rounded-lg p-8 mb-10 transition-opacity duration-1000 shadow-xl hover:shadow-2xl transform-gpu ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link to="/booking">
          <h3 className="border text-black border-blue-500 font-bold hover:bg-blue-500 hover:text-white rounded-md px-4 py-2 w-32 m-4 flex justify-center transition-all duration-300 shadow-sm hover:shadow-lg">
            Book Now
          </h3>
        </Link>
        
        {/* Solo trip section */}
        <div className="flex flex-col mt-10 text-center">
          <h2
            className={`text-3xl font-bold mb-5 transition-transform duration-700 transform-gpu ${
              visible ? "translate-y-0" : "translate-y-10"
            } hover:scale-110 hover:text-blue-600 transition-all`}
          >
            Solo trip
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 rounded-lg px-4 py-5 items-center">
            <img
              src="/images/solo-travel.webp"
              alt="solo-travel"
              className={`w-full md:w-1/3 h-52 rounded-md border-2 object-cover hover:scale-105 hover:shadow-xl cursor-pointer transition-transform duration-1000 transform-gpu ${
                visible ? "translate-x-0" : "-translate-x-10"
              }`}
            />
            <p className="w-full md:w-1/3 text-left md:text-center text-lg leading-relaxed text-gray-800 hover:text-gray-700 transition-all duration-300">
              Solo trips are all about flexibility and efficiency. Whether you're commuting for work, running errands, or heading to an event, cab services provide a personal, stress-free journey. You can relax, listen to music, catch up on emails, or simply enjoy the ride.
            </p>
            <div className="border-l-2 border-gray-300 h-72 hidden md:block ml-5"></div>
            <div className="flex flex-col text-left w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Instructions
              </h3>
              <ul className="list-inside pl-3 space-y-4 bg-gray-100 p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md">
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">1.</b>
                  <span><b>Choose the Right Vehicle:</b> Opt for a compact or standard-sized cab for an economical and efficient ride.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">2.</b>
                  <span><b>Prepare Payment:</b> Ensure you have cash, card, or the app ready for seamless payment.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">3.</b>
                  <span><b>Specify Stops:</b> Inform the driver beforehand if you need multiple stops.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">4.</b>
                  <span><b>Safety First:</b> Share your ride details with a trusted contact and buckle up.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Family trip section */}
        <div className="flex flex-col mt-10 text-center">
          <h2
            className={`text-3xl font-bold mb-5 transition-transform duration-700 transform-gpu ${
              visible ? "translate-y-0" : "translate-y-10"
            } hover:scale-110 hover:text-blue-600 transition-all`}
          >
            Family trip
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 rounded-lg px-4 py-5 items-center">
            <img
              src="/images/family-road-trip.jpg"
              alt="family-trip"
              className={`w-full md:w-1/3 h-52 rounded-md border-2 object-cover hover:scale-105 hover:shadow-xl cursor-pointer transition-transform duration-1000 transform-gpu ${
                visible ? "translate-x-0" : "-translate-x-10"
              }`}
            />
            <p className="w-full md:w-1/3 text-left md:text-center text-lg leading-relaxed text-gray-800 hover:text-gray-700 transition-all duration-300">
              When traveling with family, comfort, space, and safety are top priorities. Cabs equipped with larger seating capacity can accommodate everyone, ensuring a pleasant and stress-free ride.
            </p>
            <div className="border-l-2 border-gray-300 h-72 hidden md:block ml-5"></div>
            <div className="flex flex-col text-left w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Instructions
              </h3>
              <ul className="list-inside pl-3 space-y-4 bg-gray-100 p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md">
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">1.</b>
                  <span><b>Book a Larger Vehicle:</b> Opt for a minivan or SUV for comfort and space.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">2.</b>
                  <span><b>Plan Entertainment:</b> Keep the kids entertained with games or music.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">3.</b>
                  <span><b>Request Child Seats:</b> If needed, request child safety seats in advance.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">4.</b>
                  <span><b>Pack Essentials:</b> Ensure you have snacks, drinks, and any necessary medication for the trip.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">5.</b>
                  <span><b>Communicate Clearly:</b> Let the driver know about any stops or specific routes you’d prefer.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* With pet section */}
        <div className="flex flex-col mt-10 text-center">
          <h2
            className={`text-3xl font-bold mb-5 transition-transform duration-700 transform-gpu ${
              visible ? "translate-y-0" : "translate-y-10"
            } hover:scale-110 hover:text-blue-600 transition-all`}
          >
            With pet
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 rounded-lg px-4 py-5 items-center">
            <img
              src="/images/withFamily.jpg"
              alt="with-pet"
              className={`w-full md:w-1/3 h-52 rounded-md border-2 object-cover hover:scale-105 hover:shadow-xl cursor-pointer transition-transform duration-1000 transform-gpu ${
                visible ? "translate-x-0" : "-translate-x-10"
              }`}
            />
            <p className="w-full md:w-1/3 text-left md:text-center text-lg leading-relaxed text-gray-800 hover:text-gray-700 transition-all duration-300">
              Traveling with a pet can require additional planning, but many cab services are pet-friendly and can accommodate your furry friends. Whether you're headed to the vet or simply taking your pet on an adventure, a cab service can make the journey smooth and hassle-free.
            </p>
            <div className="border-l-2 border-gray-300 h-72 hidden md:block ml-5"></div>
            <div className="flex flex-col text-left w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Instructions
              </h3>
              <ul className="list-inside pl-3 space-y-4 bg-gray-100 p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md">
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">1.</b>
                  <span><b>Check Pet Policies:</b> Ensure the cab service is pet-friendly.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">2.</b>
                  <span><b>Prepare Pet Supplies:</b> Bring a carrier, leash, and water for your pet.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">3.</b>
                  <span><b>Clean Up After Pets:</b> Keep pet cleaning supplies on hand for any messes.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">4.</b>
                  <span><b>Stay Safe:</b> Make sure your pet is secure during the ride, either in a carrier or seat belt harness.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <b className="text-blue-500">5.</b>
                  <span><b>Inform the Driver:</b> Let the driver know you’re bringing a pet.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
