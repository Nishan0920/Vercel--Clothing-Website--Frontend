import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, Link } from "react-router-dom";
import Modals from "../Portals/Details";

const SignUp = () => {
  const [isModal,setIsModal] = useState(true)
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleONSubmit = async (e) => {
    e.preventDefault();
    try {
      const reponse = await fetch("https://vercel-clothing-website-backhend.vercel.app/api/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const result = await reponse.json();
      if (result.success) {
        alert("User created Successfully");
        navigate("/signin");
      } else {
        alert("Can't create the user");
      }
    } catch (error) {
      console.log("Can't fetch the data");
    }
  };

  const handleChange = (eve) => {
    setCredentials({ ...credentials, [eve.target.name]: eve.target.value });
  };

  return (
   <Modals isOpen={isModal} onClose={handleClose}>
   <div>
      
      <div>
      <h2 className="mb-8 text-3xl font-bold text-gray-800 text-center">
        For New User
      </h2>

      <form onSubmit={handleONSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-lg font-semibold "
          >
            Name :
          </label>
          <input
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full rounded-2xl border-2 border-gray-300 text-gray-600 bg-white p-4 "
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-lg font-semibold "
          >
            Email address :
          </label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-2xl bg-white text-gray-600 outline-none p-4 "
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-3 block text-lg font-semibold text-gray-700"
          >
            Password :
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full rounded-2xl outline-none text-gray-600 bg-white p-4 "
            required
          />
          <p className="mt-2 text-center text-blue-900">
            Already have an account?{" "}
            <Link to={"/signin"} className="text-red-600 font-bold">
              SignIn
            </Link>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-around gap-4">
          <button
            type="submit"
            className="w-full sm:w-auto rounded-lg bg-blue-700 px-8 py-4 text-xl font-bold text-white shadow-lg hover:bg-blue-800 active:scale-[0.98] transition-transform"
          >
            SignUp
          </button>
          <button
            type="button" // FIXED: type="button" prevents form submission
            className="w-full sm:w-auto rounded-lg bg-gray-600 px-8 py-4 text-xl font-bold text-white shadow-lg hover:bg-gray-700 active:scale-[0.98] transition-transform"
            onClick={handleClose}
          >
            Go To Home Page
          </button>
        </div>
      </form>
      </div>
    
    </div>
   </Modals>
  );
};

export default SignUp;
