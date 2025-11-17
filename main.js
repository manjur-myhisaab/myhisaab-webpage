const { animate, scroll, inView, stagger } = Motion



const videoCards = document.querySelectorAll(".video-card");
let activeCard = null;

videoCards.forEach(card => {
    const video = card.querySelector("video");

    card.addEventListener("mouseenter", () => {
        // Add controls only on hover
        video.setAttribute("controls", true);
        video.muted = false;

        // Play video
        // video.play();

        // Remove "large" from previous active card
        if (activeCard && activeCard !== card) {
            activeCard.classList.remove("large");

            // Pause previous card video
            const oldVideo = activeCard.querySelector("video");
            oldVideo.pause();
            oldVideo.currentTime = 0;
            oldVideo.removeAttribute("controls");
        }

        // Add "large" to current card
        card.classList.add("large");
        activeCard = card;
    });

    card.addEventListener("mouseleave", () => {
        // Pause and reset
        video.pause();
        video.currentTime = 0;

        // Remove controls
        video.removeAttribute("controls");
    });
});


const tabs = document.querySelectorAll(".tab-btn");
const content = document.getElementById("tab-content");

const tabData = {
    1: `<img src="./assets/images/business/swipe-12.webp" alt="Identify">`,
    2: `<img src="./assets/images/business/swipe-13.webp" alt="Identify">`,
    3: `<img src="./assets/images/business/swipe-14.webp" alt="Identify">`
};

// Initialize
let activeTab = 1;
content.innerHTML = tabData[1];

// Add ACTIVE class
function setActiveTab(btn) {
    tabs.forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
}

function showTabContent(id) {
    animate(content, { opacity: 0, x: -10 }, { duration: 0.2 }).finished.then(() => {
        content.innerHTML = tabData[id];
        animate(content, { opacity: 1, x: 0 }, { duration: 0.3 });
    });
}

// Click handler
tabs.forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.tab;
        if (id == activeTab) return;

        activeTab = id;
        setActiveTab(btn);
        showTabContent(id);
    });
});

// Set default active tab visually
setActiveTab(tabs[0]);