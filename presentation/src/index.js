import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const jsx = (
<>
  <h1>Enter details:</h1>
  <ProjectInfoForm/>
</>
);

function ProjectInfoForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Man hours: ${inputs.manHours}\nHourly rate: ${inputs.hourly}`); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Man hours:
        <input
          type="text"
          value={inputs.manHours}
          onChange={handleChange}></input>
      </label>
      <label>
        Hourly rate:
        <input
          type="text"
          value={inputs.hourly}
          onChange={handleChange}></input>
      </label>
      <input type="submit"></input>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsx);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
