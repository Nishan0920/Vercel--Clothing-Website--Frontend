import React from "react";

function Footer() {
  return (
    <footer
      
      className="border-t mt-10 p-8 bg-[lightblue] text-blue-800 "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">NoirThread</h2>
          <p className=" text-sm text-blue-800">
            Providing the best products for Men, Women, and Kids since 2026 .
          </p>
        </div>

        <div className="flex-1 md:ml-10">
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>
              <a href="#" className=" hover:text-blue-500 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-bold mb-2">Categories</h3>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-blue-500">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Kids
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="font-bold mb-2">Newsletter</h3>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="border p-2 rounded text-sm w-full"
            />
            <button className="bg-blue-500 text-white p-2 rounded text-sm hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t mt-8 pt-4 text-center text-blue-800 text-xs">
        &copy; NoirThread . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
