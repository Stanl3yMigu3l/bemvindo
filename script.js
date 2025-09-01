const modal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');

function openModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Fechar modal clicando fora da imagem
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Fechar modal com a tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Função para criar partículas flutuantes
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        pointer-events: none;
        animation: float 6s linear infinite;
        top: 100vh;
        left: ${Math.random() * 100}vw;
        z-index: -1;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Criar partículas periodicamente
setInterval(createParticle, 300);