import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate()
  const handleProduct = ()=>{
    navigate("/product")
  }
  return (
    <div className="">
      <div className="max-w-70 overflow-hidden rounded-lg bg-blue-50 shadow-sm mx-auto my-5 cursor-pointer" onClick={handleProduct}>
        <img
          src={props.items.image}
          className="w-full object-cover h-75 "
          alt="..."
        />

        <div className="p-4">
          <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900 text-center">
            {props.items.name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
