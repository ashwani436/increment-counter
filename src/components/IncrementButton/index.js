import React, { Component } from 'react';

const IncrementButton=({handleIncrement})=>{
   return  <button  onClick={handleIncrement}>Click me</button>
};
    

export default IncrementButton;