import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardData } from "./CardData";
import axios from "axios";
import { handleError, handleSuccsess } from "../../utils";

function Home() {
  const [card, setCard] = useState(CardData);
  const user = localStorage.getItem("user");

  return (
    <>
      <div
        className="w-full bg-[url('https://www.pickeronline.com/uploads/category/15373536185ba22792a4bd7.jpeg')] bg-cover overflow-hidden bg-no-repeat"
        style={{
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 py-8">
            <div className="flex flex-wrap gap-10 justify-center relative z-10 max-w-screen-xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-black text-slate-400 w-full sm:w-2/5 md:w-1/4 rounded-xl p-4 items-center text-center cursor-pointer overflow-hidden"
                >
                  <h2 className="font-bold text-xl mb-2">{item.title}</h2>
                  <img
                    src={item.url}
                    alt="card-image"
                    className="rounded-xl border w-full h-40 object-cover hover:scale-95 transition-transform duration-300"
                  />
                  <p className="font-semibold my-2">{item.description}</p>

                  <Link to={`/details/${index}`}>
                    <button className="bg-orange-400 rounded-md border cursor-pointer text-black px-4 py-2">
                      Explore more...
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Home;
