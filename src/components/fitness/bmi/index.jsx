import React, { useState } from 'react';

function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');

  const calculateBmi = () => {
    const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
    setBmi(bmiValue);
  }

  return (
    <div>
      <h1>BMI Calculator</h1>
      <label>
        Height (cm):
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <label>
        Weight (kg):
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <button className="green-rectangle-button" onClick={calculateBmi}>Calculate BMI</button>
      <br />
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
}

export default BmiCalculator;
