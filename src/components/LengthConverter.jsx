import React from 'react';
import Converter from './Converter';

// Conversion logic for length units
const convertLength = (value, fromUnit, toUnit) => {
  let meters;

  // Convert input value to meters first
  if (fromUnit === 'meters') {
    meters = value;
  } else if (fromUnit === 'miles') {
    meters = value * 1609.34;
  } else if (fromUnit === 'feet') {
    meters = value * 0.3048;
  } else {
    meters = value; // Default or error case
  }

  // Convert from meters to the target unit
  if (toUnit === 'meters') {
    return meters;
  } else if (toUnit === 'miles') {
    return meters / 1609.34;
  } else if (toUnit === 'feet') {
    return meters / 0.3048;
  } else {
    return meters; // Default or error case
  }
};

// Options for length units
const lengthUnitOptions = [
  { value: 'meters', label: 'Meters' },
  { value: 'miles', label: 'Miles' },
  { value: 'feet', label: 'Feet' },
];

function LengthConverter() {
  return (
    <Converter
      title="Length Converter"
      inputOptions={lengthUnitOptions}
      outputOptions={lengthUnitOptions}
      convertLogic={convertLength}
    />
  );
}

export default LengthConverter;