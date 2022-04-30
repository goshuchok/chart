import React from 'react';

function InputLabel({ chart, setChat, term, setTerm }) {
  const changeDiagram = (e) => {
    setChat(e.target.value.split(','));
  };
  const changeTern = (e) => {
    setTerm(e.target.value.split(','));
  };
  return (
    <div className="input">
      <div className="axis">
        <strong>X axis labels</strong>
        <input value={chart} onChange={changeDiagram} />
      </div>
      <div className="axis">
        <strong>Y axis values</strong>
        <input value={term} onChange={changeTern} />
      </div>
    </div>
  );
}

export default InputLabel;
