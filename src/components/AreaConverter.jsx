import React from 'react';
import Converter from './Converter';

// Conversion logic for area units
const convertArea = (value, fromUnit, toUnit) => {
  let squareMeters;

  // Convert input value to square meters first
  if (fromUnit === 'meter') {
    squareMeters = value;
  } else if (fromUnit === 'hectare') {
    squareMeters = value * 10000;
  } else if (fromUnit === 'acre') {
    squareMeters = value * 4046.86;
  } else {
    squareMeters = value; // Default or error case
  }

  // Convert from square meters to the target unit
  if (toUnit === 'meter') {
    return squareMeters;
  } else if (toUnit === 'hectare') {
    return squareMeters / 10000;
  } else if (toUnit === 'acre') {
    return squareMeters / 4046.86;
  } else {
    return squareMeters; // Default or error case
  }
};

// Options for area units
const areaUnitOptions = [
  { value: 'meter', label: 'Meter' },
  { value: 'hectare', label: 'Hectare' },
  { value: 'acre', label: 'Acre' },
];

function AreaConverter() {
  return (
    <Converter
      title="Area Converter"
      inputOptions={areaUnitOptions}
      outputOptions={areaUnitOptions}
      convertLogic={convertArea}
    />
  );
}

export default AreaConverter;