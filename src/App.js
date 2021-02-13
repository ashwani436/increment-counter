//import logo from './logo.svg';
//import React,{useState,useEffect}from "react";
import './App.css';
import CounterValue from "./components/CounterValue";
import IncrementButton from "./components/IncrementButton";
import React,{ useEffect, useState } from 'react';

function App(){
  const[counter,setCounter]=useState(0);
  const[inputValue,setInputValue]=useState(0);
  useEffect(()=>{
    setInputValue(inputValue+5);
  },[counter]);
  const handleIncrement=()=>{
    setCounter(counter+1);
  };
  return (
    <div className="p-5">
      <CounterValue currentCounter={counter}/>
      <IncrementButton handleIncrement={handleIncrement}/>
    <div>
      <input value={inputValue}/>
    </div>
    </div>
   
  );
}

export default App;
