console.log('works');

// Step 1- Declaring all interactive variables and const
let win;
let playerOn = false;
let squares = document.querySelectorAll('.cell')
let computerOn;
let turn;
let positions = [];
let light = 0;
let sound = true;

const topLeft = document.querySelector('#top-left')
const topRight = document.querySelector('#top-right')
const bottomLeft = document.querySelector('#bottom-left')
const bottomRight = document.querySelector('#bottom-right')
const powerButton = document.querySelector('#power1')
const startButton = document.querySelector('#start1')

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

powerButton.addEventListener('click',(e) =>{
    if (powerButton.checked == true){
        on = true;
       console.log("on")
//        //Top Left Light
//         function topLeftLightUp() {
//   topLeft.style.opacity = 0.5;
//   setTimeout (topLeftLightOff, 2000)}
// topLeftLightUp()
// function topLeftLightOff()
// {topLeft.style.opacity = 1;}

// //Top Right Light
// function topRightLightUp() {
//     topRight.style.opacity = 0.5;}
//     topRightLightUp();
// setTimeout(topRightLightOff, 2000)
// function topRightLightOff()
// {topRight.style.opacity = 1;}

// //Bottom Left Light
// function bottomLeftLightUp() {
//     bottomLeft.style.opacity = 0.5;
// setTimeout(bottomLeftLightOff, 2000)}
//     bottomLeftLightUp();
// function bottomLeftLightOff()
//     {bottomLeft.style.opacity = 1;}

//     //Bottom Right
// function bottomRightLightUp() {
//     bottomRight.style.opacity = 0.5;
// setTimeout(bottomRightLightOff, 2000)}
//     bottomRightLightUp();
// function bottomRightLightOff()
//     {bottomRight.style.opacity = 1;}



    powerLightsIntervalId = setInterval ( powerLights, 2075 );


    function powerLights ()
    {
     //Top Left Light
     function topLeftLightUp() {
      topLeft.style.opacity = 0.5;
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
const newColor = `rgb(${r}, ${g}, ${b})`;
topLeft.style.backgroundColor = newColor;
      setTimeout (topLeftLightOff, 500)}
    topLeftLightUp()
    function topLeftLightOff()
    {topLeft.style.opacity = 1;}
    
    //Top Right Light
    function topRightLightUp() {
        topRight.style.opacity = 0.5;
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    topRight.style.backgroundColor = newColor;  
    setTimeout(topRightLightOff, 1000)}
    topRightLightUp();
    function topRightLightOff()
    {topRight.style.opacity = 1;}
    
    //Bottom Right
    function bottomRightLightUp() {
        bottomRight.style.opacity = 0.5;
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
const newColor = `rgb(${r}, ${g}, ${b})`;
bottomRight.style.backgroundColor = newColor;
    setTimeout(bottomRightLightOff, 1500)}
    bottomRightLightUp();
    function bottomRightLightOff()
    {bottomRight.style.opacity = 1;}

     //Bottom Left Light
     function bottomLeftLightUp() {
        bottomLeft.style.opacity = 0.5;
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
const newColor = `rgb(${r}, ${g}, ${b})`;
bottomLeft.style.backgroundColor = newColor;
    setTimeout(bottomLeftLightOff, 2000)}
    bottomLeftLightUp();
    function bottomLeftLightOff()
    {bottomLeft.style.opacity = 1;
    bottomLeft.style.background = blue;}
   
    }
  
    }
if (powerButton.checked == false) {
    clearInterval(powerLightsIntervalId)
    resetColor()
}

})

startButton.addEventListener('click', (e) => {
    if (playerOn || computerOn || win) {
        
    }
})

function gamePlay() {
    positions = [];
    light = 0
    intervalID = 0
    for (let index = 0; index < 16; index++) {
        positions.push(Math.floor(Math.random()*4)+1);
    } console.log(positions)
        computerOn = true;
        intervalID = setInterval(gameTurn, 800)
    }
    gamePlay()

    function gameTurn() {
        playerOn = false;

        // Defining the players turn
        if (light == turn) {
            // Reset the game
            clearInterval(intervalID)
            resetColor()
            // Turn off computer and Turn on Player
            computerOn = false;
            playerOn = true
        }

        if (computerOn){
            resetColor()
            // Here we want to mimic the power button code block 
            // but have it in sync with the random positions array
            setTimeout(() => {
                if(positions[light] == 1)tpLft();
                if(positions[light] == 2)tpRght();
                if(positions[light] == 1)btmRght();
                if(positions[light] == 1)btmLft();
                light++
            }, 200);
        }
    }

function tpLft(){
    if (sound) {
        let audio = document.getElementById('topleft')
        audio.play();}
        sound = true;
        topLeft.style.opacity = 0.5;
}

function tpRght(){
    if (sound) {
        let audio = document.getElementById('topright')
        audio.play();}
        sound = true;
        topRight.style.opacity = 0.5;
}

function btmRght(){
    if (sound) {
        let audio = document.getElementById('btmright')
        audio.play();}
        sound = true;
        bottomRight.style.opacity = 0.5;
}

function btmLft(){
    if (sound) {
        let audio = document.getElementById('btmleft')
        audio.play();}
        sound = true;
        topLeft.style.opacity = 0.5;
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
