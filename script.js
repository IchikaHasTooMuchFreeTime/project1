// Get elements
const scareButton = document.getElementById('scareButton');
const jumpscare = document.getElementById('jumpscare');
const scarySound = document.getElementById('scarySound');
const scaryImage = document.getElementById('scaryImage');

// Add click event to the button
scareButton.addEventListener('click', () => {
    // Show the jumpscare image
    jumpscare.style.display = 'flex';
    
    // Play the scary sound
    scarySound.play();

    // Optional: Hide the button after click
    scareButton.style.display = 'none';

    // Optional: Stop the sound after a few seconds
    setTimeout(() => {
        scarySound.pause();
        jumpscare.style.display = 'none';
    }, 3000); // Adjust the time as needed
});
