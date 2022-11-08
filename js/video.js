var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.getElementById("volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate = video.playbackRate * 0.9
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video")
	video.playbackRate = video.playbackRate * 1.1
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video")
	if (video.currentTime + 10 > video.duration){
		video.currentTime = 0
	}
	else{
		video.currentTime = video.currentTime + 10	
	}
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute"
	}
	else{
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute"
	}
	console.log(video.muted)
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100.
	document.getElementById("volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.className = "oldSchool"
})

document.querySelector("#orig").addEventListener("click", function(){
	video.className = "video"
})

