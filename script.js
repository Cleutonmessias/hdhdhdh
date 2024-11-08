document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const passwordField = document.querySelector('.password-group');
    
    // Simula uma tela onde primeiro pede o e-mail e depois a senha
    if (!passwordField.style.display || passwordField.style.display === 'none') {
        // Caso seja a primeira etapa (email)
        if (email) {
            passwordField.style.display = 'block';
            document.getElementById('email').disabled = true;
            document.querySelector('.login-button').textContent = 'Sign in';
        }
    } else {
        // Caso seja a segunda etapa (senha)
        const password = document.getElementById('password').value;
        if (email && password) {
            alert('Logged in successfully!');
            // Aqui você pode adicionar lógica para enviar os dados ao backend
        }
    }
});
