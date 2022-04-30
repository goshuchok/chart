import React, { useState } from 'react';

function RadioButton({ changeType }) {
  const [currentRadioValue, setCurrentValue] = useState('radio-1');

  const handleRadioChange = (e) => {
    setCurrentValue(e.target.value);
  };
  return (
    <div onChange={handleRadioChange} className="input">
      <input
        id="radio-item-1"
        name="radio-item-1"
        type="radio"
        value="radio-1"
        checked={currentRadioValue === 'radio-1'}
        onClick={changeType}
      />
      <label htmlFor="radio-item-1">Bar chart</label>
      <br />
      <input
        id="radio-item-2"
        name="radio-item-2"
        type="radio"
        value="radio-2"
        checked={currentRadioValue === 'radio-2'}
        onClick={changeType}
      />
      <label htmlFor="radio-item-2">Line chart</label>
    </div>
  );
}

export default RadioButton;
