import React, { useState, useEffect } from 'react';

function Converter({
  title, // Title of the converter (e.g., "Length Converter")
  inputOptions, // Array of objects for input unit options (value, label)
  outputOptions, // Array of objects for output unit options (value, label)
  convertLogic, // Function that handles the conversion logic
}) {
  const [inputValue, setInputValue] = useState(''); // State for the input value
  const [outputValue, setOutputValue] = useState('0'); // State for the converted output value
  const [inputType, setInputType] = useState(inputOptions[0].value); // State for the selected input unit type
  const [outputType, setOutputType] = useState(outputOptions[0].value); // State for the selected output unit type

  // Effect hook to trigger conversion when input, input type, or output type changes
  useEffect(() => {
    handleConversion();
  }, [inputValue, inputType, outputType]);

  // Function to handle the conversion logic
  const handleConversion = () => {
    if (inputValue === '') {
      setOutputValue('0');
      return;
    }
    // Perform conversion using the provided convertLogic function
    const result = convertLogic(parseFloat(inputValue), inputType, outputType);
    setOutputValue(result.toString());
  };

  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="inout">
        <div className="input">
          {/* Input field for the value to be converted */}
          <input
            type="number"
            placeholder="0"
            id="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {/* Dropdown for selecting the input unit type */}
          <select id="inputType" value={inputType} onChange={(e) => setInputType(e.target.value)}>
            {inputOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <span> = </span>
        <div className="result">
          {/* Display area for the converted result */}
          <p id="result">{outputValue}</p>
          {/* Dropdown for selecting the output unit type */}
          <select id="outputType" value={outputType} onChange={(e) => setOutputType(e.target.value)}>
            {outputOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Convert button to trigger manual conversion */}
      <button id="btn" onClick={handleConversion}>Convert</button>
    </div>
  );
}

export default Converter;