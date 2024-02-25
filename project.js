const quotes = {
    science: ["Science quote 1", "Science quote 2", "Science quote 3"],
    motivation: ["Motivational quote 1", "Motivational quote 2", "Motivational quote 3"]
};

let currentCategory = 'science';
let currentQuoteIndex = 0;
let darkMode = false;

function toggleDarkMode() {
    darkMode = !darkMode;
    updateTheme();
}

function updateTheme() {
    const body = document.body;
    body.style.backgroundColor = darkMode ? '#333' : '#f5f5f5';
    body.style.color = darkMode ? '#fff' : '#333';
}

function changeFontSize(action) {
    const quoteElement = document.getElementById('quote');
    let currentSize = parseFloat(window.getComputedStyle(quoteElement, null).getPropertyValue('font-size'));
    const newSize = action === 'increase' ? currentSize * 1.2 : currentSize / 1.2;
    quoteElement.style.fontSize = newSize + 'px';
}

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const categoryQuotes = quotes[currentCategory];
    quoteElement.textContent = categoryQuotes[currentQuoteIndex];
}

function prevQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    displayQuote();
}

function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
    displayQuote();
}

function randomQuote() {
    currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    displayQuote();
}

function changeCategory() {
    currentCategory = document.getElementById('categories').value;
    currentQuoteIndex = 0;
    displayQuote();
}

document.addEventListener('DOMContentLoaded', function () {
    updateTheme();
    displayQuote();
});