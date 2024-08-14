document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('techvaganza');
    const techvaganza = "TECHVAGANZA-2024";
    const introTextElement = document.querySelector('.intro-text');
    introTextElement.textContent = "NIT SGR PRESENTS"; // Updated to "NIT SGR PRESENTS"

    const scripts = [
        'ٹ', 'ا', 'ج', 'ა', 'ن', 'ہ'
    ]; // Example scripts, replace with the desired characters.

    let currentLetterIndex = 0;

    function animateLetter() {
        if (currentLetterIndex < techvaganza.length) {
            let letter = document.createElement('span');
            letter.className = 'letter';
            textElement.appendChild(letter);

            let iterations = scripts.length;
            let interval = setInterval(() => {
                letter.textContent = scripts[(iterations--) % scripts.length];
                if (iterations === 0) {
                    clearInterval(interval);
                    letter.textContent = techvaganza[currentLetterIndex];
                    currentLetterIndex++;
                    animateLetter();
                }
            }, 40); // Faster speed
        } else {
            // After all letters are displayed, apply the futuristic effect
            applyFuturisticEffect();
        }
    }

    textElement.style.opacity = '1';
    animateLetter();

    function applyFuturisticEffect() {
        textElement.classList.add('futuristic-effect');
    }
});