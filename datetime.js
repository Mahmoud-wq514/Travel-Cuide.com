// JavaScript function to display current date and time
function displayDateTime() {
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();
    document.getElementById('datetime').innerHTML = date + ' ' + time;
}

// Call the function on page load and every second
window.onload = function() {
    displayDateTime();
    setInterval(displayDateTime, 1000);
}
