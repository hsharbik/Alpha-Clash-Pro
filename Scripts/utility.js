console.log('utility connected');

function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId){

    const element=document.getElementById(elementId);
    element.classList.remove('hidden');

}

//generate a random number and alphabet array

function getalphabets(){
    const alphabetsString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetsString.split('');

    console.log(alphabets);

    //get a random number

    const randomNumber=Math.random()*25;
    // console.log(randomNumber);
const index=Math.round(randomNumber);
const alphabet=alphabets[index];
return alphabet;
console.log(index, alphabet);



 
}

function displayColor(color){
const display=document.getElementById(color);
display.classList.add('bg-[#FFFF00]');
}