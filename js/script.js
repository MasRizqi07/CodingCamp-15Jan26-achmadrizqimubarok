window.addEventListener('DOMContentLoaded', function() {
    const userName = prompt("Mohon Masukkan Nama Anda: ");
    if (userName) {
        document.getElementById('welcomeText').textContent = `Hi ${userName}, Selamat Datang DiWebsite Ini !`;
    }
});

function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

function submitForm(event) {
    event.preventDefault();
    
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');
    
    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        document.getElementById('birthdateError').style.display = 'block';
        isValid = false;
    }
    
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').style.display = 'block';
        isValid = false;
    }
    
    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        const now = new Date();
        const dateStr = now.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const timeStr = now.toLocaleTimeString('id-ID');
        
        document.getElementById('resultTime').textContent = `${dateStr} ${timeStr}`;
        document.getElementById('resultName').textContent = name;
        document.getElementById('resultBirthdate').textContent = new Date(birthdate).toLocaleDateString('id-ID');
        document.getElementById('resultGender').textContent = gender.value;
        document.getElementById('resultMessage').textContent = message;
        
        alert('Form submitted successfully!');
    }
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});