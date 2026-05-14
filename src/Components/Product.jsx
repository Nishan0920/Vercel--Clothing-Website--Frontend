import React, { useState, useEffect } from "react";
import ProductCards from "../Pages/ProductCards";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Product = () => {
  const [productcat, setProductCat] = useState([]);
  const [productitems, setProductItem] = useState([]);
  const [search,setSearch]  = useState("")
  const Fetched_Data = async () => {
    try {
      const response = await fetch("https://vercel-clothing-website-backhend.vercel.app/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      setProductItem(result[0]);
      setProductCat(result[1]);
    } catch (error) {
      console.log("Cant fetch error", error);
    }
  };
  useEffect(() => {
    Fetched_Data();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-40">
        <div className="    min-w-10/12  px-4 ">
          <div className="flex items-center bg-white/90 backdrop-blur-md rounded-full shadow-2xl border border-gray-200 overflow-hidden ">
            <input
              type="text"
              placeholder="Search for fashion..."
              className="flex-1 px-6 py-3 bg-transparent outline-none text-gray-800 placeholder-gray-500"
              value={search}
              onChange={(e)=> setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-10 md:mt-20 px-4 md:px-8">
          {productcat.length > 0
            ? productcat.map((category) => {
                return (
                  <div key={category._id} className="mb-12">
                    <div className="max-w-full text-2xl md:text-4xl font-extrabold text-blue-950 tracking-tight text-center uppercase">
                      {category.category}
                    </div>

                    <hr className="mt-5 border-blue-500" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                      {productitems.length > 0 ? (
                        productitems
                          .filter(
                            (items) => items.category === category.category &&  items.name.toLowerCase().includes(search.toLocaleLowerCase())
                          )
                          .map((filteritems) => (
                            <div
                              key={filteritems._id}
                              className="flex justify-center"
                            >
                              <ProductCards
                                data={filteritems}
                              
                                price={filteritems.sizes[0]}
                              />
                            </div>
                          ))
                      ) : (
                        <p className="col-span-full text-center text-gray-500">
                          No items found in this category.
                        </p>
                      )}
                    </div>
                  </div>
                );
              })
            : null}
            {search && !productitems.some(item =>item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))&& (
              <div className="text-xl md:text-4xl max-w-8xl text-center text-blue-600">
                <h1>No Products Found For = {search}</h1>
              </div>
            )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Product;
