import { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import Modals from "../Portals/Details";

const Signin = () => {
  const [existingUser, setExistingUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(true);
  const handleFind = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://vercel-clothing-website-backhend.vercel.app/api/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: existingUser.email,
            password: existingUser.password,
          }),
        },
      );
      const result = await response.json();
      if (result.success) {
        alert("Login Successfully");
        localStorage.setItem("email", result.email);
        localStorage.setItem("authToken", result.authToken);
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log("Can't fetch the data");
    }
  };
  const handleChange = (e) => {
    setExistingUser({ ...existingUser, [e.target.name]: e.target.value });
  };
  const handleClose = () => {
    setIsModal(false);
    navigate("/");
  };

  return (
    <div>
      <Modals isOpen={isModal} onClose={handleClose}>
        <h2 className="mb-8 text-3xl font-bold text-gray-800 text-center">
          Login
        </h2>

        <form onSubmit={handleFind}>
          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-3 block text-lg font-semibold text-gray-700"
            >
              Email address :
            </label>
            <input
              type="email"
              name="email"
              value={existingUser.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-2xl bg-white text-gray-600 outline-none p-4"
              required
            />
          </div>

          <div className="mb-10">
            <label
              htmlFor="password"
              className="mb-3 block text-lg font-semibold text-gray-700"
            >
              Password :
            </label>
            <input
              type="password"
              name="password"
              value={existingUser.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full rounded-2xl bg-white text-gray-600 outline-none  p-4"
              required
            />
            <div>
              <p className="mt-2 text-center text-blue-900">
                Don't have any account yet then{" "}
                <Link to={"/signup"} className="text-red-600">
                  SignUp
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around  ">
            <div className=" sm:w-auto">
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-8 py-4 text-xl font-bold text-white shadow-lg hover:bg-blue-800 active:scale-[0.98] transition-transform"
              >
                SignIn
              </button>
            </div>
            <div className=" sm:auto">
              <button
                type="button"
                className="w-full flex   rounded-lg bg-blue-700 px-8 py-4 text-xl font-bold text-white shadow-lg hover:bg-blue-800  transition-transform"
                onClick={handleClose}
              >
                Go To Home Page
              </button>
            </div>
          </div>
        </form>
      </Modals>
    </div>
  );
};

export default Signin;
