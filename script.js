console.log('works');

// Step 1- Declaring all interactive variables and const
let winner = false;
let playerOn = false;
let scoreBrd = document.querySelector('.js-score')
let squares = document.querySelectorAll('.cell')
let computerOn = true;
let turn = scoreBrd.innerHTML;
let positions = [];
let color = null;
let light = null;
let sound = true;
let gameOn = false;
let playerPositions = [];
let correct = false;
let intervalID;
let pro
// let screNum = document.querySelector('.js-score').innerHTML



const sect = document.querySelector('section')
const topLeft = document.querySelector('#red')
const topRight = document.querySelector('#yellow')
const bottomLeft = document.querySelector('#blue')
const bottomRight = document.querySelector('#green')
const powerButton = document.querySelector('#toggle1')
const startButton = document.querySelector('#toggle2')
const proBtn = document.querySelector('#pro1')

// const proButton = document.querySelector('')
const colors = ['red', 'yellow','green','blue']
//Get Random color
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
const newColor = `rgb(${r}, ${g}, ${b})`;

function resetColor(){
    topLeft.style.opacity = 1;
    topLeft.style.background = "crimson";
    topRight.style.opacity = 1;
    topRight.style.background = "yellow";
    bottomRight.style.opacity = 1;
    bottomRight.style.background = "darkgreen";
    bottomLeft.style.opacity = 1;
    bottomLeft.style.background= "blue";
    sect.style.background = '#111'
}

function actionLight(){
    topLeft.style.background = 'white';
    topRight.style.background = 'white';
    bottomRight.style.background = 'white';
    bottomLeft.style.background= 'white';
}
//This is how the computer sequence is created
function computerSequence () {
    let randomNumbers = (Math.floor(Math.random()*4));
    let patternColrs = colors[randomNumbers]
    positions.push(patternColrs)
     console.log(positions)
    }



 function winGame() {
     actionLight()
     scoreBrd.innerHTML = "winner!";
     gameOn = false;
     winner = true;
     }   
    //  && startButton.checked === false)
powerButton.addEventListener('click',(e) =>{
    if (powerButton.checked === true) {
        // const onOff = powerButton.parentNode.querySelector('.onoff')
        // onOff.innerHTML = powerButton.checked ? 'ON' : 'OFF'
        gameOn = true;
        scoreBrd.innerHTML = "--"
       console.log("on")
       //Top Left Light
        function topLeftLightUp() {
  topLeft.style.opacity = 0.5;
  setTimeout (topLeftLightOff, 2000)}
topLeftLightUp()
function topLeftLightOff()
{topLeft.style.opacity = 1;}

//Top Right Light
function topRightLightUp() {
    topRight.style.opacity = 0.5;}
    topRightLightUp();
setTimeout(topRightLightOff, 2000)
function topRightLightOff()
{topRight.style.opacity = 1;}

//Bottom Left Light
function bottomLeftLightUp() {
    bottomLeft.style.opacity = 0.5;
setTimeout(bottomLeftLightOff, 2000)}
    bottomLeftLightUp();
function bottomLeftLightOff()
    {bottomLeft.style.opacity = 1;}

    //Bottom Right
function bottomRightLightUp() {
    bottomRight.style.opacity = 0.5;
setTimeout(bottomRightLightOff, 2000)}
    bottomRightLightUp();
function bottomRightLightOff()
    {bottomRight.style.opacity = 1;}



// 
  
    }
if (startButton.checked === true || powerButton.checked == false) {
    // stopRandom()
    resetColor()
    scoreBrd.innerHTML = ""
    console.log('Uh oh no power')
    gameOn = false
}
// function stopRandom (){
//     clearInterval(powerLightsIntervalId)
// } 

})

startButton.addEventListener('click', (e) => {
    if (startButton.checked == true && powerButton.checked == true && playerOn || computerOn || winner) {
        gamePlay();
        console.log('hello there')
    }
    if (powerButton.checked == false && startButton.checked == true) {
        resetColor()
        console.log('dont want this')
        clearInterval(intervalID)
        scoreBrd.innerHTML = ""
        gameOn=false
    }
})

proBtn.addEventListener('click', (e) => {
    strict = true
})

function gamePlay() {
    if (startButton.checked == true) {
    winner = false;
    gameOn = true
    positions = [];
    playerPositions = [];
    light = 0;
    intervalID = 0;
    turn = 1;
    scoreBrd.innerHTML = 1;
    correct = true;
   for (let index = 0; index < 16; index++) {
       computerSequence()
       
   }
console.log('game has started')
        computerOn = true;
        intervalID = setInterval(gameTurn, 800)}
        // const handler = (e) => {
        //     let clicker = e.target
        //    let clickedSquare = clicker.id   
        //    playerPositions.push(clickedSquare)
        //    console.log(playerPositions)
        //     }
        //     //This is how the items are added to the player sequence
        //     squares.forEach(square => square.addEventListener('click',handler))
    }

    function gameTurn() {
        playerOn = false;
if (powerButton.checked == false || startButton.checked == false) {
    return;
}
        // Defining the players turn
        if (light == turn) {
            console.log('players turn')
            // Reset the game
            clearInterval(intervalID)
            resetColor()
            // Turn off computer and Turn on Player
            computerOn = false;
            playerOn = true
        }

        if (computerOn == true && light != turn){
            console.log('computers turn')
            
           
            computerOn == true;
            resetColor()
            // Here we want to mimic the power button code block 
            // but have it in sync with the random positions array
            setTimeout(() => {
                if(positions[light] == 'red')tpLft();
                if(positions[light] == 'yellow')tpRght();
                if(positions[light] == 'green')btmRght();
                if(positions[light] == 'blue')btmLft();
                light++
            }, 200);
        }
      
    }

function tpLft(){
    if (sound == true) {
        let audio = document.getElementById('topleft')
        audio.play();}
        sound = true;
        topLeft.style.backgroundColor = 'whitesmoke';
}

function tpRght(){
    if (sound == true) {
        let audio = document.getElementById('topright')
        audio.play();}
        sound = true;
        topRight.style.backgroundColor = 'whitesmoke';
}

function btmRght(){
    if (sound == true) {
        let audio = document.getElementById('btmright')
        audio.play();}
        sound = true;
        bottomRight.style.backgroundColor = 'whitesmoke';
}

function btmLft(){
    if (sound == true) {
        let audio = document.getElementById('btmleft')
        audio.play();}
        sound = true;
        bottomLeft.style.backgroundColor = 'whitesmoke';
}

 topLeft.addEventListener('click', (event) => {
    if (gameOn == true && computerOn == false)  {
        playerPositions.push('red')
        console.log('clicked')
        console.log(playerPositions)
        check();
        tpLft();
        if(!winner){
            setTimeout(() => {
               resetColor(); 
            }, 300);
        }
    }
})
topRight.addEventListener('click', (event) => {
    if (gameOn == true && computerOn == false) {
        playerPositions.push('yellow')
        console.log(playerPositions)
        check();
        tpRght();
        if(!winner){
            setTimeout(() => {
               resetColor(); 
            }, 300);
        }
    }
})
bottomRight.addEventListener('click', (event) => {
    if (gameOn == true && computerOn == false) {
        playerPositions.push('green')
        console.log(playerPositions)
        check();
        btmRght();
        if(!winner){
            setTimeout(() => {
               resetColor(); 
            }, 300);
        }
    }
})
bottomLeft.addEventListener('click', (event) => {
    if (gameOn == true && computerOn == false) {
       playerPositions.push('blue')
       console.log(playerPositions)
        check();
        btmLft();
        if(!winner){
            setTimeout(() => {
               resetColor(); 
            }, 300);
        }
    }
})


function check() {
    if (playerPositions[playerPositions.length -1] !== positions[playerPositions.length-1]) {
        correct = false;
}


    if (playerPositions.length == 16 && correct == true) {
        winGame ();
    }

    if (correct == false) {
        actionLight();
        scoreBrd.innerHTML = 'Nope!'
        let audio = document.getElementById('wrngbz')
        sect.style.backgroundColor = 'red'
        audio.play();}
        sound = true;
        setTimeout(() => {
          scoreBrd.innerHTML = turn;
          resetColor()
        
        if (pro == true){
            gamePlay()
        }else {
            computerOn = true;
            light = 0;
            playerPositions = [];
            correct = true;
            intervalID = setInterval(gameTurn, 800) 
        }
        }, 800);
    

        if (correct == true && !winner){
            console.log('correct')
            turn++
            scoreBrd.innerHTML = turn;
            playerPositions=[]
            computerOn = true
            light = 0
            clearInterval(intervalID)
            intervalID = setInterval(gameTurn,800)
        }
    }
    















// topLeft.addEventListener('click',(e) =>{
//     console.log('clicked')
// })
 







// squares.forEach(square => {
//     function lightUp (){
// let currSquaeOpac = square.style.opacity
// currSquaeOpac = 0.5;
// const r = Math.floor(Math.random() * 255);
// const g = Math.floor(Math.random() * 255);
// const b = Math.floor(Math.random() * 255);
// const newColor = `rgb(${r}, ${g}, ${b})`;
// bottomLeft.style.backgroundColor = newColor;
// for (let index = 500; index < 2000; index++) {
//         setTimeout ( currSquaeOpac =1, 2000 ); 
//         }
// }
// lightUp();
// })





// squares.forEach(square => {
//     function lightUp (){
// let currSquaeOpac = square.style.opacity
//     currSquaeOpac = 0.5;
// setTimeout ( currSquaeOpac =1, 2000 );}
// lightUp();
// })



// Attempt at linking music to buttons
// window.addEventListener('keydown', function(e){
//     const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
//     audio.setAttribute(src, )
//     console.log(audio)
//     if(!audio) return;
//     audio.play();
// })



//Took from lesson
// const handler = (e) => {
// let clicker = e.target
// gVar = console.log(clicker)   
// }

// squares.forEach(square => square.addEventListener('click',handler))
