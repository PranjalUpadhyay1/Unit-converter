import React from 'react';
import Converter from './Converter';

// Conversion logic for weight units
const convertWeight = (value, fromUnit, toUnit) => {
  let kilograms;

  // Convert input value to kilograms first
  if (fromUnit === 'kilograms') {
    kilograms = value;
  } else if (fromUnit === 'pounds') {
    kilograms = value * 0.453592;
  } else if (fromUnit === 'ounces') {
    kilograms = value * 0.0283495;
  } else {
    kilograms = value; // Default or error case
  }

  // Convert from kilograms to the target unit
  if (toUnit === 'kilograms') {
    return kilograms;
  } else if (toUnit === 'pounds') {
    return kilograms / 0.453592;
  } else if (toUnit === 'ounces') {
    return kilograms / 0.0283495;
  } else {
    return kilograms; // Default or error case
  }
};

// Options for weight units
const weightUnitOptions = [
  { value: 'kilograms', label: 'Kilograms' },
  { value: 'pounds', label: 'Pounds' },
  { value: 'ounces', label: 'Ounces' },
];

function WeightConverter() {
  return (
    <Converter
      title="Weight Converter"
      inputOptions={weightUnitOptions}
      outputOptions={weightUnitOptions}
      convertLogic={convertWeight}
    />
  );
}

export default WeightConverter;