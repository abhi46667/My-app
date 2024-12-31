// Simulate app launching
function launchApp(appName) {
  switch (appName) {
    case 'camera':
      alert('Launching Camera...');
      break;
    case 'settings':
      alert('Launching Settings...');
      break;
    case 'phone':
      alert('Launching Phone...');
      break;
    case 'messages':
      alert('Launching Messages...');
      break;
    default:
      alert('App not available.');
  }
}

// Example: Add swipe gesture detection (for page navigation)
let startX;

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) {
    alert('Swiped left!');
    // Navigate to the next screen
  } else if (startX < endX - 50) {
    alert('Swiped right!');
    // Navigate to the previous screen
  }
});