document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required!');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address!');
    } else {
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset(); // Reset the form
    }
});
