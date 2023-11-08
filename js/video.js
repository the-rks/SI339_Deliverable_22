var video = document.getElementById("player1")

window.addEventListener("load", function() {
	console.log("Loading done!")
	video.load()
	video.loop = false
	video.autoplay = false
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// Set "video" to the video player



document.querySelector("#play").addEventListener("click", function() {
	console.log("Playing video")
	video.play()
	document.getElementById("volume").textContent = (video.volume * 100) + "%"
});

document.querySelector("#pause").addEventListener("click", function() {

	video.pause()
});




document.querySelector("#slower").addEventListener("click", function() {

	video.playbackRate *= 0.9;
	
});




document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1;


});


document.querySelector("#skip").addEventListener("click", function() {

	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0
	}


	else {video.currentTime += 10}
});

document.querySelector("#mute").addEventListener("click", function() {
	

	if (video.muted) {
		video.muted = false
		document.getElementById("mute").textContent = "Mute"
	}

	else {
		
		video.muted = true
		document.getElementById("mute").textContent = "Unmute"
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.getElementById("slider").value / 100
	document.getElementById("volume").textContent = (video.volume * 100) + "%"
});



document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});





document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});
