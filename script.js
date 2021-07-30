console.log('works');

// Step 1- Declaring all interactive variables as const
let win;
let on = false;
let squares = document.querySelectorAll('.cell')

const topLeft = document.querySelector('#top-left')
const topRight = document.querySelector('#top-right')
const bottomLeft = document.querySelector('#bottom-left')
const bottomRight = document.querySelector('#bottom-right')
const powerButton = document.querySelector('#power1')
const startButton = document.querySelector('#start1')



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
      setTimeout (topLeftLightOff, 500)}
    topLeftLightUp()
    function topLeftLightOff()
    {topLeft.style.opacity = 1;}
    
    //Top Right Light
    function topRightLightUp() {
        topRight.style.opacity = 0.5;}
        topRightLightUp();
    setTimeout(topRightLightOff, 1000)
    function topRightLightOff()
    {topRight.style.opacity = 1;}
    
    //Bottom Right
    function bottomRightLightUp() {
        bottomRight.style.opacity = 0.5;
    setTimeout(bottomRightLightOff, 1500)}
        bottomRightLightUp();
    function bottomRightLightOff()
        {bottomRight.style.opacity = 1;}

     //Bottom Left Light
     function bottomLeftLightUp() {
        bottomLeft.style.opacity = 0.5;
    setTimeout(bottomLeftLightOff, 2000)}
        bottomLeftLightUp();
    function bottomLeftLightOff()
        {bottomLeft.style.opacity = 1;}
    
    }

    }
if (powerButton.checked == false) {
    clearInterval(powerLightsIntervalId)
}
})





 















// start button
// topLeft.addEventListener('click',(e) =>{
//     console.log('clicked')
// })


// squares.forEach(square => {
//     function lightUp (){
// let currSquaeOpac = square.style.opacity
//     currSquaeOpac = 0.5;
// setTimeout ( currSquaeOpac =1, 2000 );}
// lightUp();
// })
// End of start button


// Attempt at linking music to buttons
// window.addEventListener('keydown', function(e){
//     const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
//     console.log(audio)
//     if(!audio) return;
//     audio.play();
// })




// const handler = (e) => {
// let clicker = e.target
// gVar = console.log(clicker)   
// }

// squares.forEach(square => square.addEventListener('click',handler))
