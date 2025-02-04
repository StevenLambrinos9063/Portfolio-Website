// Toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

// Toggle light/dark mode
const darkModeSwitch = document.getElementById("dark-mode-switch");

darkModeSwitch.addEventListener('change', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the mode preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Check and set the dark mode on page load based on localStorage
document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        darkModeSwitch.checked = true;
    } else {
        document.body.classList.remove("dark-mode");
        darkModeSwitch.checked = false;
    }
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

let currentTipIndex = 0;

function displayTip() {
    const tipText = document.getElementById("tip-text");
    tipText.textContent = tips[currentTipIndex];
}

document.getElementById("new-tip").addEventListener("click", () => {
    currentTipIndex = (currentTipIndex + 1) % tips.length; // Cycle through tips
    displayTip();
});

// Initial tip display
displayTip();

// Sidebar toggle and dark mode functionality for the sidebar
const sidebar = document.getElementById("sidebar");

// Close sidebar when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('#open-btn') && !event.target.matches('.sidebar') && !event.target.matches('.sidebar *')) {
        closeSidebar();
    }
};

function closeSidebar() {
    sidebar.style.width = "0";
}

function openSidebar() {
    sidebar.style.width = "250px";
}
