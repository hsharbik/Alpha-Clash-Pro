// console.log("connected");
// //create play button function that will perform screen change on home to play ground screeen
// function play(){
//     // console.log("play now");
//     const homeSection=document.getElementById('home');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');
//     const playground=document.getElementById('playground');
//     playground.classList.remove('hidden');
//     // console.log(playground);


// }


//evabe kora jay but jokhn ak dhoroner function barbar use hobe se jonno alada vabe akta file banano hocche good plractise tai amra akti js file baniye nibo


function play(){

    // console.log('play');
    hideElement('home');
    showElement('playground');

    playgame();
}

function playgame(){
    const randomAlphabet=getalphabets();
    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=randomAlphabet;
    

    displayColor(randomAlphabet);
}


