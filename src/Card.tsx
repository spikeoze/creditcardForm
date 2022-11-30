import React from "react";

interface myObj {
  name: string;
  cardNumber: string;
  month: number;
  year: number;
  cvc: number;
}

function Card({ name, cardNumber, month, year, cvc }: myObj) {
  return (
    <div className="flex flex-col space-y-5 md:mt-40 mt-10">
      <div className="md:w-96 flex p-3 flex-col text-gray-600 space-y-6 items-center h-52 shadow-lg bg-gradient-to-br from-gray-100  to-gray-300  rounded-lg ">
        <div className="flex m-4 space-x-2 self-start items-start ">
          <div className="bg-gray-800  w-fit p-5 rounded-full"></div>
          <div className="border border-gray-700 self-center w-fit p-3 rounded-full"></div>
        </div>
        <div>
          <p className="text-center font-medium md:text-[34px] text-2xl sm:text-3xl font-sans">
            {cardNumber}
          </p>
        </div>
        <div className="flex font-bold justify-between self-stretch px-3">
          <div>{name}</div>
          <div>{month}/{year}</div>
        </div>
      </div>

      <div className="md:w-96 md:ml-10 flex py-5 flex-col space-y-6 items-center h-52 shadow-lg bg-gradient-to-br from-gray-100  to-gray-300 rounded-lg mt-40 ">
        <div className="bg-gray-700 w-full py-5 mx-2 sm:mx-0 rounded-sm "></div>
        <div className="bg-gradient-to-br from-gray-500  to-gray-400 text-right px-5 font-mono w-72 py-2 rounded-md">
          {cvc}
        </div>
      </div>
    </div>
  );
}

export default Card;
