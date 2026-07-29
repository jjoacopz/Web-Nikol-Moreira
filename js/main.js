// Configuración de imágenes de Segunda Piel
const segundaPielImages = [
    'WhatsApp Image 2026-07-27 at 20.30.25.jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.25 (1).jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.26.jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.26 (1).jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.26 (2).jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.26 (3).jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.26 (4).jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.27.jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.27 (1).jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.27 (2).jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.27 (3).jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.27 (4).jpeg',
    'WhatsApp Image 2026-07-27 at 20.30.28.jpeg'
];

let currentLightboxIndex = 0;
let allGaleriaImages = [];

// Cargar galería
function loadGaleria() {
    const galeriaContainer = document.getElementById('galeriaSegundaPiel');

    segundaPielImages.forEach((image, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'imagen-item';
        imageItem.innerHTML = `
            <img src="public/images/segunda-piel/${image}" alt="Segunda Piel - Imagen ${index + 1}" loading="lazy">
            <div class="imagen-overlay">
                <span class="imagen-icon">🔍</span>
            </div>
        `;

        imageItem.addEventListener('click', () => {
            currentLightboxIndex = index;
            openLightbox(image);
        });

        galeriaContainer.appendChild(imageItem);
    });

    allGaleriaImages = document.querySelectorAll('.imagen-item img');
}

// Lightbox functionality
function openLightbox(image) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = `public/images/segunda-piel/${image}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % segundaPielImages.length;
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = `public/images/segunda-piel/${segundaPielImages[currentLightboxIndex]}`;
}

function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + segundaPielImages.length) % segundaPielImages.length;
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = `public/images/segunda-piel/${segundaPielImages[currentLightboxIndex]}`;
}

// Event listeners para lightbox
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-next').addEventListener('click', nextImage);
document.getElementById('lightbox-prev').addEventListener('click', prevImage);

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeLightbox();
    }
});

// Smooth scroll para los links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Cargar contenido cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadGaleria();
});

// Intersection Observer para lazy loading con animación
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos cuando se cargan
setTimeout(() => {
    document.querySelectorAll('.imagen-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
}, 100);
