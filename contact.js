document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (name === '' || email === '' || message === '') {
        confirmationMessage.textContent = 'Please fill in all required fields.';
        confirmationMessage.style.color = 'red';
        return;
    }

    confirmationMessage.textContent = 'Thank you for contacting us, ' + name + '! We will get back to you shortly.';
    confirmationMessage.style.color = '#28a745';

    document.getElementById('contactForm').reset();
});

document.getElementById('callForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const requestPhone = document.getElementById('requestPhone').value;
    const callConfirmation = document.getElementById('callConfirmation');

    if (requestPhone === '') {
        callConfirmation.textContent = 'Please enter your phone number.';
        callConfirmation.style.color = 'red';
        return;
    }

    
    callConfirmation.textContent = 'Thank you! We will call you back at ' + requestPhone + ' as soon as possible.';
    callConfirmation.style.color = '#28a745';

    
    document.getElementById('callForm').reset();
});


document.getElementById('chatButton').addEventListener('click', function() {
   
    alert('Chat feature coming soon!');
});
document.getElementById('requestPhone').addEventListener('click',function() {
    alert('Reaquest a call feature Coming soon' );
});