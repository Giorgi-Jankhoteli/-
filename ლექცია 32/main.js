function selectTheme(theme) {
    localStorage.setItem('theme', theme);
    alert(`Theme changed to ${theme}`);
}

let savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    document.body.className = savedTheme;
}else {
    document.body.className = 'light';
}

// -----------------------------------------------

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}

function restoreBackgroundColor() {
    let savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    } else {
        document.body.style.backgroundColor = 'white';
    }
}

function chooseColor() {
    let color = prompt("Enter a color (e.g., red, blue, #ff0000):");
    setBackgroundColor(color);
}
restoreBackgroundColor();

let button = document.createElement('button');
button.textContent = 'Change Color';
button.onclick = chooseColor;
document.body.appendChild(button);

// -----------------------------------------------