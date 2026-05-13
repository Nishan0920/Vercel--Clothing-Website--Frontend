import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import { useCart } from "../ContextProvider";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isloggedin, setIsLoggedIn] = useState(true);
  const data = useCart();
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };
useEffect(()=>{
  if(showMenu){
    document.body.style.overflowY = "hidden"
  }else{
     document.body.style.overflowY = "unset"
  }
})
  return (
    <nav className="bg-blue-200 fixed top-0 right-0 left-0 z-100 ">
      {!localStorage.getItem("authToken") ? (
        <div>
          <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link
              to={"/"}
              className="text-xl md:text-2xl font-bold text-blue-900 cursor-pointer"
            >
              NoirThread
            </Link>

            <div className="hidden md:flex items-center gap-8 text-xl">
              <Link
                to={"/"}
                className="text-blue-500 focus:text-blue-800 hover:text-blue-500"
              >
                Home
              </Link>
            </div>

            <div className="flex items-center gap-3">
              {!isloggedin ? (
                <div className=" hidden md:flex space-x-4 text-white mt-2">
                  <Link
                    to="/signin"
                    className="text-sm hover:text-blue-500 px-4 py-2 rounded-2xl bg-green-600"
                  >
                    signIn
                  </Link>
                  <Link
                    to="/signup"
                    className="text-sm hover:text-blue-500 px-4 py-2 rounded-2xl bg-red-600"
                  >
                    signUp
                  </Link>
                </div>
              ) : (
                <div className="  flex  space-x-4 mx-4 relative ">
                  <Link
                    to={"/mycart"}
                    className="py-2 px-3 rounded-[50%] text-2xl"
                  >
                    <i className="fa-solid fa-cart-shopping mr-2 text-blue-600"></i>
                  </Link>
                  {data.length > 0 && (
                    <span className="absolute left-7 bottom-5 bg-red-600 m-1 px-2 rounded-[50%]">
                      {data.length}
                    </span>
                  )}
                  <button
                    onClick={handleLogout}
                    className="px-4 cursor-pointer   text-2xl text-red-700"
                  >
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </button>
                </div>
              )}

              <button
                onClick={() => setShowMenu(!showMenu)}
                className="md:hidden border px-2 py-1 rounded"
              >
                ☰
              </button>
            </div>
          </div>

          {showMenu && (
            <div className="md:hidden px-4 py-4 pb-4 flex flex-col gap-2 border-t text-2xl">
              <Link to={"/"} className="py-4 px-4 ">
                Home
              </Link>
              <div className="flex   justify-between m-2">
                <Link
                  to="/signin"
                  className="text-sm hover:text-blue-500 px-4 py-2 rounded-2xl bg-green-600"
                >
                  signIn
                </Link>
                <Link
                  to="/signup"
                  className="text-sm hover:text-blue-500 px-4 py-2 rounded-2xl bg-red-600"
                >
                  signUp
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link
              to={"/"}
              className="text-xl md:text-2xl font-bold text-blue-900 cursor-pointer"
            >
              NoirThread
            </Link>

            <div className="hidden md:flex items-center gap-8 ">
              <Link
                to={"/"}
                className="text-blue-500 focus:text-blue-800 hover:text-blue-500"
              >
                Home
              </Link>

              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-blue-500 focus:text-blue-800 hover:text-blue-500 cursor-pointer"
                >
                  Products ▾
                </button>

                {showDropdown && (
                  <div className="absolute top-8 left-0 bg-white shadow-md rounded w-32">
                    <Link
                      to={"/product"}
                      className="block px-3 py-2 text-blue-500 focus:text-blue-800 hover:bg-gray-100"
                    >
                      Men
                    </Link>
                    <Link
                      to={"/product"}
                      className="block px-3 py-2 text-blue-500 focus:text-blue-800 hover:bg-gray-100"
                    >
                      Women
                    </Link>
                    <Link
                      to={"/product"}
                      className="block px-3 py-2 text-blue-500 focus:text-blue-800 hover:bg-gray-100"
                    >
                      Kids
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {!isloggedin ? (
                <div className="flex space-x-4 text-white mt-2">
                  <Link
                    to="/signin"
                    className="text-sm hover:text-blue-500 px-4 py-2 rounded-2xl bg-green-600"
                  >
                    signIn
                  </Link>
                  <Link
                    to="/signup"
                    className="text-sm hover:text-blue-500 px-4 py-2 rounded-2xl bg-red-600"
                  >
                    signUp
                  </Link>
                </div>
              ) : (
                <div className=" hidden md:flex  space-x-4 mx-4 relative ">
                  <Link
                    to={"/mycart"}
                    className="py-2 px-3 rounded-[50%] text-2xl"
                  >
                    <i className="fa-solid fa-cart-shopping mr-2 text-blue-600"></i>
                  </Link>
                  {data.length > 0 && (
                    <span className="absolute left-7 bottom-5 bg-red-600 m-1 px-2 rounded-[50%]">
                      {data.length}
                    </span>
                  )}
                  <button
                    onClick={handleLogout}
                    className="px-4 cursor-pointer   text-2xl text-red-700"
                  >
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </button>
                </div>
              )}

              <button
                onClick={() => setShowMenu(!showMenu)}
                className="md:hidden border px-2 py-1 text-2xl rounded"
              >
                ☰
              </button>
            </div>
          </div>

          {showMenu && (
            <div className="md:hidden px-4 pb-4 flex flex-col gap-2 border-t text-xl text-blue-600 ">
              <Link to={"/"} className="py-4">
                Home
              </Link> <hr/>

              <div className="font-semibold mt-2">Products:</div>
              <div className="flex flex-col space-y-4  text-center py-3 text-xl">
                <Link
                  to={"/product"}
                  className=" py-3 px-4 bg-green-500 rounded-2xl"
                >
                  Men
                </Link>
                <Link
                  to={"/product"}
                  className="py-3 px-4 bg-green-500  rounded-2xl"
                >
                  Women
                </Link>
                <Link
                  to={"/product"}
                  className="py-3 px-4 bg-green-500 rounded-2xl"
                >
                  Kids
                </Link>
              </div> <hr/>
              <div className=" py-3  flex justify-between ">
                <Link
                  to={"/mycart"}
                  className="py-2 px-3 rounded-[50%] text-4xl"
                >
                  <i className="fa-solid fa-cart-shopping mr-2 text-blue-600"></i>
                </Link>
                {data.length > 0 && (
                  <span className="absolute left-12 bottom-14 bg-red-600 m-1 px-2 rounded-[50%]">
                    {data.length}
                  </span>
                )}
                <button
                  onClick={handleLogout}
                  className="px-4 cursor-pointer   text-4xl text-red-700"
                >
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
