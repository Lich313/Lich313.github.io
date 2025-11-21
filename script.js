// Проверка подключения
console.log("JavaScript подключен!");

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log("Страница загружена!");
    initializeGallery();
    updateTime();
    setupEventListeners();
    
    setInterval(updateTime, 1000);
});

// Инициализация галереи
function initializeGallery() {
    const gallery = document.getElementById('image-gallery');
    const images = [
        'https://via.placeholder.com/300x200/3498db/ffffff?text=Проект+1',
        'https://via.placeholder.com/300x200/2ecc71/ffffff?text=Проект+2',
        'https://via.placeholder.com/300x200/e74c3c/ffffff?text=Проект+3'
    ];

    images.forEach(imageUrl => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Пример проекта';
        
        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);
    });
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Кнопка приветствия
    const welcomeBtn = document.getElementById('welcome-btn');
    if (welcomeBtn) {
        welcomeBtn.addEventListener('click', function() {
            alert('Привет! Кнопка работает! 🎉');
            document.getElementById('welcome-message').textContent = 'Вы нажали на кнопку!';
        });
    }

    // Счетчик
    const incrementBtn = document.getElementById('increment-btn');
    if (incrementBtn) {
        incrementBtn.addEventListener('click', function() {
            const counterElement = document.getElementById('counter-value');
            let count = parseInt(counterElement.textContent);
            count++;
            counterElement.textContent = count;
            counterElement.style.color = getRandomColor();
        });
    }

    // Форма обратной связи
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            if (name && email) {
                document.getElementById('form-message').textContent = 
                    Спасибо, ${name}! Ваше сообщение отправлено.;
                document.getElementById('form-message').className = 'success';
                contactForm.reset();
            } else {
                document.getElementById('form-message').textContent = 
                    'Пожалуйста, заполните все поля.';
                document.getElementById('form-message').className = 'error';
            }
        });
    }

    // Плавная прокрутка
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Обновление времени
function updateTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        const now = new Date();
        const timeString = now.toLocaleString('ru-RU');
        timeElement.textContent = Текущее время: ${timeString};
    }
}

// Случайный цвет
function getRandomColor() {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
    return colors[Math.floor(Math.random() * colors.length)];
}
