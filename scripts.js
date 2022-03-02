document.addEventListener("DOMContentLoaded", function () {


    let div4Btn = document.createElement('div'); //div to seperate the button from rest
    div4Btn.className = 'div-4-Btn'; //gives class name to div so that we know which one
    document.body.appendChild(div4Btn); //adds the div to the body 

    let btn = document.createElement("button"); //creates a button
    let btnText = document.createTextNode("Add Square"); //text for said button
    btn.appendChild(btnText); //adds the text to the button like a lable
    div4Btn.appendChild(btn); //adds the button to the button division



    let sqContainer = document.createElement('div'); //container for the squares
    sqContainer.className = 'sq-Container'; //gives the div of black square a class name
    document.body.appendChild(sqContainer); //adds this container to the body


    let bClick = 0; //count for labeling purposes
    btn.addEventListener("click", function () {
        bClick++; //increases the id number each time the button is clicked

        let divSQ = document.createElement('div'); //this will be the division for each square
        divSQ.className = 'blackSQ'; //allows work to be done in css
        let bClickText = document.createTextNode(bClick); //this provids a visual reference to the id
        divSQ.id = bClick; //allows each square to have an id starting at 1
        sqContainer.appendChild(divSQ); //Attaches this child to square container

        //shows id when mouse hovers over block     
        divSQ.addEventListener('mouseover', () => divSQ.appendChild(bClickText));
        divSQ.addEventListener('mouseout', () => divSQ.removeChild(bClickText));

        //changes square to random color
        divSQ.addEventListener('click', () => {
            const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            divSQ.style.backgroundColor = rndCol;
        });

        //removes squares pending on id# and double clicked
        divSQ.addEventListener('dblclick', () => {
            if (divSQ.id % 2 === 0) {
                if (divSQ.nextSibling === null) {
                    alert('Nothing to be removed!');
                } else {
                    divSQ.nextSibling.remove();
                }
            } else {
                if (divSQ.previousSibling === null) {
                    alert('Nothing to be removed!');
                } else {
                    divSQ.previousSibling.remove();
                }
            }
        });
    });
});
function random(num) {
    return Math.floor(Math.random() * (num + 1));
};







