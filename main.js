
onload = () => {
    document.body.classList.remove("container");
};

// Play button functionality to play/pause the music
document.getElementById("playButton").addEventListener("click", function() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
        audio.play();
        this.textContent = "Pause Music";
    } else {
        audio.pause();
        this.textContent = "Play Music";
    }
});
