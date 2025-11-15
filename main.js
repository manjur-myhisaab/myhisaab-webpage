
const { animate, scroll, inView, stagger } = Motion
animate("#logo",
    { scale: [0.6, 1.2, 1] },
    { ease: "circInOut", duration: 1 }
);
animate("#book-a-demo-btn",
    { scale: [0.6, 1.2, 1] },
    { ease: "circInOut", duration: 1 }
);
animate(".hero h1",
    { x: [50, 0], opacity: [0, 1] },
    { duration: 1, ease: "circInOut" }
);
animate(".hero h2 #one",
    { y: [50, 0], opacity: [0, 1], scaleY: [0, 1] },
    { duration: 1, ease: "circInOut" }
);
animate(".hero h2 #two",
    { y: [50, 0], opacity: [0, 1], scaleY: [0, 1] },
    { duration: 1.5, ease: "circInOut" }
);
animate(".hero a",
    { scale: [0.5, 1], opacity: [0, 1] },
    { duration: 1, ease: "circInOut" }
);
animate("#scroll-track",
    { y: [100, 0], opacity: [0, 1] },
    { delay: 0.8, duration: 2, ease: "circInOut" }
);

inView(".clients-logo-slider", (target) => {
    animate(
        target,
        { opacity: [0, 1], y: [50, 0] },
        { delay: 0.5, duration: 1, ease: "circInOut" }
    );
});


inView(".empower-business", () => {
    animate(
        ".empower-business h2",
        { opacity: [0, 1], y: [50, 0] },
        { duration: 1, ease: "circInOut" }
    );
    animate(
        ".empower-business h3",
        { opacity: [0, 1], y: [50, 0] },
        { delay: 0.5, duration: 1, ease: "circInOut" }
    );
    animate(
        "#tab-content",
        { opacity: [0, 1], y: [50, 0] },
        { delay: 1.5, duration: 1, ease: "circInOut" }
    );
})

inView("#tab-buttons", () => {
    animate("#tab-buttons button",
        { opacity: [0, 1], y: [50, 0] },
        { delay: stagger(0.2), duration: 1, ease: "circInOut" }
    );
})


inView(".engagement-banner", () => {
    animate(".engagement-banner h2",
        { opacity: [0, 1], y: [50, 0] },
        { delay: stagger(0.2), duration: 1, ease: "circInOut" }
    );
    animate(".engagement-banner a",
        { opacity: [0, 1], scale: [0.5, 1] },
        { delay: 1, duration: 1, ease: "circInOut" }
    );
    animate(".engagement-banner img",
        { opacity: [0, 1], y: [50, 0] },
        { delay: 1.5, duration: 1, ease: "circInOut" }
    );
})

inView(".business-performances", () => {
    animate(".business-performances h2",
        { opacity: [0, 1], y: [50, 0] },
        { duration: 1, ease: "circInOut" }
    );
    animate(".business-performances h3",
        { opacity: [0, 1], y: [50, 0] },
        { delay: 0.5, duration: 1, ease: "circInOut" }
    );
    animate(".business-performances .grid div",
        { opacity: [0, 1], y: [50, 0] },
        { delay: stagger(0.3), duration: 1, ease: "circInOut" }
    );
});

inView(".business-performances #one", () => {
    animate(".business-performances #one img",
        { opacity: [0, 1], x: [-50, 0] },
        { duration: 1, ease: "circInOut" }
    );
});

inView(".business-performances #two", () => {
    animate(".business-performances #two img",
        { opacity: [0, 1], x: [50, 0] },
        { duration: 1, ease: "circInOut" }
    );
});

inView(".business-performances #three", () => {
    animate(".business-performances #three img",
        { opacity: [0, 1], x: [-50, 0] },
        { duration: 1, ease: "circInOut" }
    );
});

inView(".price-plans", () => {
    animate(".price-plans h2",
        { opacity: [0, 1], y: [50, 0] },
        { duration: 1, ease: "circInOut" }
    );

});

inView(".price-plan-cards", () => {
    animate(".price-plan-cards > div",
        { opacity: [0, 1], y: [50, 0] },
        { delay: stagger(0.2), duration: 1, ease: "circInOut" }
    );
});

inView(".achieve", () => {
    animate(".achieve img",
        { opacity: [0, 1], y: [50, 0] },
        { delay: 1, duration: 1, ease: "circInOut" }
    );
    animate(".achieve h2",
        { opacity: [0, 1], y: [50, 0] },
        { delay: 1.5, duration: 1, ease: "circInOut" }
    );
    animate(".achieve a",
        { opacity: [0, 1], scale: [0.5, 1] },
        { delay: 2, duration: 1, ease: "circInOut" }
    );
});

inView(".download-install", () => {
    animate(".download-install .bg-white",
        { opacity: [0, 1], y: [50, 0] },
        { duration: 1, ease: "circInOut" }
    );
    animate(".download-install h2",
        { opacity: [0, 1], y: [50, 0] },
        { delay: 0.5, duration: 1, ease: "circInOut" }
    );
    animate(".download-install a",
        { opacity: [0, 1], scale: [0.5, 1] },
        { delay: 1, duration: 1, ease: "circInOut" }
    );
    animate(".download-install img",
        { opacity: [0, 1], y: [50, 0] },
        { delay: 1.5, duration: 1, ease: "circInOut" }
    );
});

inView("footer", () => {
    animate("footer",
        { opacity: [0, 1], y: [50, 0] },
        { delay: 1 ,duration: 1, ease: "circInOut" }
    );
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