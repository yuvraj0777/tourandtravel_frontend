import React, { useState } from "react";
import axios from "axios";
import { handleError, handleSuccsess } from "../../utils";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://tourandtravel-backend-2.vercel.app/login", { email, password })
      .then((result) => {
        const { status, data } = result;
        if (status === 200) {
          handleSuccsess(data.message);
          localStorage.setItem("user", JSON.stringify(data.user));
          setEmail("");
          setPassword("");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      })
      .catch((err) => {
        const { response } = err;
        if (response && response.status === 400 && response.data === 'Invalid credentials') {
          handleError("Invalid email or password!");
        } else {
          handleError("Login failed! Please try again.");
        }
      });
  };

  return (
    <div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/3 bg-zinc-900 p-6 sm:p-8 md:p-10 mt-8 rounded-lg shadow-lg mb-6">
      <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-6 text-zinc-400 text-center font-semibold">
        Login to Your Account
      </h1>
      <form className="flex flex-col space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
        <input
          className="px-3 py-2 rounded-md bg-zinc-800 border-2 border-zinc-600 text-zinc-200 placeholder-zinc-500 outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition duration-200"
          type="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="px-3 py-2 rounded-md bg-zinc-800 border-2 border-zinc-600 text-zinc-200 placeholder-zinc-500 outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition duration-200"
          type="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="px-4 py-2 bg-blue-600 text-white font-medium w-full sm:w-24 mx-auto rounded-md cursor-pointer hover:bg-blue-700 transition duration-200"
          type="submit"
          value="Login"
        />
      </form>
      <p className="flex text-white justify-center text-center">
        Don't have an account:- 
        <Link to="/signup">
          <h1 className="text-blue-800 font-bold">Sign Up</h1>
        </Link>
      </p>
    </div>
  );
}

export default Login;
