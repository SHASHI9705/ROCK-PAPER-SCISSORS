let userScore =0;
let coompScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usrScore=document.querySelector("#user-score");
const cmpScore=document.querySelector("#comp-score");
const reset=document.querySelector("#reset");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3 );
    return options[randIdx];
    //rock paper Scissors
};

const drawGame=()=>{
    console.log("Game is draw");
    msg.innerText="Draw!! Try again?";
    msg.style.backgroundColor="blue";
};
let count1=0;
let count2=0;
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Win");
        msg.innerText=`You Win! your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor="green";
        count1+=1;
        usrScore.innerText=count1;
        
    }else{
        console.log("You Lose");
        msg.innerText=`You lost! computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        count2+=1;
        cmpScore.innerText=count2;
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=", userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if (userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    

};
reset.addEventListener("click",()=>{
    console.log("you clicked for reset");
    count1=0;
    count2=0;
    usrScore.innerText=0;
    cmpScore.innerText=0;
})

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

