import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CardData } from "../Home/CardData";

function Details() {
  const { id } = useParams();
  const card = CardData[id];

  useEffect(() => {
    if (card) {
      document.title = `${card.title} - Details`;
    }
  }, [card]);


  if (!card) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-gray-600">Location not found!</h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10 items-center">
        <img
          src={card.url}
          alt={card.title || "Image"}
          className="w-full h-[20rem] object-cover mb-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:rotate-1"
        />

        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800 hover:text-green-600 transition-colors duration-200">
            {card.title}
          </h1>

          <p className="text-lg font-medium text-gray-700 text-justify hover:text-gray-900 transition-colors duration-200">
            {card.fullDescription}
          </p>

          {card.highlights && (
            <ul className="list-disc ml-5 text-gray-700">
              <h3 className="text-2xl font-semibold mb-2">Highlights</h3>
              {card.highlights.map((highlight, index) => (
                <li key={index} className="hover:text-green-600 transition-colors">
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          {card.openingHours && (
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">Opening Hours</h3>
              <p className="text-lg font-medium text-gray-600">{card.openingHours}</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {card.additionalPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`${card.title} view ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-105"
          />
        ))}
      </div>

      <div className="flex justify-center flex-row gap-4 mt-8">
        <p className="text-3xl font-semibold text-green-600 mb-2 hover:text-green-500 transition-colors duration-200">
          {card.price}
        </p>
        <Link to="/booking">
          <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500 transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
            Booking Now
          </button>
        </Link>
      </div>

      <div className="mt-10">
        <div dangerouslySetInnerHTML={{ __html: card.maps }} />
      </div>
    </div>
  );
}

export default Details;

