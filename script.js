// Inicializar o Swiper
const swiper = new Swiper('.swiper', {
    // Configurações opcionais
    loop: true, // Loop infinito
    
    // Navegação por setas
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Paginação
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // Efeito de transição
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    
    // Autoplay
    autoplay: {
        delay: 3300,
        disableOnInteraction: false,
    },
});

// Função para criar corações aleatórios
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.color = 'rgba(255, 0, 0, ' + (Math.random() * 0.35 + 0.3) + ')';
    heart.style.zIndex = '1';
    heart.style.pointerEvents = 'none';
    
    document.querySelector('.hearts-bg').appendChild(heart);
    
    // Animação
    const animation = heart.animate([
        { transform: 'translateY(0) translateX(0)', opacity: 1 },
        { transform: `translateY(-100vh) translateX(${Math.random() * 100 - 50}px)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 3000,
        easing: 'linear'
    });
    
    animation.onfinish = () => heart.remove();
}

// Criar corações a cada intervalo
setInterval(createHeart, 300);

// Função para atualizar o contador
function updateCounter() {
    const startDate = new Date('2024-06-04T21:00:00');
    const currentDate = new Date();
    const difference = currentDate - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const counterElement = document.getElementById('counter');
    counterElement.innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos juntos ❤️`;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);
// Executa imediatamente para não esperar o primeiro intervalo
updateCounter(); 