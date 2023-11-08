// Define the Unsplash API access key
const accessKey = 'gyldlI1p-svehlKcKI92CeNVgWol6_EN7sddtvEtDs8';

// Function to fetch and display a random image from Unsplash
function fetchAndDisplayImage() {
  fetch('https://api.unsplash.com/photos/random', {
    method: 'GET',
    headers: {
      'Authorization': `Client-ID ${accessKey}`
    }
  })
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.urls.regular;
    const imageElement = document.getElementById('your-image-element');
    imageElement.src = imageUrl;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Attach the fetchAndDisplayImage function to the "Fetch Image" button
document.getElementById('fetch-button').addEventListener('click', fetchAndDisplayImage);
