const initializeDarkMode = () => {
    const htmlElement = document.documentElement;
    const darkModeState = localStorage.getItem("dark-mode") || "disabled";
    if (darkModeState === "enabled") {
        htmlElement.classList.add("dark");
    } else {
        htmlElement.classList.remove("dark");
    }
};

const setupDarkModeToggle = () => {
    const htmlElement = document.documentElement;
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    if (!darkModeToggle) {
        return;
    }

    console.log("Botón encontrado:", darkModeToggle);

    // Asigna el evento de clic al botón de modo oscuro
    darkModeToggle.addEventListener("click", () => {
        const isDarkMode = htmlElement.classList.contains("dark");
        if (isDarkMode) {
            htmlElement.classList.remove("dark");
            localStorage.setItem("dark-mode", "disabled");
        } else {
            htmlElement.classList.add("dark");
            localStorage.setItem("dark-mode", "enabled");
        }
    });
};

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    initializeDarkMode();
    setupDarkModeToggle();
});

// Reasignar después de cada cambio de vista en Astro
document.addEventListener("astro:after-swap", () => {
    initializeDarkMode();
    setupDarkModeToggle();
});
