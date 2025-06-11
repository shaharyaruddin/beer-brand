document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form');
    const placeOrderBtn = document.getElementById('place-order');

    // Function to validate email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to validate zip code (basic check for 5 digits, adjust as needed)
    const isValidZip = (zip) => {
        const zipRegex = /^\d{5}$/;
        return zipRegex.test(zip);
    };

    // Function to show/hide error messages
    const toggleError = (elementId, show, message) => {
        const errorElement = document.getElementById(`${elementId}-error`);
        errorElement.textContent = message;
        errorElement.style.display = show ? 'block' : 'none';
    };

    // Form validation
    const validateForm = () => {
        let isValid = true;

        // Full Name
        const fullName = document.getElementById('full-name').value.trim();
        if (!fullName) {
            toggleError('full-name', true, 'Please enter your full name.');
            isValid = false;
        } else {
            toggleError('full-name', false, '');
        }

        // Email
        const email = document.getElementById('email').value.trim();
        if (!email) {
            toggleError('email', true, 'Please enter your email address.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            toggleError('email', true, 'Please enter a valid email address.');
            isValid = false;
        } else {
            toggleError('email', false, '');
        }

        // Address
        const address = document.getElementById('address').value.trim();
        if (!address) {
            toggleError('address', true, 'Please enter your shipping address.');
            isValid = false;
        } else {
            toggleError('address', false, '');
        }

        // City
        const city = document.getElementById('city').value.trim();
        if (!city) {
            toggleError('city', true, 'Please enter your city.');
            isValid = false;
        } else {
            toggleError('city', false, '');
        }

        // Zip Code
        const zip = document.getElementById('zip').value.trim();
        if (!zip) {
            toggleError('zip', true, 'Please enter your zip code.');
            isValid = false;
        } else if (!isValidZip(zip)) {
            toggleError('zip', true, 'Please enter a valid 5-digit zip code.');
            isValid = false;
        } else {
            toggleError('zip', false, '');
        }

        // Payment Method
        const paymentMethod = document.getElementById('payment-method').value;
        if (!paymentMethod) {
            toggleError('payment-method', true, 'Please select a payment method.');
            isValid = false;
        } else {
            toggleError('payment-method', false, '');
        }

        return isValid;
    };

    // Handle form submission
    placeOrderBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            // Simulate order submission (replace with actual backend call)
            const formData = {
                fullName: document.getElementById('full-name').value,
                email: document.getElementById('email').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                zip: document.getElementById('zip').value,
                paymentMethod: document.getElementById('payment-method').value,
            };

            // For demo purposes, show an alert and log to console
            alert('Order placed successfully!');
            console.log('Order Details:', formData);

            // Optionally, reset the form
            form.reset();
        }
    });

    // Real-time validation on input change
    ['full-name', 'email', 'address', 'city', 'zip', 'payment-method'].forEach((id) => {
        const input = document.getElementById(id);
        input.addEventListener('input', validateForm);
        input.addEventListener('change', validateForm);
    });
});