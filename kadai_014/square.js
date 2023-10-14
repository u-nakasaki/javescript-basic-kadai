'use strict';

const cal = () =>{
  const userInput = document.getElementById('number');
  const calItem = userInput.value
  const result = calItem * calItem;
  const express = document.getElementById('output');
  express.textContent = result;
  console.log(result);
}

const calBtn = document.getElementById('btn');
calBtn.addEventListener('click', (cal));