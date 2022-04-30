import { useState } from 'react';
import './App.css';
import ChartComponent from './components/ChartComponent';
import InputLabel from './components/InputLabel';
import RadioButton from './components/RadioButton';

function App() {
  const [chart, setChat] = useState('');
  const [term, setTerm] = useState('');
  const [type, setType] = useState('bar');
  const changeType = () => {
    setType((currentValue) => (currentValue === 'bar' ? 'line' : 'bar'));
  };
  return (
    <div className="App">
      <h1>React Chart</h1>
      <InputLabel
        chart={chart}
        setChat={setChat}
        term={term}
        setTerm={setTerm}
      />
      <ChartComponent chart={chart} term={term} type={type} />
      <RadioButton changeType={changeType} />
    </div>
  );
}

export default App;
