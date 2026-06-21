// ===== LETREIRO DINÂMICO =====
const roles = ['React.js', 'Next.js', 'Node.js', 'Java', 'Spring Boot'];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing');

function typeEffect() {
    const current = roles[index];
    if (!isDeleting) {
        typingElement.textContent = current.slice(0, charIndex++);
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        typingElement.textContent = current.slice(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
            setTimeout(typeEffect, 120);
            return;
        }
    }
    setTimeout(typeEffect, 120);
}

// ===== DUPLICAR STACKS PARA EFEITO INFINITO =====
const track = document.getElementById('stackTrack');
if (track) {
    const items = track.innerHTML;
    track.innerHTML = items + items; // duplica o conteúdo
}

document.addEventListener('DOMContentLoaded', typeEffect);