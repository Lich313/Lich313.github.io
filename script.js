'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
    
    showResult('🎨 Цвет фона изменен!', 'success');
}

// Работа со счетчиком
let counterValue = 0;

function incrementCounter() {
    counterValue++;
    updateCounterDisplay();
    
    // Анимация счетчика
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        counterElement.style.transform = 'scale(1.2)';
        counterElement.style.color = getRandomColor();
        setTimeout(() => {
            counterElement.style.transform = 'scale(1)';
        }, 200);
    }
    
    showResult(Счетчик увеличен: ${counterValue}, 'success');
}

function resetCounter() {
    counterValue = 0;
    updateCounterDisplay();
    showResult('🔄 Счетчик сброшен!', 'success');
}

function updateCounterDisplay() {
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        counterElement.textContent = counterValue;
    }
}

// Обработка формы
function handleFormSubmit() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formResult = document.getElementById('form-result');
    
    // Валидация
    if (!name ⠟⠞⠵⠵⠞⠞⠺⠞ !message) {
        formResult.textContent = '❌ Пожалуйста, заполните все поля';
        formResult.className = 'error';
        return;
    }
    
    if (!isValidEmail(email)) {
        formResult.textContent = '❌ Пожалуйста, введите корректный email';
        formResult.className = 'error';
        return;
    }
    
    // Имитация отправки
    console.log('📤 Отправка формы:', { name, email, message });
    
    formResult.textContent = ✅ Спасибо, ${name}! Ваше сообщение отправлено.;
    formResult.className = 'success';
    
    // Очистка формы
    document.getElementById('contact-form').reset();
    
    // Автоматическое скрытие сообщения
    setTimeout(() => {
        formResult.style.display = 'none';
    }, 5000);
}

// Валидация email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Генерация случайного цвета
function getRandomColor() {
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Запуск анимаций
function startAnimations() {
    console.log('🎬 Запуск анимаций...');
    
    // Анимация появления секций
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Обработка ошибок
window.addEventListener('error', function(e) {
    console.error('❌ Ошибка JavaScript:', e.error);
    showResult('❌ Произошла ошибка в JavaScript. Проверьте консоль.', 'error');
});

console.log('🚀 Скрипт загружен и готов к работе!');
