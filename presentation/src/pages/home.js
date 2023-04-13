import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Quote, {GetQuote} from './quote';
import '../css/index.css';

var submitButtonClicked = false;

function Home() {
    return <>
      <h1>Enter details:</h1>
      <ProjectInfoForm/>
    </>
};
    
function ProjectInfoForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        submitButtonClicked = true;
    }

    return (
    <>
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
            value={inputs.hourlyPay}
            onChange={handleChange}></input>
        </label>
        <input type="submit"></input>
    </form>
    <Quote submitButtonClicked={submitButtonClicked} quoteInputs={inputs}/>
    </>
    );
}

export default Home;