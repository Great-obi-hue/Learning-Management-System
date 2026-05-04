const menuToggle = document.querySelector(".menu-toggle");
const navCenter = document.querySelector(".nav-center");
const navRight = document.querySelector(".nav-right");

menuToggle.addEventListener("click", () => {
    navCenter.classList.toggle("active");
    navRight.classList.toggle("active");

    menuToggle.textContent =
        menuToggle.textContent === "☰" ? "☰" : "☰";
});


const modal = document.getElementById("signupModal");
const page = document.getElementById("pageContent");
const openBtn = document.querySelector(".signup");

/* OPEN MODAL */
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    page.classList.add("blurred");

    // TOGGLE EFFECT for signup button
    openBtn.classList.toggle("active");
});

/* CLOSE WHEN CLICKING OUTSIDE MODAL */
modal.addEventListener("click", (e) => {
    // if user clicks the dark background (not the modal box)
    if (e.target === modal) {
        modal.style.display = "none";
        page.classList.remove("blurred");

        // remove toggle when modal closes
        openBtn.classList.remove("active");
    }
});

/* ================= CREATE ACCOUNT BUTTON ================= */
const createBtn = document.querySelector(".create-btn");

createBtn.addEventListener("click", function () {

    // button effect
    this.classList.toggle("active");

    const signupInputs = document.querySelectorAll("#signupModal input");

    const firstName = signupInputs[0].value.trim();
    const lastName = signupInputs[1].value.trim();
    const username = signupInputs[2].value.trim();
    const email = signupInputs[3].value.trim();
    const password = signupInputs[4].value.trim();
    const confirmPassword = signupInputs[5].value.trim();

    if (
        firstName === "" ||
        lastName === "" ||
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const userData = {
        firstName,
        lastName,
        username,
        email,
        password
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Account created successfully!");
            window.location.href = "HomeScreen.html";

});

const loginModal = document.getElementById("loginModal");
const pageContentLogin = document.getElementById("pageContent");
const loginBtnTrigger = document.querySelector(".login");

/* OPEN LOGIN MODAL */
loginBtnTrigger.addEventListener("click", () => {
    loginModal.style.display = "flex";
    pageContentLogin.classList.add("blurred");

    // TOGGLE EFFECT for login button
    loginBtnTrigger.classList.toggle("active");
});

/* CLOSE LOGIN MODAL WHEN CLICKING OUTSIDE */
loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
        pageContentLogin.classList.remove("blurred");

        // remove toggle state
        loginBtnTrigger.classList.remove("active");
    }
});


/* ================= LOGIN BUTTON ================= */
const loginSubmitBtn = document.querySelector(".login-btn");

loginSubmitBtn.addEventListener("click", function () {

    // button effect
    this.classList.toggle("active");

    const loginInputs = document.querySelectorAll("#loginModal input");

    const emailOrUsername = loginInputs[0].value.trim();
    const password = loginInputs[1].value.trim();

    const savedUser = JSON.parse(localStorage.getItem("userData"));

    if (!savedUser) {
        alert("No account found. Please sign up first.");
        return;
    }

    const validUser =
        emailOrUsername === savedUser.email ||
        emailOrUsername === savedUser.username;

    const validPassword =
        password === savedUser.password;

    if (validUser && validPassword) {
        alert("Login successful!");
        window.location.href = "HomeScreen.html";
    } else {
        alert("Invalid login details");
    }

});


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

const elements = document.querySelectorAll(".fade-in, .fade-up");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {

            // Add delay for cards (stagger effect)
            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 150);

        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));


const items = document.querySelectorAll(".fade-item");

const act = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // element is visible → animate in
            entry.target.classList.add("show");
        } else {
            // element is out of view → animate out
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.2 // triggers when 20% visible
});

items.forEach(item => act.observe(item));

const animatedItems = document.querySelectorAll('.animate-fade, .animate-rise');

const newlook = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }

    });
}, {
    threshold: 0.2
});

animatedItems.forEach(item => newlook.observe(item));

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

nextBtn.onclick = () => {
    index++;
    updateSlider();
};

prevBtn.onclick = () => {
    index--;
    if (index < 0) index = 0;
    updateSlider();
};

window.onresize = () => {
    index = 0;
    updateSlider();
};

updateSlider();

const view = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show"); // allows replay on scroll up
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".slide-left, .slide-right").forEach(el => {
    view.observe(el);
});