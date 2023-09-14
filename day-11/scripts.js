const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    if(video.paused) {
        video.play();
    }else {
        video.pause();
    };
    // other way -> const method = video.paused ? 'play' : 'pause;  
    //              video[method]();
};

function updateButton (){
    const icon = this.paused ? '►' : '❚ ❚';  // ? = true and : = false
    toggle.textContent = icon;
};

function skip() {
  /* `parseFloat` is a JavaScript function that parses a string argument and
    returns a floating point number. In the given code, `parseFloat` is used to
    convert the value of `this.dataset.skip` (which is a string) to a floating
    point number before adding it to `video.currentTime`. */
    video.currentTime += parseFloat(this.dataset.skip);
};

function handleRangeUpdate() {
    /* Updating the value of a property on the `video` element
    based on the name and value of the range input element that triggered the event. */
    video[this.name] = this.value;
};

function handleProgress() {
    /* Calculates the percentage of the video that has been played. It divides the current time of the video by the total
    duration of the video and multiplies it by 100 to get the percentage. */
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
};

function scrub(e) {
   /* Calculates the time in the video that corresponds to the position where the user clicked on the progress bar. */
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // check if mousedown it's true and move to scrub, but if the variable is false just return false
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


function enterFullScreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
  };
};

  let btn = document.getElementById("full_screen");
  btn.addEventListener("click", function(){
    let videoEle = document.querySelector('video');
    enterFullScreen(videoEle);
  });
  
