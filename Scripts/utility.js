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

//set element value

function setElementValueById(elementId, value){
    const element=document.getElementById(elementId);
    element.innerText=value;
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