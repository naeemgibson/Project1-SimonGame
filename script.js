console.log('works');

// Step 1- Declaring all interactive variables and const
let win;
let playerOn = false;
let squares = document.querySelectorAll('.cell')
let computerOn = true;
let turn;
let positions = [];
let light = 0;
let sound = true;
let gameOn = false;
let playerPositions = [];
let correct = false;

const topLeft = document.querySelector('#top-left')
const topRight = document.querySelector('#top-right')
const bottomLeft = document.querySelector('#bottom-left')
const bottomRight = document.querySelector('#bottom-right')
const powerButton = document.querySelector('#power1')
const startButton = document.querySelector('#start1')

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
}
function flashLight(){
    topLeft.style.background = 'white';
    topRight.style.background = 'white';
    bottomRight.style.background = 'white';
    bottomLeft.style.background= 'white';
}

 function winGame() {
     flashLight()
     turnCounter.innerHTML = "winner!";
     gameOn = false;
     win = true;
     }   
powerButton.addEventListener('click',(e) =>{
    if (powerButton.checked === true && startButton.checked === false){
        gameOn = true;
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



//     powerLightsIntervalId = setInterval ( powerLights, 2075 );


//     function powerLights ()
//     {
//      //Top Left Light
//      function topLeftLightUp() {
//       topLeft.style.opacity = 0.5;
// const r = Math.floor(Math.random() * 255);
// const g = Math.floor(Math.random() * 255);
// const b = Math.floor(Math.random() * 255);
// const newColor = `rgb(${r}, ${g}, ${b})`;
// topLeft.style.backgroundColor = newColor;
//       setTimeout (topLeftLightOff, 500)}
//     topLeftLightUp()
//     function topLeftLightOff()
//     {topLeft.style.opacity = 1;}
    
//     //Top Right Light
//     function topRightLightUp() {
//         topRight.style.opacity = 0.5;
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     const newColor = `rgb(${r}, ${g}, ${b})`;
//     topRight.style.backgroundColor = newColor;  
//     setTimeout(topRightLightOff, 1000)}
//     topRightLightUp();
//     function topRightLightOff()
//     {topRight.style.opacity = 1;}
    
//     //Bottom Right
//     function bottomRightLightUp() {
//         bottomRight.style.opacity = 0.5;
// const r = Math.floor(Math.random() * 255);
// const g = Math.floor(Math.random() * 255);
// const b = Math.floor(Math.random() * 255);
// const newColor = `rgb(${r}, ${g}, ${b})`;
// bottomRight.style.backgroundColor = newColor;
//     setTimeout(bottomRightLightOff, 1500)}
//     bottomRightLightUp();
//     function bottomRightLightOff()
//     {bottomRight.style.opacity = 1;}

//      //Bottom Left Light
//      function bottomLeftLightUp() {
//         bottomLeft.style.opacity = 0.5;
// const r = Math.floor(Math.random() * 255);
// const g = Math.floor(Math.random() * 255);
// const b = Math.floor(Math.random() * 255);
// const newColor = `rgb(${r}, ${g}, ${b})`;
// bottomLeft.style.backgroundColor = newColor;
//     setTimeout(bottomLeftLightOff, 2000)}
//     bottomLeftLightUp();
//     function bottomLeftLightOff()
//     {bottomLeft.style.opacity = 1;
//     bottomLeft.style.background = 'blue';}
   
//     }
  
    }
if (startButton.checked === true || powerButton.checked == false) {
    stopRandom()
    resetColor()
    console.log('hey')
}
function stopRandom (){
    clearInterval(powerLightsIntervalId)
} 

})

startButton.addEventListener('click', (e) => {
    if (startButton.checked == true && powerButton.checked == true && playerOn || computerOn || win) {
        gamePlay();
        console.log('clicked')
    }
    if (powerButton.checked == false || startButton.checked == false) {
        resetColor()
        clearInterval(intervalID)
    }
})

function gamePlay() {
    if (startButton.checked == true) {
    positions = [];
    light = 0
    intervalID = 0
    for (let index = 0; index < 16; index++) {
        positions.push(Math.floor(Math.random()*4)+1);
    } console.log(positions)
        computerOn = true;
        intervalID = setInterval(gameTurn, 800)}
    }

    function gameTurn() {
        playerOn = false;
if (powerButton.checked == false || startButton.checked == false) {
    return;
}
        // Defining the players turn
        if (light == turn) {
            // Reset the game
            clearInterval(intervalID)
            resetColor()
            // Turn off computer and Turn on Player
            computerOn = false;
            playerOn = true
        }

        if (computerOn == true){
            computerOn == true;
            resetColor()
            // Here we want to mimic the power button code block 
            // but have it in sync with the random positions array
            setTimeout(() => {
                if(positions[light] == 1)tpLft();
                if(positions[light] == 2)tpRght();
                if(positions[light] == 3)btmRght();
                if(positions[light] == 4)btmLft();
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
    if (gameOn == true && computerOn == false) {
        playerPositions.push(1);
        // check();
        tpLft();
        if(!win){
            setTimeout(() => {
               resetColor(); 
            }, 300);
        }
    }
})
topRight.addEventListener('click', (event) => {
    if (gameOn == true && computerOn == false) {
        playerPositions.push(2);
        // check();
        tpRght();
        if(!win){
            setTimeout(() => {
               resetColor(); 
            }, 300);
        }
    }
})
bottomRight.addEventListener('click', (event) => {
    if (gameOn == true && computerOn == false) {
        playerPositions.push(3);
        // check();
        btmRght();
        if(!win){
            setTimeout(() => {
               resetColor(); 
            }, 300);
        }
    }
})
bottomLeft.addEventListener('click', (event) => {
    if (gameOn == true && computerOn == false) {
        playerPositions.push(4);
        // check();
        btmLft();
        if(!win){
            setTimeout(() => {
               resetColor(); 
            }, 300);
        }
    }
})


function check() {
    if (playerOrder[playerOrder.length -1] !== positions[playerOrder.length-1]) {
        correct = false;
}
    if (playerOrder.length == 16 && correct == true) {
        winner ();
    }

    if (correct == false) {
        flashLight();
        turnCounter.innerHTML = 'Nope!'
        setTimeout(() => {
          turnCounter.innerHTML = turn;
          resetColor()

        if (pro == true){
            gamePlay()
        }else {
            computerOn = true;
            flash = 0;
            playerPositions = [];
            correct = true;
            intervalID = setInterval(gameTurn, 800) 
        }
        }, 800);
        sound == false;

        if (turn == playerPositions.length && correct && win){
            turn++
            playerPositions=[]
            computerOn = true
            flash = 0
            turnCounter.innerHTML = turn;
            setInterval()(gameTurn,800)
        }
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
