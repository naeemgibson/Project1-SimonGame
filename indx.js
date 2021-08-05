    var otTitle = document.getElementById("textBox"),
        letters = document.getElementsByClassName('text')
		sSpan = letters.length,
		buttons = document.getElementsByClassName('button1'),
        bButton = buttons.length,

		whichLetter = 0,
		trailAmount1 = 7,
        whichButton = 0,
        trailAmount2 = 5,
        one = document.querySelector('#one'),
        two = document.querySelector('#two'),
        three = document.querySelector('#three'),
        four = document.querySelector('#four'),
        playbtn = document.querySelector('.button')
      
        


//Used to get random colors
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// //Animate color change 
// setInterval(function() {
// 	var rColor = getRandomColor();
// 	var tColor = getRandomColor();
// 	if (whichLetter < sSpan + trailAmount1) {
// 		if (whichLetter > (trailAmount1 - 1)) {
// 			letters[(whichLetter - trailAmount1)].style.color = 'whitesmoke';
// 		}
// 		if (whichLetter < sSpan) {
// 			// letters[whichLetter].style.color = rColor;
// 			letters[whichLetter].style.textShadow = '0px 0px 10px ' + tColor;
// 		}
// 		whichLetter++;
// 	} else if (whichLetter > sSpan + (trailAmount1 - 1)) whichLetter = 0;
// }, 75)

setInterval(function() {
	var rColor = getRandomColor();
	var tColor = getRandomColor();
	if (whichButton < bButton + trailAmount2) {
		if (whichButton > (trailAmount2 - 1)) {
			buttons[(whichButton - trailAmount2)].style.color = 'whitesmoke';
		}
		if (whichButton < bButton) {
			buttons[whichButton].style.background = rColor;
			buttons[whichButton].style.boxShadow = '0px 0px 10px ' + tColor;
		}
		whichButton++;
	} else if (whichButton > bButton + (trailAmount2 - 1)) whichButton = 0;
}, 75)

one.addEventListener('click',(e) =>{
    console.log('clicked1')
    one.style.background = 'white';
    const audio = this.document.querySelector('#first')
    audio.play();
})
// one.addEventListener('mouseover',(e) =>{
//     one.style.background = 'white';
//     clearInterval()
// })
two.addEventListener('click',(e) =>{
    console.log('clicked2')
    two.style.background = 'white';
    const audio = this.document.querySelector('#second')
    audio.play();
})
three.addEventListener('click',(e) =>{
    console.log('clicked3')
    three.style.background = 'white';
    const audio = this.document.querySelector('#third')
    audio.play();
})
four.addEventListener('click',(e) =>{
    console.log('clicked4')
    four.style.background = 'white';
    const audio = this.document.querySelector('#fourth')
    audio.play();
})
playbtn.addEventListener('click',(e) =>{
    const audio = this.document.querySelector('#play')
    audio.play(); 
    console.log('play')
    playbtn.setAttribute(href,"simon.html")
})
function delay (URL) {
    setTimeout( function() { window.location = URL }, 800 );
}