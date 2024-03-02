document.addEventListener('DOMContentLoaded', (event) => {
  const slider = document.getElementById('evolutionRange');
  const video = document.querySelector('.video-container video');
  const firstImage = document.getElementById('GreatCat');
  const secondImage = document.getElementById('MagicaBoi');
  
  // Variable to store the rotation interval
  let rotationInterval;

  // link video to slider
  slider.addEventListener('input', function() {
    const sliderValue = this.value;
    const videoDuration = video.duration;
    const newTime = videoDuration * (sliderValue / 100);
    video.currentTime = newTime;
  });

  document.getElementById('readyButton').addEventListener('click', function() {
    // show image when the button is clicked
    firstImage.classList.toggle('show-image');
  });

  firstImage.addEventListener('click', function() {
    // hide first image
    this.classList.remove('show-image');

    // show second image
    secondImage.classList.add('show-image');

    // start continuous rotation
    rotationInterval = setInterval(function() {
      rotateImage(secondImage);
    }, 30); // Adjust the rotation speed as needed
  });

  secondImage.addEventListener('click', function() {
    // stop the continuous rotation when clicked again
    clearInterval(rotationInterval);
  });
  
  // Function to rotate the image
  function rotateImage(image) {
    // Get the current rotation angle (default to 0 if not set)
    const currentRotation = parseInt(image.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
    
    // Increment the rotation angle and apply it to the image
    const newRotation = currentRotation + 20;
    image.style.transform = 'rotate(' + newRotation + 'deg)';
  }
});