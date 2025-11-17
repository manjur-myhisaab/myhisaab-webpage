
const { animate, scroll, inView, stagger } = Motion



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