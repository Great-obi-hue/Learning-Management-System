// ==================== AUTH GUARD ====================
const savedUser = JSON.parse(localStorage.getItem("userData"));
if (!savedUser) {
    window.location.href = "HomeScreen.html";
}

// Update cart badge
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const badge = document.getElementById('cartBadge');
    if (badge) badge.textContent = cart.length;
}
updateCartBadge();

// ==================== DISPLAY USERNAME ====================
const userGreeting = document.getElementById("userGreeting");
if (userGreeting && savedUser) {
    userGreeting.textContent = `Welcome back, ${savedUser.username || savedUser.firstName || 'User'}!`;
}

// ==================== MOBILE MENU TOGGLE ====================
const menuToggle = document.querySelector(".menu-toggle");
const navCenter = document.querySelector(".nav-center");
const navRight = document.querySelector(".nav-right");

menuToggle.addEventListener("click", () => {
    navCenter.classList.toggle("active");
    navRight.classList.toggle("active");
    menuToggle.textContent = menuToggle.textContent === "☰" ? "☰" : "☰";
});

// ==================== PROFILE DROPDOWN ====================
const profileIconBtn = document.getElementById("profileIconBtn");
const profileDropdown = document.getElementById("profileDropdown");

if (profileIconBtn && profileDropdown) {
    profileIconBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        profileDropdown.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
        if (!profileIconBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.classList.remove("show");
        }
    });
}

// ==================== LOGOUT ====================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("userData");
        alert("You have been logged out.");
        window.location.href = "HomeScreen.html";
    });
}

// ==================== COUNTER ANIMATION ====================
const counters = document.querySelectorAll(".count");
counters.forEach(counter => {
    counter.innerText = "0";
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText.replace("+", "");
        const increment = target / 100;
        if (current < target) {
            counter.innerText = Math.ceil(current + increment) + "+";
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target + "+";
        }
    };
    updateCount();
});

// ==================== INTERSECTION OBSERVER – FADE IN/UP ====================
const elements = document.querySelectorAll(".fade-in, .fade-up");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 150);
        }
    });
}, { threshold: 0.2 });
elements.forEach(el => observer.observe(el));

// ==================== INTERSECTION OBSERVER – ANIMATE FADE/RISE ====================
const animatedItems = document.querySelectorAll(".animate-fade, .animate-rise");
const newlook = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        } else {
            entry.target.classList.remove("is-visible");
        }
    });
}, { threshold: 0.2 });
animatedItems.forEach(item => newlook.observe(item));

// ==================== TESTIMONIAL SLIDER ====================
const track = document.querySelector(".testimonial-track");
const wrapper = document.querySelector(".testimonial-wrapper");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let index = 0;

function updateSlider() {
    const cards = track.children;
    if (!cards.length) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const cardWidth = cards[0].getBoundingClientRect().width + gap;
    const maxMove = track.scrollWidth - wrapper.clientWidth;
    const move = Math.min(index * cardWidth, maxMove);
    track.style.transform = `translateX(-${move}px)`;
}

if (nextBtn) nextBtn.onclick = () => { index++; updateSlider(); };
if (prevBtn) prevBtn.onclick = () => { index--; if (index < 0) index = 0; updateSlider(); };
window.onresize = () => { index = 0; updateSlider(); };
updateSlider();

// ==================== INTERSECTION OBSERVER – SLIDE LEFT/RIGHT ====================
const view = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, { threshold: 0.2 });
document.querySelectorAll(".slide-left, .slide-right").forEach(el => {
    view.observe(el);
});