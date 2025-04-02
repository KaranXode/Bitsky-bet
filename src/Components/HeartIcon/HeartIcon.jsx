import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function HeartIcon({ className }) {
  const [isFilled, setIsFilled] = useState(false);
  return (
    <div className={`${className}`}>
      <button onClick={() => setIsFilled(!isFilled)} className="text-xl bg-[#0e0e0e4a] rounded-full p-1">
        {isFilled ? <FaHeart color={"red"} /> : <FaRegHeart color={"white"} />}
      </button>
    </div>
  );
}
