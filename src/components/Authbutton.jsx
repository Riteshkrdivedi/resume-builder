import React from "react";

const Authbutton = ({ logo, text, mark }) => {
  return (
    <div className="w-fit my-2 px-4 py-3 rounded-md border-2 border-yellow-400  flex items-center justify-between cursor-pointer group hover:bg-yellow-300 active:scale-95 duration-150 hover:shadow-md">
      <p className=" group-hover:text-black px-2">{logo}</p>
      <p className=" group-hover:text-black px-2">{text}</p>
      <p className=" group-hover:text-black px-2">{mark}</p>
    </div>
  );
};

export default Authbutton;
