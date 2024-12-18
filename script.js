// Video Player Script
document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    var controls = document.querySelector('.video-controls');
    var playButton = document.getElementById('playButton');
    
    // Show the controls and hide the play button
    controls.style.display = 'block';
    playButton.style.display = 'none';
    
    // Play the video
    video.play();
    
    // Update progress bar
    video.addEventListener('timeupdate', function() {
        var progress = document.getElementById('progress');
        var value = (video.currentTime / video.duration) * 100;
        progress.value = value;
    });

    // Play/Pause toggle
    document.getElementById('playPause').addEventListener('click', function() {
        if (video.paused) {
            video.play();
            this.innerHTML = '&#10074;&#10074;'; // Pause icon
        } else {
            video.pause();
            this.innerHTML = '&#9658;'; // Play icon
        }
    });

    // Skip video by clicking on progress bar
    document.getElementById('progress').addEventListener('input', function() {
        var progress = document.getElementById('progress');
        var newTime = (progress.value / 100) * video.duration;
        video.currentTime = newTime;
    });
});
