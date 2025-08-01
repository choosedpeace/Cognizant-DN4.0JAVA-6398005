import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Synthetic Event
    const euroRate = 0.011; // 1 INR = 0.011 EUR
    const converted = (parseFloat(rupees) * euroRate).toFixed(2);
    setEuros(converted);
  };

  return (
    <div>
      <h2>Currency Convertor (INR to EUR)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euros && <p>Amount in Euro: €{euros}</p>}
    </div>
  );
}

export default CurrencyConvertor;
