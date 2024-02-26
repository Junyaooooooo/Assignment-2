document.addEventListener('DOMContentLoaded', (event) => {
  const slider = document.getElementById('evolutionRange');
  const video = document.querySelector('.video-container video');

  slider.addEventListener('input', function() {
    const sliderValue = this.value;
    const videoDuration = video.duration;
    const newTime = videoDuration * (sliderValue / 100);
    video.currentTime = newTime;
  });
});