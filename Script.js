

// Infinite Scrolling Skills Animation
const skills = document.querySelectorAll(".skills");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    skills.forEach((skillSection) => {
        skillSection.setAttribute("data-animated", true);

        const skillsScroller = skillSection.querySelector('.skills-scroller');
        const skillsContent = skillsScroller.querySelector('.skills-content');
        const skillItems = Array.from(skillsContent.children);

        skillItems.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            skillsContent.appendChild(duplicatedItem);
        });
    });
};


// 2️⃣ Particles.js Initialization (Runs on Page Load)
function initializeParticles() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            move: { speed: 3, direction: "none", out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 60 } }
        }
    });
}

// 3️⃣ Start Particles on Page Load
document.addEventListener("DOMContentLoaded", () => {
    initializeParticles();
});

// 4️⃣ Fade Out Particles When Scrolling Past the Landing Page
document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let landingPage = document.getElementById("landing"); // Change this to your Landing Page section ID

    if (landingPage) {
        let landingBottom = landingPage.offsetTop + landingPage.offsetHeight;
        let particles = document.getElementById("particles-js");

        if (particles) {
            if (scrollPosition > landingBottom) {
                particles.style.opacity = "0"; // Fade out smoothly
                setTimeout(() => {
                    particles.style.visibility = "hidden"; // Completely hide after fade-out
                }, 500); // Delay matches opacity transition
            } else {
                particles.style.visibility = "visible"; // Show again when scrolling back up
                particles.style.opacity = ".5"; // Smoothly fade in
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const tipText = document.getElementById("tip-text");
    const tipButton = document.getElementById("new-tip");

    if (!tipText || !tipButton) {
        console.error("Daily IT Tip elements not found. Make sure the HTML exists.");
        return;
    }

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
        tipText.textContent = tips[currentTipIndex];
    }

    displayTip(); // Show initial tip on page load

    tipButton.addEventListener("click", () => {
        currentTipIndex = (currentTipIndex + 1) % tips.length;
        displayTip();
    });
});
