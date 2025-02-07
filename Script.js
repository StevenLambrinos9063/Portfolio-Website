// Load dark mode preference from local storage
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");

        
    }
    displayTip();
});

// Daily IT Tip functionality
const tips = [
    "Restarting your computer fixes most common issues.",
    "Use strong, unique passwords for each account.",
    "Keep your software and OS updated to stay secure.",
    "Backup your important files regularly.",
    "Use two-factor authentication for extra security.",
    "Avoid clicking on suspicious email links.",
    "Use keyboard shortcuts to increase productivity.",
    "Run regular antivirus scans to keep your system clean.",
    "Clear your browser cache to improve speed and security.",
    "Learn basic command line tools to troubleshoot faster."
];

let currentTipIndex = Math.floor(Math.random() * tips.length);

function displayTip() {
    const tipText = document.getElementById("tip-text");
    if (tipText) {
        tipText.textContent = tips[currentTipIndex];
    }
}

document.getElementById("new-tip").addEventListener("click", () => {
    currentTipIndex = (currentTipIndex + 1) % tips.length;
    displayTip();
});


// Particles.js animation
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        move: { speed: 3, direction: "none", out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100 } }
    }
});