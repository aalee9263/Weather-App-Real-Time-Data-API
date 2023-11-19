function updateTimeAndDate() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const timeString = now.toLocaleTimeString('en-US', options);
    
    const dateString = now.toDateString();

    document.getElementById('time').textContent = `${timeString}`;
    document.getElementById('date').textContent = `${dateString}`;
}

// Update time and date when the page loads
updateTimeAndDate();

// Set up a timer to update the time every second
setInterval(updateTimeAndDate, 1000);
