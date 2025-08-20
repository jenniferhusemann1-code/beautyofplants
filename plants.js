// Floating message helper
function showMessage(text) {
    const box = document.getElementById("message-box");
    box.textContent = text;
    box.style.display = "block";

    // Hide after 2 seconds
    clearTimeout(box.timeout);
    box.timeout = setTimeout(() => {
        box.style.display = "none";
    }, 2000);
}

// Handle click events
document.body.addEventListener("click", function(event) {
    if (event.shiftKey && event.ctrlKey) {
        showMessage(`Event: ${event.type}, Element: ${event.target.tagName}`);
    } else if (event.shiftKey) {
        showMessage(`Event Name: ${event.type}`);
    } else if (event.ctrlKey) {
        showMessage(`Element Name: ${event.target.tagName}`);
    }
});
