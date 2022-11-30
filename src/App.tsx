import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Card from "./Card";
import Form from "./Form";

function App() {
  const [name, setName] = useState<string>("Mukhtar Amin");
  const [cardNumber, setCardNumber] = useState<string>("0000 0000 0000 0000");
  const [month, setMonth] = useState<number>(11);
  const [year, setYear] = useState<number>(23);
  const [cvc, setCvc] = useState<number>(123);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 grid-rows-2 lg:gap-72 md:gap-40 gap-10 px-5 justify-center">
        <Card
          name={name}
          cardNumber={cardNumber}
          month={month}
          year={year}
          cvc={cvc}
        />
        <Form
          name={name}
          setName={setName}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cvc={cvc}
          setCvc={setCvc}
        />
      </div>
    </div>
  );
}

export default App;
