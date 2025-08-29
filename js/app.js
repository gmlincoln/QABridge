// Tailwind cofig 
tailwind.config = {
    darkMode: 'class',
};




document.getElementById('y').textContent = new Date().getFullYear();
document.getElementById('menuBtn').onclick = () =>
    document.getElementById('mobileMenu').classList.toggle('hidden');



const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// On load, check localStorage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark');
} else {
    root.classList.remove('dark');
}

// Toggle button
themeToggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    if (root.classList.contains('dark')) {
        localStorage.theme = 'dark';
        themeToggle.textContent = '☀️';
    } else {
        localStorage.theme = 'light';
        themeToggle.textContent = '🌙';
    }
});

// Set correct icon on load
if (root.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
} else {
    themeToggle.textContent = '🌙';
}


