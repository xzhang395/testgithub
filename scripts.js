var sound = new Howl({
  urls: ['magic.wav']
});
$('#play-button').click(function(){
	console.log("play is pressed!")
	sound.play();
});
$('#stop-button').click(function(){
	console.log("stop is pressed!")
	sound.stop();
});

function setup() {
	createCanvas(400,400);
	background(0);  
}

function draw() {
  
}
