function createAnimatedElement(src, parentClass, count) {
    const container = document.querySelector(parentClass);
    for (let i = 0; i < count; i++) {
        const img = document.createElement('img');
        img.src = src;
        img.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        img.style.animationDuration = (Math.random() * (6 - 4) + 4) + 's'; // Random speed
        container.appendChild(img);
    }
}

// Create and animate stars, hearts, and balloons
createAnimatedElement('star.png', '.stars', 10);
createAnimatedElement('heart.png', '.hearts', 10);
createAnimatedElement('balloon.png', '.balloons', 5);

// Load the image from local storage if it exists
window.onload = function() {
    const imagePreview = document.getElementById('imagePreview');
    const savedImage = localStorage.getItem('uploadedImage');

    if (savedImage) {
        const img = document.createElement('img');
        img.src = savedImage;
        imagePreview.appendChild(img);
    }

    // Load default guitar image
    const guitarImage = document.getElementById('guitarImage');
    guitarImage.src = 'guitar.png'; // Ensure the default guitar image is set

    // Load the predefined song
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = 'birthdaysong.mp3'; // Ensure the song is loaded
}

// Handle image upload for the circular box
document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.innerHTML = ''; // Clear existing images
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);

            // Save the uploaded image to local storage
            localStorage.setItem('uploadedImage', e.target.result);
        }
        reader.readAsDataURL(file); // Read the image as a data URL
    }
});

// Play the audio when the guitar is clicked
document.getElementById('guitarImage').addEventListener('click', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play(); // Play the predefined audio
});

// Change the message when the message box is clicked
function changeMessage() {
    const messageBox = document.getElementById('messageBox');
    const expandedMessage = "Happy Birthday! To the one who makes my heart skip a beat. May this upcoming year be as beautiful as you are. An ya! Do click on that bouncing guitar lol.";
    
    messageBox.innerHTML = expandedMessage; // Changing the content of the box
    messageBox.style.color = "blue"; // Change text color
    messageBox.classList.add('expanded'); // Add class to make it expand
}