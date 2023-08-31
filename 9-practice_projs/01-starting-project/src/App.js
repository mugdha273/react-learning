import logo from './assets/investment-calculator-logo.png';
import ResultTable from './components/ResultTable/ResultTable';
import Form from './components/Form/Form';
import React, { useState } from 'react';

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const [userInput, setUserInput] = useState({});

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    return yearlyData;
    // do something with yearlyData ...
  };

  const showDataHandler = (event) => {
    event.preventDefault();
    const userInput = {
      'current-savings': event.target[0].value,
      'yearly-contribution': event.target[1].value,
      'expected-return': event.target[2].value,
      duration: event.target[3].value,
    };
    const yearlyData = calculateHandler(userInput);
    setYearlyData(yearlyData);
    setUserInput(userInput);
    // event.target.reset();
  }
  const wipeDataHandler = (event) => {
    event.preventDefault();
    setYearlyData([]);
    setUserInput({});
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <form onSubmit={showDataHandler} onReset={wipeDataHandler} className="form">
        <Form></Form>

        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultTable data = {yearlyData} initialInvestment={userInput['current-savings']}></ResultTable>
    </div>
  );
}

export default App;