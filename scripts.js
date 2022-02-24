document.addEventListener("DOMContentLoaded", function () {


    let div4Btn = document.createElement('div'); //div to seperate the button from rest
    div4Btn.className = div4Btn; //gives class name to div so that we know which one
    document.body.appendChild(div4Btn); //adds the div to the body 



    let button = document.createElement("button"); //creates a button
    let buttonText = document.createTextNode("Add Square"); //text for said button
    button.appendChild(buttonText); //adds the text to the button like a lable
    div4Btn.body.appendChild(button); //adds the button to the button division



    let sqContainer = document.createElement('div'); //container for the squares
    sqContainer.className = 'sqContainer'; //gives the div of black square a class name
    document.body.appendChild(sqContainer); //adds this container to the body



    button.addEventListener("click", function () {
        let divSquare = document.createElement('div'); //this will be the division for each square
        let bClick = 0; //count for labeling purposes

        sqContainer.appendChild(divSquare)


    })



});


