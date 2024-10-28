let userScore = 0; //create a variable name userscore and give it value 0
let compScore = 0; //create a variable name compscore and give it value 0

const choices = document.querySelectorAll('.choice'); 
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score'); //select the p tag by id and store in userScorePara

const compScorePara = document.querySelector('#comp -score'); ////select the p tag by id and store in compScorePara









choices.forEach((choice)=>{

    choice.addEventListener("click", () =>{

    const userChoice = choice.getAttribute("id"); //user choice wil change each time when image is clicked 

    //userchoice has a id name stores in a form of string

    playGame(userChoice); // pass userChoice as  a argument in a playgame function

    })
})


const genCompChoice = () => { //this functin will generate random choice for computer

    const options = ["rock", "paper", "scissors"]; // this is an array of all choices named options

    const randIdx = Math.floor(Math.random()*3); // this method will randompy choose a number between 0 and 2 and store it into a randIdx variable.

    return options[randIdx]; //this is using randIdx as a index number for array options
    //this function will return random value from "rock","paper" and "scissors"
}


const drawGame = () => {

    msg.innerText = "Game was draw" //sends text to a variable called msg which contains p tag which has a id called msg

    msg.style.backgroundColor = "blue" // change the background color of p tag

}

const playGame = (userChoice) => {  // take userchoice as a parameter 
    //generate computer choice

    const compchoice = genCompChoice(); //it will get random choice of computer from genCompChoice function

    if(userChoice == compchoice){ //this will compare userChoice and computer Choice and if userChoice and computer choice is equal it will call a drawGame function
        //dorw Game
        drawGame();

    }else{

        let userWin = true; // create a variable name userawin and give it a value true

        if(userChoice === "rock"){ // if user chosses rock

            // scissors, paper

            userWin = compchoice === "paper" ? false : true; //if computer chosses paper user will lose else user will win

        }else if(userChoice === "paper"){ //if user chooses paper

            // rock, scissor

            userWin = compchoice === "scissor"? false: true; // if computer chooses scissor user will lose else he will win

        }else { //user chooses scissor

            //rock,paper

            userWin = compchoice === "rock" ? false:true; //if computer chooses rock user will lose else user will win 
        }

        //after all this conditions applied userWin has a value true or false


        showWinner(userWin,userChoice,compchoice); //pass arguments of userWin,userChoice and compchoice
    }
}


const showWinner = (userWin,userChoice,compchoice) =>{  //get parameters of userWin, userChoice and compchoice
 
    //userWin has a value true or false
    //userChoice has a value rock or paper or scissor
    //compChoice has a value rock or paper or scissor

    if(userWin){ // if userWin has a value true

        userScore++; //userScore will increase by 1

        userScorePara.innerText = userScore; //value of userScore will be assigned in userScorePara which will print the value in document in a p tag which has a id '#user-score'


        msg.innerText = `you win your ${userChoice} beats ${compchoice}`; //values of  variables userchoice and compchoice will send to msg

        //example        you win your rocks beats paper


        msg.style.backgroundColor = "green" //color of p tag with id msg will change to green


    }else{// if userWin is false

        compScore++; //compscore will increase by 1

        compScorePara.innerText = compScore; //it will assign the value of comscore into a compScorePara and send to the p tag with the id of '#comp-score'

        msg.innerText = `You lost ${compchoice} beats your ${userChoice}`; //This will assign the value of compcoice and userchoice in a masg and send it to a p tag with a id = '#msg'

        msg.style.backgroundColor = "red" // this will change the background-color of p tag
    }
}