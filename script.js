// Afișează alerta personalizată
window.onload = function() {
    const alertBox = document.getElementById('alert-box');
    const closeAlert = document.getElementById('close-alert');

    // Afișează alerta la încărcarea paginii
    alertBox.style.display = 'block';

    // Închide alerta la apăsarea butonului "OK"
    closeAlert.addEventListener('click', function() {
        alertBox.style.display = 'none';
    });
};
