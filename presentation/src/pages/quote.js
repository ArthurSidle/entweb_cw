import React, {useState} from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

function Quote(props) {
    if (props.submitButtonClicked === true) {
        return <GetQuote quoteInputs={props.quoteInputs}/>
    } else {
        return <></>
    }
}

function GetQuote(props) {
    const {data, error, isError, isLoading } = useQuery('getQuote', async () => {
        const {data} = await axios.post('/getQuote:8000', {
            "manHours": props.quoteInputs.manHours,
            "hourlyPay": props.quoteInputs.hourlyPay
        });
        return data;
    });
    // first argument is a string to cache and track the query result
    if(isLoading){
        return <div>Please wait...</div>
    }

    if(isError){
        return <div>Error! {error.message}</div>
    }

    return (
        <div>The quote is £{data}.</div>
    );
}



export default Quote;
export {GetQuote};