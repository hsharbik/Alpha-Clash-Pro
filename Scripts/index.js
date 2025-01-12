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




function keyboardButtonPress(event){
    // console.log("keyboard button pressed");
    

    const keypressed=event.key;
    const keyup=keypressed.toUpperCase();
    // console.log('lello',keyup);
    // console.log(event.key);

    // if(keypressed==='Escape'){
    //     gameover();
    // }

    //eSC PRESS KORLE game over hoye jabe

    if(keypressed==='CapsLock' || keypressed===keypressed.toUpperCase()){
        alert('CAPS LOCK ON');
    }
    else if(keypressed==='Escape'){
        gameover();
    }
   
    // console.log('pressed key',keypressed);

    const expectedkey=document.getElementById('current-alphabet').innerText;
    const expectedalphabet=expectedkey.toLowerCase();
    
    

    console.log('expected',expectedalphabet);

    //own try please start

    //check match or not

    if(keypressed===expectedalphabet){
        // console.log('its ok');

            //current score display or update int screeen


        // const currentScoreElement=document.getElementById('score');
        // // console.log(currentScoreElement);
        // const currentScoreText=currentScoreElement.innerText;
        // console.log(currentScoreText);
        // const currentScore=parseInt(currentScoreText);
        // const newScore=currentScore+1;
        // currentScoreElement.innerText=newScore;


        //by doing life update with function

        const currentScore=getElementValueById('score');
        // console.log(currentScore);
        const UpdatedScore=currentScore+1;
        setElementValueById('score', UpdatedScore);


        //remove key color


        displayRemoveColor(expectedalphabet)

        //game continue


        playgame()
        
    }
    else{
        console.log("its not ok");
        //own try life update but same

       



        // const currentLIfeElement=document.getElementById('life');
        // const currentLIfeText=currentLIfeElement.innerText;
        // const currentLIfe=parseInt(currentLIfeText);
        // console.log(currentLIfe);
        // newLife=currentLIfe-1;
        // currentLIfeElement.innerText=newLife;

        //doing by function

        const currentLife=getElementValueById('life');
        const updatedLife=currentLife-1;
        setElementValueById('life', updatedLife);


        if(updatedLife===0){
            console.log("its over game");

            gameover()
            
        }

        

        
      
       

    }
}
    //own try stop
    



document.addEventListener('keyup', keyboardButtonPress);


function playgame(){
    const randomAlphabet=getalphabets();
    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=randomAlphabet;
    

    displayColor(randomAlphabet);
}

