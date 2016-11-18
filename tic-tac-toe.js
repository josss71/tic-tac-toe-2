// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var firstSquare = "a"
function squareOne(){
  if(firstSquare == "a"){
    var lineOne = document.createElementNS(namespace, "rect")
    lineOne.setAttribute("x", "45")
    lineOne.setAttribute("y","45")
    lineOne.setAttribute("width", "20")
    lineOne.setAttribute("height", "20")
    lineOne.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineOne)
  }
}

var secondSquare = "b"
function squareTwo(){
  if(secondSquare == "b"){
    var lineTwo = document.createElementNS(namespace, "rect")
    lineTwo.setAttribute("x", "130")
    lineTwo.setAttribute("y","130")
    lineTwo.setAttribute("width", "50")
    lineTwo.setAttribute("height", "50")
    lineTwo.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineTwo)
  }
}

var thirdSquare = "c"
function squareThree(){
  if(thirdSquare == "c"){
    var lineThree = document.createElementNS(namespace, "rect")
    lineThree.setAttribute("x", "245")
    lineThree.setAttribute("y","245")
    lineThree.setAttribute("width", "20")
    lineThree.setAttribute("height", "20")
    lineThree.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineThree)
  }
}

var fourthSquare = "d"
function squareFour(){
  if(fourthSquare == "d"){
    var lineFour = document.createElementNS(namespace, "rect")
    lineFour.setAttribute("x", "145")
    lineFour.setAttribute("y","45")
    lineFour.setAttribute("width", "20")
    lineFour.setAttribute("height", "20")
    lineFour.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineFour)
  }
}

var fifthSquare = "e"
function squareFive(){
  if(fifthSquare == "e"){
    var lineFive = document.createElementNS(namespace, "rect")
    lineFive.setAttribute("x", "230")
    lineFive.setAttribute("y","30")
    lineFive.setAttribute("width", "50")
    lineFive.setAttribute("height", "50")
    lineFive.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineFive)
  }
}

var sixthSquare = "f"
function squareSix(){
  if(sixthSquare == "f"){
    var lineSix = document.createElementNS(namespace, "rect")
    lineSix.setAttribute("x", "30")
    lineSix.setAttribute("y","130")
    lineSix.setAttribute("width", "50")
    lineSix.setAttribute("height", "50")
    lineSix.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineSix)
  }
}

var seventhSquare = "g"
function squareSeven(){
  if(seventhSquare == "g"){
    var lineSeven = document.createElementNS(namespace, "rect")
    lineSeven.setAttribute("x", "45")
    lineSeven.setAttribute("y","245")
    lineSeven.setAttribute("width", "20")
    lineSeven.setAttribute("height", "20")
    lineSeven.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineSeven)
  }
}

var eighthSquare = "h"
function squareEight(){
  if(eighthSquare == "h"){
    var lineEight = document.createElementNS(namespace, "rect")
    lineEight.setAttribute("x", "130")
    lineEight.setAttribute("y","230")
    lineEight.setAttribute("width", "50")
    lineEight.setAttribute("height", "50")
    lineEight.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineEight)
  }
}

var ninthSquare = "h"
function squareNine(){
  if(ninthSquare == "h"){
    var lineNine = document.createElementNS(namespace, "rect")
    lineNine.setAttribute("x", "245")
    lineNine.setAttribute("y","145")
    lineNine.setAttribute("width", "20")
    lineNine.setAttribute("height", "20")
    lineNine.setAttribute("fill", "black")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(lineNine)
  }
}
