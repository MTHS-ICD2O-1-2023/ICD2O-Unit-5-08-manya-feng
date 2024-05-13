// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

let counter = 0
let answer = 0
let answera = firstinputNumber

function myButtonClicked() {
  const firstinputNumber = parseInt(document.getElementById("firstinputNumber").value)
  const secondinputNumber = parseInt(document.getElementById("secondinputNumber").value)
  
  while (answera >= secondinputNumber) {
    answera -= secondinputNumber 
    counter++
  }

  answer = counter
  
  document.getElementById("answer").innerHTML =
    firstinputNumber + " / " + secondinputNumber + " = " + answer + "R:" + answera
  }


