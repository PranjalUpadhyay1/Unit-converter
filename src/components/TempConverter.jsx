import React from 'react';
import Converter from './Converter';

// Conversion logic for temperature units
const convertTemperature = (value, fromUnit, toUnit) => {
  let celsius;

  // Convert input value to Celsius first
  if (fromUnit === 'celsius') {
    celsius = value;
  } else if (fromUnit === 'fahrenheit') {
    celsius = (value - 32) * 5 / 9;
  } else if (fromUnit === 'kelvin') {
    celsius = value - 273.15;
  } else {
    celsius = value; // Default or error case
  }

  // Convert from Celsius to the target unit
  if (toUnit === 'celsius') {
    return celsius;
  } else if (toUnit === 'fahrenheit') {
    return (celsius * 9 / 5) + 32;
  } else if (toUnit === 'kelvin') {
    return celsius + 273.15;
  } else {
    return celsius; // Default or error case
  }
};

// Options for temperature units
const temperatureUnitOptions = [
  { value: 'celsius', label: 'Celsius' },
  { value: 'fahrenheit', label: 'Fahrenheit' },
  { value: 'kelvin', label: 'Kelvin' },
];

function TempConverter() {
  return (
    <Converter
      title="Temperature Converter"
      inputOptions={temperatureUnitOptions}
      outputOptions={temperatureUnitOptions}
      convertLogic={convertTemperature}
    />
  );
}

export default TempConverter;