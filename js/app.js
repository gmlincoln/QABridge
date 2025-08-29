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


// Contact form
const form = document.getElementById('quote');
const alertBox = document.getElementById('success-alert');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        name: form.name.value,
        email: form.email.value,
        company: form.company.value,
        projectType: form.projectType.value,
        goals: form.goals.value
    };

    try {
        const response = await fetch('https://formspree.io/f/xldwgzbg', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Show alert
            alertBox.style.opacity = '1';
            alertBox.style.transform = 'translateY(0)';
            form.reset();

            // Hide after 3 sec
            setTimeout(() => {
                alertBox.style.opacity = '0';
                alertBox.style.transform = 'translateY(-10px)';
            }, 3000);
        } else {
            console.log('Failed to send');
        }
    } catch (err) {
        console.error(err);
    }
});