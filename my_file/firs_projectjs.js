// script.js
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const seekBar = document.getElementById('seekBar');
    const currentTimeElem = document.getElementById('currentTime');
    const durationElem = document.getElementById('duration');

    // Update duration time
    audio.addEventListener('loadedmetadata', () => {
        seekBar.max = audio.duration;
        durationElem.textContent = formatTime(audio.duration);
    });

    // Play/Pause button
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Stop button
    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    });

    // Update seek bar and current time
    audio.addEventListener('timeupdate', () => {
        seekBar.value = audio.currentTime;
        currentTimeElem.textContent = formatTime(audio.currentTime);
    });

    // Seek bar change event
    seekBar.addEventListener('input', () => {
        audio.currentTime = seekBar.value;
    });

    // Format time (MM:SS)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
});
