document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    });

    if (response.ok) {
        alert('Thank you for signing up!');
    } else {
        alert('Something went wrong. Please try again.');
    }
});
