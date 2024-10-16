import React, { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccsess } from "../../utils";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://tourandtravel-backend-2.vercel.app/register", {
        email,
        password,
        username,
      })
      .then((result) => {
        const { status } = result;
        if (status === 201) {
          handleSuccsess("Successfully signed up");
          localStorage.setItem("user", JSON.stringify(result.data.user));
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
      })
      .catch((err) => {
        const { response } = err;
        if (response?.status !== 201) {
          handleError("Signup failed!");
        }
        console.log(err);
      });
  };

  return (
    <>
      <div className="w-full max-w-lg mx-auto bg-zinc-900 p-8 rounded-lg shadow-lg mt-10 mb-8 sm:max-w-md sm:p-6 md:p-10 lg:max-w-lg">
        <h1 className="text-3xl mb-8 text-zinc-300 text-center sm:text-2xl">
          Create Account
        </h1>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <input
            className="py-3 px-4 bg-zinc-700 text-white rounded-md border-2 border-zinc-300 outline-none focus:border-orange-600 w-full"
            type="text"
            placeholder="Enter username"
            name="username"
            aria-label="Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="py-3 px-4 bg-zinc-700 text-white rounded-md border-2 border-zinc-300 outline-none focus:border-orange-600 w-full"
            type="email"
            placeholder="Enter email"
            name="email"
            aria-label="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="py-3 px-4 bg-zinc-700 text-white rounded-md border-2 border-zinc-300 outline-none focus:border-orange-600 w-full"
            type="password"
            placeholder="Enter password"
            name="password"
            aria-label="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full py-2 bg-blue-700 text-white rounded-md border-2 border-blue-800 outline-none cursor-pointer hover:bg-blue-800 transition duration-300 text-sm lg:w-1/2 lg:mx-auto"
            type="submit"
          >
            Create Account
          </button>
          <p className="flex text-white justify-center text-center">
            Already have an Account:-
            <Link to="/login">
              <h1 className="text-blue-800 font-bold">Login</h1>
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default SignUp;
