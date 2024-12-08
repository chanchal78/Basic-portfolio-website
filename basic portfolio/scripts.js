document.addEventListener('DOMContentLoaded', () => {
    // Handle contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Show an alert or perform any desired action here
        alert('Thank you for your message!');
    });
});
