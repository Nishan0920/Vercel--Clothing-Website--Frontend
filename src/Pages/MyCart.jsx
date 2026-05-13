import React, { useState } from "react";
import { useCart, useDispatch } from "../ContextProvider";
import Modals from "../Portals/Details";
import { Link } from "react-router-dom";

const MyCart = () => {
  const state = useCart();
  const dispatch = useDispatch();
  const [isModalOpen,setIsModalOpen] = useState(true)

  if (state.length === 0) {
    return (
      <div className="w-full flex flex-col gap-10 text-center mt-20 text-white text-2xl font-bold">
         The Cart Is Empty
         <Link to={"/"} className="px-4 py-3 bg-red-600 max-w-60 tracking-wide mx-auto rounded-2xl  ">Go To Home</Link>

      </div>
      
    );
  }

  return (
    <div className="container mx-auto mt-5 px-4">
      <div className="overflow-x-auto shadow-2xl rounded-xl  ">
        <table className="w-full text-left table-auto min-w-[600px]">
          <thead className="text-white text-lg uppercase bg-black text-center">
            <tr>
              <th className="px-4 py-4 font-bold border-b border-gray-700">
                #
              </th>
              
              <th className="px-4 py-4 font-bold border-b border-gray-700">
                Name
              </th>
              <th className="px-4 py-4 font-bold border-b border-gray-700">
                Quantity
              </th>
              <th className="px-4 py-4 font-bold border-b border-gray-700">
                Size
              </th>
              <th className="px-4 py-4 font-bold border-b border-gray-700">
                Amount
              </th>
              <th className="px-4 py-4 font-bold border-b border-gray-700 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-white text-center border bg-blue-500 ">
            {state.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-800 hover:bg-white/5 transition-all"
              >
                <td className="px-4 py-4 ">{index + 1}</td>
          
                <td className="px-4 py-4 font-medium " onClick={()=>setIsModalOpen(true)}>
                  {item.name}
                </td>
                <td className="px-4 py-4   "> {item.qty}</td>
                <td className="px-4 py-4 uppercase text-sm font-semibold">
                  {item.size}
                </td>
                <td className="px-4 py-4 font-bold">₹{item.price}</td>
                <td className="px-4 py-4 text-center ">
                    <button className="cursor-pointer" onClick={()=>dispatch({type:"REMOVE",index : index})}>
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-gray-900/40 p-6 rounded-lg">
        <div>
            <h1>Total Price <span>{state.reduce((acc,curr)=>acc+curr.price,0)}</span></h1>
        </div>
        <button className="mt-4 md:mt-0 bg-amber-500 hover:bg-amber-600 text-black font-black py-3 px-10 rounded-full text-lg uppercase transition-all transform hover:scale-105" onClick={()=>dispatch({type:"DROP"})}>
          Check Out
        </button>
      </div>
        
    </div>
  );
};

export default MyCart;
