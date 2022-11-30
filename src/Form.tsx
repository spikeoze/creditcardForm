import React, { Dispatch, SetStateAction } from "react";

interface myObj {
  name: string;
  setName: Dispatch<SetStateAction<any>>;
  cardNumber: string;
  setCardNumber: Dispatch<SetStateAction<any>>;
  month: number;
  setMonth: Dispatch<SetStateAction<any>>;
  year: number;
  setYear: Dispatch<SetStateAction<any>>;
  cvc: number;
  setCvc: Dispatch<SetStateAction<any>>;
}

function Form({
  name,
  setName,
  cardNumber,
  cvc,
  month,
  setCardNumber,
  setCvc,
  setMonth,
  setYear,
  year,
}: myObj) {
  return (
    <div className="md:max-w-xs flex flex-col md:mt-40 space-y-4 uppercase">
      <div className="flex flex-col space-y-1 items-start text-gray-800">
        <label htmlFor="cardholder name">Cardholder Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" w-full rounded-lg border-2 border-gray-300 bg-white p-2 text-left"
        />
      </div>
      <div className="flex flex-col space-y-1 items-start text-gray-800">
        <label htmlFor="card number">Card Number</label>
        <input
          type="text"
          placeholder="e.g XXXX-XXXX-XXX-XXXX"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength={19}
          className=" w-full rounded-lg border-2 border-gray-300 bg-white p-2 text-left"
        />
      </div>

      {/* expiration date and cvc */}
      <div className="flex items-center space-x-4">
        <div className="flex flex-col space-y-1 items-start text-gray-800">
          <label htmlFor="expiration date">EXP.DATE (MM/YY)</label>
          <div className="flex space-x-1 ">
            <input
              type="text"
              placeholder="MM"
              maxLength={2}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className=" w-20 rounded-lg border-2 border-gray-300 bg-white p-2 text-left"
            />
            <input
              type="text"
              placeholder="YY"
              maxLength={2}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-20 rounded-lg border-2 border-gray-300 bg-white p-2 text-left"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-1 items-start text-gray-800">
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            placeholder="e.g 123"
            maxLength={3}
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="w-full rounded-lg border-2 border-gray-300 bg-white p-2 text-left"
          />
        </div>
      </div>
      <button className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-slate-100 p-2 rounded-md font-bold">
        Confirm
      </button>
    </div>
  );
}

export default Form;
