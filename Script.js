// Toggle Sidebar
function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar");
    var body = document.body;
    sidebar.classList.toggle("open");
    body.classList.toggle("sidebar-open"); // Ensure this shifts the content when sidebar is open
}

// Close Sidebar on Outside Click
window.onclick = function(event) {
    var sidebar = document.querySelector(".sidebar");
    var hamburger = document.querySelector('.hamburger');
    
    // Close the sidebar if the user clicks outside of it
    if (!event.target.matches('.hamburger') && !event.target.closest('.sidebar')) {
        sidebar.classList.remove("open");
        document.body.classList.remove("sidebar-open");
    }
};

// Close Sidebar when clicking on a link inside the sidebar
document.querySelectorAll('.sidebar a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector(".sidebar").classList.remove("open");
        document.body.classList.remove("sidebar-open");
    });
});

// Toggle Dark Mode
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

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
    currentTipIndex = (currentTipIndex + 1) % tips.length;
    displayTip();
});

// Initial tip display
displayTip();
