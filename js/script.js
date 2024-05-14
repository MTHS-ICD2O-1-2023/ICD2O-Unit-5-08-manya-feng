// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const firstinputNumber = parseInt(document.getElementById("firstinputNumber").value)
  const secondinputNumber = parseInt(document.getElementById("secondinputNumber").value)
  let counter = 0
  let remainder = firstinputNumber

  while (true) {
    if (remainder < secondinputNumber){
      break;
    }
    remainder -= secondinputNumber
    counter+= 1
  }

  const answer = counter
  
  document.getElementById("answer").innerHTML =
    firstinputNumber + " / " + secondinputNumber + " = " + answer + "R" + remainder
  }


