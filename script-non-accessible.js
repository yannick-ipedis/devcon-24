document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const fields = [
        { id: 'name', errorId: 'nameError', validate: value => value.trim() !== '' },
        { id: 'email', errorId: 'emailError', validate: value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) },
        { id: 'tel', errorId: 'telephoneError', validate: value => /^\d{8}$/.test(value) },
        { id: 'message', errorId: 'messageError', validate: value => value.trim() !== '' },
        { id: 'terms', errorId: 'termsError', validate: () => document.getElementById('terms').checked }
    ];

    let isValid = true;
    let firstInvalidField = null;

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);

        if (!field.validate(input.value)) {
            input.classList.add('error-border');
            error.style.display = 'block';

            if (isValid) {
                firstInvalidField = input;
            }

            isValid = false;
        } else {
            input.classList.remove('error-border');
            error.style.display = 'none';
        }
    });

    if (!isValid && firstInvalidField) {
        
    } else {
        // Submit the form if valid
        // Uncomment the line below to allow form submission
        // this.submit();
        alert('Le formulaire a été envoyé avec succès !');
    }
});