console.log('utility connected');

function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId){

    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}


//select an element 

function getElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText);
    return value;

}

//get element text  by id

function getElementText(elementId){
 const element=document.getElementById(elementId);
 const text=element.innerHTML;
 return text;
}

//set element value

function setElementValueById(elementId, value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}



function play(){

    //hide otner element 
    // console.log('play');
    hideElement('home');
    hideElement('score-board');
    showElement('playground');

    //reset score and life 
    
    setElementValueById('life',5);
    setElementValueById('score',0);

    playgame();
}

//generate a random number and alphabet array

function getalphabets(){
    const alphabetsString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetsString.split('');

    // console.log(alphabets);

    //get a random number

    const randomNumber=Math.random()*25;
    // console.log(randomNumber);
const index=Math.round(randomNumber);
const alphabet=alphabets[index];
return alphabet;
// console.log(index, alphabet);



 
}


//make generated key colorful
function displayColor(color){
const display=document.getElementById(color);
display.classList.add('bg-[#FFFF00]');
}

//remove key color


function displayRemoveColor(color){
    const display=document.getElementById(color);
    display.classList.remove('bg-[#FFFF00]');
    }


    //gameover fucnton

    function gameover(){
        //hide and show element after game over

        hideElement('playground')
        showElement('score-board')

        // final score upate or show on the board

        const lastScore=document.getElementById('score').innerText;
        // console.log(lastScore);
        setElementValueById('final-score', lastScore);
        const getText=getElementText('current-alphabet');;

        displayRemoveColor(getText);



    }



