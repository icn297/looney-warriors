// Retrieve the current count from local storage or initialize to 0
let visitorCount = localStorage.getItem('visitorCount') ? parseInt(localStorage.getItem('visitorCount')) : 0;

// Increment the count and update local storage
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

// Update the on-page visitor count display
document.getElementById('visitor-count').textContent = visitorCount;