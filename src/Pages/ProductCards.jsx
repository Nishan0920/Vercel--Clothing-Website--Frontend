import React, { useEffect, useState } from "react";
import Modal from "../Portals/Details";
import { useNavigate } from "react-router-dom";
import { useCart, useDispatch } from "../ContextProvider";

const ProductCards = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const state = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(props.data.sizes[0].size);
  const SelectOption = props.data.sizes.find((obj) => obj.size === size);
  const UnitPrice = SelectOption ? SelectOption.price : 0;
  const FinalPrice = qty * UnitPrice;
  const handleAddToCart = async () => {
   
  
      await dispatch({
        type: "ADD",
        id: props.data._id,
        name: props.data.name,

        price: FinalPrice,
        qty: qty,
        size: size,
      });
    
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg m-4 md:m-10 bg-white ">
        <img
          src={props.data.image}
          className="w-full object-cover h-64 md:h-72"
          alt={props.data.name}
        />

        <div className="p-4">
          <h5 className="mb-4 text-xl font-semibold leading-tight text-gray-900 text-center">
            {props.data.name}
          </h5>

          <div className="flex justify-center">
            <button
              className="w-full py-3 bg-red-600 text-white font-medium rounded-2xl cursor-pointer hover:bg-red-700 transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              For More Details
            </button>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-3xl overflow-y-auto max-h-[90vh] w-[95%] md:w-full max-w-4xl mx-auto shadow-2xl">
            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-10">
              <div className="w-full md:w-1/2 flex items-center justify-center rounded-2xl p-4">
                <img
                  src={props.data.image}
                  alt={props.data.name}
                  className="w-full h-auto max-h-64 md:max-h-96 object-contain rounded-2xl "
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black mb-2 text-blue-950 tracking-tight">
                    {props.data.name}
                  </h2>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-green-600 font-bold text-xl">
                      ₹{FinalPrice}
                    </span>
                   
                  </div>

                  <p className="text-gray-500 font-medium mb-3 uppercase text-xs tracking-widest">
                    Select Size
                  </p>

                  <div className="grid grid-cols-3 md:flex md:flex-wrap gap-3">
                    {props.data.sizes.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSize(item.size)} 
                        className={`py-2 px-4 rounded-xl font-bold transition-all border-2 ${
                          size === item.size
                            ? "bg-blue-950 text-white border-blue-950"
                            : "bg-white text-gray-700 border-gray-200 "
                        }`}
                      >
                        {item.size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <p className="text-gray-500 text-sm font-bold">Qty:</p>
                    <select
                      className="bg-gray-100 p-2 rounded-lg font-bold outline-none"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(4)].map((_,x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    className="w-full bg-blue-950 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-900 active:scale-95 transition-all shadow-lg shadow-blue-900/20"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProductCards;
