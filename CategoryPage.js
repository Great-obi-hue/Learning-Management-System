// ========== 36 COURSES (9 per page x 4 pages) ==========
const courses = [
    // Page 1 (Courses 1-9)
    { id: 1, title: "Beginner's Guide to Design", author: "Ronald Richards", price: 149.9, rating: 5, reviews: 1200, students: "22 Total Hours", lectures: "155 Lectures", level: "Beginner", image: "Images/CategoryPage Imgs/img 1.png", coursePage: "course-detail.html" },
    { id: 2, title: "UI/UX Design Masterclass", author: "Esther Howard", price: 129.9, rating: 5, reviews: 950, students: "18 Total Hours", lectures: "132 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (1).jpg", coursePage: "#" },
    { id: 3, title: "Advanced Web Design", author: "Cameron Williamson", price: 179.9, rating: 4, reviews: 850, students: "25 Total Hours", lectures: "210 Lectures", level: "Advanced", image: "Images/CourseCard Imgs/download (2).jpg", coursePage: "#" },
    { id: 4, title: "Graphic Design Essentials", author: "Jenny Wilson", price: 99.9, rating: 5, reviews: 1450, students: "15 Total Hours", lectures: "98 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (3).jpg", coursePage: "#" },
    { id: 5, title: "Adobe XD Complete Guide", author: "Kristin Watson", price: 159.9, rating: 5, reviews: 780, students: "20 Total Hours", lectures: "140 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (4).jpg", coursePage: "#" },
    { id: 6, title: "Mobile App Design", author: "Wade Warren", price: 139.9, rating: 4, reviews: 620, students: "19 Total Hours", lectures: "125 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (5).jpg", coursePage: "#" },
    { id: 7, title: "Figma Professional Course", author: "Jacob Jones", price: 189.9, rating: 5, reviews: 1320, students: "28 Total Hours", lectures: "220 Lectures", level: "Advanced", image: "Images/CourseCard Imgs/download (6).jpg", coursePage: "#" },
    { id: 8, title: "Creative Branding Design", author: "Leslie Alexander", price: 119.9, rating: 4, reviews: 540, students: "16 Total Hours", lectures: "110 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (7).jpg", coursePage: "#" },
    { id: 9, title: "Design Systems Mastery", author: "Savannah Nguyen", price: 199.9, rating: 5, reviews: 890, students: "30 Total Hours", lectures: "250 Lectures", level: "Expert", image: "Images/CourseCard Imgs/download (8).jpg", coursePage: "#" },
    
    // Page 2 (Courses 10-18)
    { id: 10, title: "Web Development Bootcamp", author: "John Smith", price: 299.9, rating: 5, reviews: 2100, students: "45 Total Hours", lectures: "380 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (9).jpg", coursePage: "#" },
    { id: 11, title: "React Complete Guide", author: "Sarah Johnson", price: 159.9, rating: 5, reviews: 1670, students: "28 Total Hours", lectures: "245 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (10).jpg", coursePage: "#" },
    { id: 12, title: "Python for Beginners", author: "Mike Ross", price: 89.9, rating: 4, reviews: 3420, students: "32 Total Hours", lectures: "280 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (11).jpg", coursePage: "#" },
    { id: 13, title: "Data Science Masterclass", author: "Emily Chen", price: 249.9, rating: 5, reviews: 980, students: "40 Total Hours", lectures: "350 Lectures", level: "Advanced", image: "Images/CourseCard Imgs/download (12).jpg", coursePage: "#" },
    { id: 14, title: "JavaScript Deep Dive", author: "David Kim", price: 129.9, rating: 4, reviews: 1560, students: "22 Total Hours", lectures: "190 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (13).jpg", coursePage: "#" },
    { id: 15, title: "Node.js API Development", author: "Lisa Wong", price: 149.9, rating: 5, reviews: 890, students: "18 Total Hours", lectures: "145 Lectures", level: "Advanced", image: "Images/CourseCard Imgs/download (14).jpg", coursePage: "#" },
    { id: 16, title: "Tailwind CSS Mastery", author: "Tom Harris", price: 79.9, rating: 5, reviews: 2340, students: "12 Total Hours", lectures: "88 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (15).jpg", coursePage: "#" },
    { id: 17, title: "TypeScript Essentials", author: "Anna Lee", price: 99.9, rating: 4, reviews: 1120, students: "15 Total Hours", lectures: "120 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (16).jpg", coursePage: "#" },
    { id: 18, title: "Next.js Full Stack", author: "Chris Evans", price: 179.9, rating: 5, reviews: 760, students: "25 Total Hours", lectures: "210 Lectures", level: "Advanced", image: "Images/CourseCard Imgs/download (17).jpg", coursePage: "#" },
    
    // Page 3 (Courses 19-27)
    { id: 19, title: "Digital Marketing Pro", author: "Maria Garcia", price: 199.9, rating: 5, reviews: 1850, students: "35 Total Hours", lectures: "290 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (18).jpg", coursePage: "#" },
    { id: 20, title: "SEO Optimization", author: "James Wilson", price: 89.9, rating: 4, reviews: 1430, students: "14 Total Hours", lectures: "95 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (19).jpg", coursePage: "#" },
    { id: 21, title: "Social Media Strategy", author: "Nina Patel", price: 109.9, rating: 5, reviews: 2120, students: "16 Total Hours", lectures: "125 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (20).jpg", coursePage: "#" },
    { id: 22, title: "Content Writing Mastery", author: "Oliver Brown", price: 69.9, rating: 4, reviews: 980, students: "10 Total Hours", lectures: "72 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (21).jpg", coursePage: "#" },
    { id: 23, title: "Email Marketing Bootcamp", author: "Sophia Taylor", price: 79.9, rating: 5, reviews: 1450, students: "12 Total Hours", lectures: "88 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (22).jpg", coursePage: "#" },
    { id: 24, title: "Analytics & Data Tools", author: "Liam Martinez", price: 149.9, rating: 4, reviews: 670, students: "20 Total Hours", lectures: "168 Lectures", level: "Advanced", image: "Images/CourseCard Imgs/download (23).jpg", coursePage: "#" },
    { id: 25, title: "Brand Strategy 101", author: "Emma White", price: 129.9, rating: 5, reviews: 890, students: "18 Total Hours", lectures: "142 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (24).jpg", coursePage: "#" },
    { id: 26, title: "Copywriting Secrets", author: "Noah Davis", price: 84.9, rating: 5, reviews: 2100, students: "11 Total Hours", lectures: "78 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (25).jpg", coursePage: "#" },
    { id: 27, title: "Marketing Automation", author: "Isabella Clark", price: 169.9, rating: 4, reviews: 540, students: "22 Total Hours", lectures: "185 Lectures", level: "Advanced", image: "Images/CourseCard Imgs/download (26).jpg", coursePage: "#" },
    
    // Page 4 (Courses 28-36)
    { id: 28, title: "Photography Fundamentals", author: "Lucas Rodriguez", price: 119.9, rating: 5, reviews: 2340, students: "20 Total Hours", lectures: "156 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (27).jpg", coursePage: "#" },
    { id: 29, title: "Video Editing Pro", author: "Mia Lewis", price: 159.9, rating: 5, reviews: 1870, students: "24 Total Hours", lectures: "198 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (28).jpg", coursePage: "#" },
    { id: 30, title: "Adobe Premiere Mastery", author: "Ethan Walker", price: 179.9, rating: 4, reviews: 1250, students: "28 Total Hours", lectures: "234 Lectures", level: "Advanced", image: "Images/CourseCard Imgs/download (29).jpg", coursePage: "#" },
    { id: 31, title: "After Effects Animation", author: "Amelia Hall", price: 149.9, rating: 5, reviews: 980, students: "22 Total Hours", lectures: "178 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (30).jpg", coursePage: "#" },
    { id: 32, title: "Lightroom Editing", author: "Benjamin Allen", price: 69.9, rating: 4, reviews: 3120, students: "10 Total Hours", lectures: "65 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (31).jpg", coursePage: "#" },
    { id: 33, title: "Cinematography Basics", author: "Charlotte Young", price: 139.9, rating: 5, reviews: 760, students: "18 Total Hours", lectures: "145 Lectures", level: "Intermediate", image: "Images/CourseCard Imgs/download (32).jpg", coursePage: "#" },
    { id: 34, title: "Drone Photography", author: "Daniel King", price: 189.9, rating: 4, reviews: 540, students: "15 Total Hours", lectures: "112 Lectures", level: "Advanced", image: "Images/CourseCard Imgs/download (33).jpg", coursePage: "#" },
    { id: 35, title: "Portrait Photography", author: "Victoria Scott", price: 99.9, rating: 5, reviews: 1890, students: "14 Total Hours", lectures: "98 Lectures", level: "Beginner", image: "Images/CourseCard Imgs/download (34).jpg", coursePage: "#" },
    { id: 36, title: "Wedding Photography", author: "Henry Adams", price: 209.9, rating: 5, reviews: 650, students: "26 Total Hours", lectures: "205 Lectures", level: "Advanced", image: "Images/CourseCard Imgs/download (35).jpg", coursePage: "#" }
];

// ========== POPULAR MENTORS DATA ==========
const mentors = [
    { id: 1, name: "Ronald Richards", title: "UI/UX Designer", rating: 4.9, students: 2400, image: "Images/CategoryPage Imgs/img 2.png", mentorPage: "MentorPage.html" },
    { id: 2, name: "Donald Leechards", title: "Web Developer", rating: 4.8, students: 2400, image: "Images/CategoryPage Imgs/download.jpg", mentorPage: "#" },
    { id: 3, name: "Ronaldo Richie", title: "Data Analyst", rating: 4.6, students: 2300, image: "Images/CategoryPage Imgs/download(2).jpg", mentorPage: "#" },
    { id: 4, name: "Ronaldino Richman", title: "User Experience Designer", rating: 4.7, students: 2400, image: "Images/CategoryPage Imgs/images.jpg", mentorPage: "#" },
    { id: 5, name: "Ronaldin Ricardo", title: "Robotics Engineer", rating: 4.5, students: 2500, image: "Images/CategoryPage Imgs/images (1).jpg", mentorPage: "#" }
];

// Carousel uses the same courses
const carouselCourses = [...courses];

const coursesGrid = document.getElementById("coursesGrid");
const mentorsGrid = document.getElementById("mentorsGrid");
const carouselTrack = document.getElementById("carouselTrackCustom");
const sortSelect = document.getElementById("sortCourses");

function generateStars(rating) {
    let stars = "";
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Create mentor card (first one clickable to MentorPage.html)
function createMentorCard(mentor) {
    const isFirstMentor = mentor.id === 1;
    const clickableUrl = isFirstMentor && mentor.mentorPage && mentor.mentorPage !== "#" 
        ? mentor.mentorPage 
        : null;
    
    if (clickableUrl) {
        return `
            <a href="${clickableUrl}" class="mentor-card-link" style="text-decoration: none; color: inherit; display: block;">
                <div class="mentor-card" data-id="${mentor.id}">
                    <img src="${mentor.image}" alt="${mentor.name}" class="mentor-image" onerror="this.src='https://placehold.co/120x120/e2e8f0/64748b?text=Mentor'">
                    <h3 class="mentor-name">${mentor.name}</h3>
                    <p class="mentor-title">${mentor.title}</p>
                    <div class="mentor-rating">
                        ${generateStars(mentor.rating)}
                        <span>${mentor.rating}</span>
                    </div>
                    <p class="mentor-students">${mentor.students.toLocaleString()} Students</p>
                </div>
            </a>
        `;
    }
    
    return `
        <div class="mentor-card" data-id="${mentor.id}">
            <img src="${mentor.image}" alt="${mentor.name}" class="mentor-image" onerror="this.src='https://placehold.co/120x120/e2e8f0/64748b?text=Mentor'">
            <h3 class="mentor-name">${mentor.name}</h3>
            <p class="mentor-title">${mentor.title}</p>
            <div class="mentor-rating">
                ${generateStars(mentor.rating)}
                <span>${mentor.rating}</span>
            </div>
            <p class="mentor-students">${mentor.students.toLocaleString()} Students</p>
        </div>
    `;
}

// Render mentors
function renderMentors() {
    if (!mentorsGrid) return;
    mentorsGrid.innerHTML = mentors
        .map(createMentorCard)
        .join("");
    
    // Add click handlers for non-linked mentor cards (those without the anchor wrapper)
    document.querySelectorAll('.mentor-card:not(.mentor-card-link .mentor-card)').forEach(card => {
        const id = card.getAttribute('data-id');
        if (id && id !== '1') {
            card.addEventListener('click', () => {
                const found = mentors.find(m => m.id == id);
                if (found) {
                    alert(`👨‍🏫 Mentor: ${found.name}\n📚 ${found.title}\n⭐ ${found.rating} · ${found.students.toLocaleString()} students`);
                }
            });
        }
    });
}

// Course card creator
function createCourseCard(course) {
    const isFirstCourse = course.id === 1;
    const clickableUrl = isFirstCourse && course.coursePage && course.coursePage !== "#" 
        ? course.coursePage 
        : null;
    
    if (clickableUrl) {
        return `
            <a href="${clickableUrl}" class="course-card-link" style="text-decoration: none; color: inherit; display: block;">
                <article class="course-card">
                    <img src="${course.image}" alt="${course.title}" class="course-image" onerror="this.src='https://placehold.co/400x210/e2e8f0/64748b?text=Course+Image'">
                    <div class="course-content">
                        <h3 class="course-title">${course.title}</h3>
                        <p class="course-author">By ${course.author}</p>
                        <div class="course-rating">
                            ${generateStars(course.rating)}
                            <span>(${course.reviews} Ratings)</span>
                        </div>
                        <p class="course-meta">
                            ${course.students} · ${course.lectures} · ${course.level}
                        </p>
                        <h4 class="course-price">$${course.price}</h4>
                    </div>
                </article>
            </a>
        `;
    }
    
    return `
        <article class="course-card" data-id="${course.id}">
            <img src="${course.image}" alt="${course.title}" class="course-image" onerror="this.src='https://placehold.co/400x210/e2e8f0/64748b?text=Course+Image'">
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-author">By ${course.author}</p>
                <div class="course-rating">
                    ${generateStars(course.rating)}
                    <span>(${course.reviews} Ratings)</span>
                </div>
                <p class="course-meta">
                    ${course.students} · ${course.lectures} · ${course.level}
                </p>
                <h4 class="course-price">$${course.price}</h4>
            </div>
        </article>
    `;
}

// Carousel card creator
function createCarouselCard(course) {
    const isFirstCourse = course.id === 1;
    const clickableUrl = isFirstCourse && course.coursePage && course.coursePage !== "#" 
        ? course.coursePage 
        : null;
    
    if (clickableUrl) {
        return `
            <a href="${clickableUrl}" class="carousel-card-link" style="text-decoration: none; color: inherit; display: block;">
                <div class="carousel-card">
                    <img src="${course.image}" alt="${course.title}" class="carousel-card-image" onerror="this.src='https://placehold.co/400x180/e2e8f0/64748b?text=Course'">
                    <div class="carousel-card-content">
                        <h4 class="carousel-card-title">${course.title}</h4>
                        <p class="carousel-card-author">By ${course.author}</p>
                        <div class="carousel-card-rating">
                            ${generateStars(course.rating)}
                            <span>(${course.reviews} Ratings)</span>
                        </div>
                        <p class="carousel-card-meta">
                            ${course.students} · ${course.lectures} · ${course.level}
                        </p>
                        <div class="carousel-card-price">$${course.price}</div>
                    </div>
                </div>
            </a>
        `;
    }
    
    return `
        <div class="carousel-card" data-id="${course.id}">
            <img src="${course.image}" alt="${course.title}" class="carousel-card-image" onerror="this.src='https://placehold.co/400x180/e2e8f0/64748b?text=Course'">
            <div class="carousel-card-content">
                <h4 class="carousel-card-title">${course.title}</h4>
                <p class="carousel-card-author">By ${course.author}</p>
                <div class="carousel-card-rating">
                    ${generateStars(course.rating)}
                    <span>(${course.reviews} Ratings)</span>
                </div>
                <p class="carousel-card-meta">
                    ${course.students} · ${course.lectures} · ${course.level}
                </p>
                <div class="carousel-card-price">$${course.price}</div>
            </div>
        </div>
    `;
}

// ========== NUMBERED PAGINATION ==========
const COURSES_PER_PAGE = 9;
const TOTAL_PAGES = 4;
let currentPage = 1;
let currentSortedCourses = [...courses];

function renderCourses(courseList) {
    coursesGrid.innerHTML = courseList
        .map(createCourseCard)
        .join("");
    
    document.querySelectorAll('.course-card:not(.course-card-link .course-card)').forEach(card => {
        const id = card.getAttribute('data-id');
        if (id && id !== '1') {
            card.addEventListener('click', () => {
                const found = courses.find(c => c.id == id);
                if (found) {
                    alert(`📖 Enrolling: "${found.title}"\n⏱️ ${found.students} · ${found.lectures}\n💰 $${found.price}`);
                }
            });
        }
    });
}

function renderNumberedPagination() {
    const paginationContainer = document.getElementById("numberedPagination");
    if (!paginationContainer) return;
    
    let html = `
        <button class="pagination-arrow" id="prevPageBtn" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    for (let i = 1; i <= TOTAL_PAGES; i++) {
        html += `
            <button class="pagination-number ${i === currentPage ? 'active' : ''}" data-page="${i}">
                ${i}
            </button>
        `;
    }
    
    html += `
        <button class="pagination-arrow" id="nextPageBtn" ${currentPage === TOTAL_PAGES ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    paginationContainer.innerHTML = html;
    
    document.querySelectorAll("[data-page]").forEach(button => {
        button.addEventListener("click", () => {
            const page = Number(button.dataset.page);
            if (page !== currentPage) {
                currentPage = page;
                renderCurrentPage();
            }
        });
    });
    
    const prevBtn = document.getElementById("prevPageBtn");
    const nextBtn = document.getElementById("nextPageBtn");
    
    if (prevBtn && currentPage > 1) {
        prevBtn.addEventListener("click", () => {
            currentPage--;
            renderCurrentPage();
        });
    }
    
    if (nextBtn && currentPage < TOTAL_PAGES) {
        nextBtn.addEventListener("click", () => {
            currentPage++;
            renderCurrentPage();
        });
    }
}

function renderCurrentPage() {
    const start = (currentPage - 1) * COURSES_PER_PAGE;
    const end = start + COURSES_PER_PAGE;
    const paginatedCourses = currentSortedCourses.slice(start, end);
    
    renderCourses(paginatedCourses);
    renderNumberedPagination();
    
    const coursesGridElement = document.getElementById("coursesGrid");
    if (coursesGridElement) {
        window.scrollTo({
            top: coursesGridElement.offsetTop - 100,
            behavior: "smooth"
        });
    }
}

function handleSortChange(value) {
    let sorted = [...courses];
    
    switch (value) {
        case "price-low":
            sorted.sort((a, b) => a.price - b.price);
            break;
        case "price-high":
            sorted.sort((a, b) => b.price - a.price);
            break;
        case "rating":
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        default:
            sorted = [...courses];
    }
    
    currentSortedCourses = sorted;
    currentPage = 1;
    renderCurrentPage();
}

if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
        handleSortChange(e.target.value);
    });
}

function renderCarousel() {
    if (!carouselTrack) return;
    carouselTrack.innerHTML = carouselCourses
        .map(createCarouselCard)
        .join("");
    
    document.querySelectorAll('.carousel-card:not(.carousel-card-link .carousel-card)').forEach(card => {
        const id = card.getAttribute('data-id');
        if (id && id !== '1') {
            card.addEventListener('click', () => {
                const found = courses.find(c => c.id == id);
                if (found) {
                    alert(`📖 Enrolling: "${found.title}"\n⏱️ ${found.students} · ${found.lectures}\n💰 $${found.price}`);
                }
            });
        }
    });
}

// ========== CAROUSEL FUNCTIONALITY ==========
let currentCarouselIndex = 0;
let carouselItemsToShow = 3;
let carouselCardWidth = 324;

function updateCarouselDimensions() {
    if (window.innerWidth <= 768) {
        carouselItemsToShow = 1;
        carouselCardWidth = 284;
    } else if (window.innerWidth <= 1024) {
        carouselItemsToShow = 2;
        carouselCardWidth = 304;
    } else {
        carouselItemsToShow = 3;
        carouselCardWidth = 324;
    }
}

function getMaxCarouselIndex() {
    return Math.max(0, carouselCourses.length - carouselItemsToShow);
}

function updateCarousel() {
    const maxIndex = getMaxCarouselIndex();
    if (currentCarouselIndex > maxIndex) currentCarouselIndex = maxIndex;
    if (currentCarouselIndex < 0) currentCarouselIndex = 0;
    
    const translateValue = currentCarouselIndex * carouselCardWidth;
    if (carouselTrack) {
        carouselTrack.style.transform = `translateX(-${translateValue}px)`;
    }
    updateCarouselDots();
}

function nextCarouselSlide() {
    const maxIndex = getMaxCarouselIndex();
    if (currentCarouselIndex < maxIndex) {
        currentCarouselIndex++;
        updateCarousel();
    } else if (currentCarouselIndex === maxIndex && maxIndex > 0) {
        currentCarouselIndex = 0;
        updateCarousel();
    }
}

function prevCarouselSlide() {
    if (currentCarouselIndex > 0) {
        currentCarouselIndex--;
        updateCarousel();
    } else if (currentCarouselIndex === 0 && carouselCourses.length > carouselItemsToShow) {
        currentCarouselIndex = getMaxCarouselIndex();
        updateCarousel();
    }
}

function goToCarouselSlide(index) {
    const maxIndex = getMaxCarouselIndex();
    if (index >= 0 && index <= maxIndex) {
        currentCarouselIndex = index;
        updateCarousel();
    }
}

function updateCarouselDots() {
    const dotsContainer = document.getElementById("carouselDots");
    if (!dotsContainer) return;
    
    const totalDots = getMaxCarouselIndex() + 1;
    if (totalDots <= 1) {
        dotsContainer.innerHTML = "";
        return;
    }
    
    let dotsHTML = "";
    for (let i = 0; i < totalDots; i++) {
        dotsHTML += `<div class="carousel-dot ${i === currentCarouselIndex ? 'active' : ''}" data-slide-index="${i}"></div>`;
    }
    dotsContainer.innerHTML = dotsHTML;
    
    document.querySelectorAll(".carousel-dot").forEach(dot => {
        dot.addEventListener("click", () => {
            const index = parseInt(dot.getAttribute("data-slide-index"));
            if (!isNaN(index)) goToCarouselSlide(index);
        });
    });
}

const nextBtn = document.getElementById("carouselNext");
const prevBtn = document.getElementById("carouselPrev");

if (nextBtn) nextBtn.addEventListener("click", nextCarouselSlide);
if (prevBtn) prevBtn.addEventListener("click", prevCarouselSlide);

window.addEventListener("resize", () => {
    updateCarouselDimensions();
    updateCarousel();
});

let autoCarouselInterval;
function startAutoCarousel() {
    if (autoCarouselInterval) clearInterval(autoCarouselInterval);
    autoCarouselInterval = setInterval(() => {
        if (carouselCourses.length > carouselItemsToShow) {
            const maxIndex = getMaxCarouselIndex();
            currentCarouselIndex = currentCarouselIndex >= maxIndex ? 0 : currentCarouselIndex + 1;
            updateCarousel();
        }
    }, 4000);
}

function stopAutoCarousel() {
    if (autoCarouselInterval) {
        clearInterval(autoCarouselInterval);
        autoCarouselInterval = null;
    }
}

const carouselContainer = document.querySelector(".custom-carousel");
if (carouselContainer) {
    carouselContainer.addEventListener("mouseenter", stopAutoCarousel);
    carouselContainer.addEventListener("mouseleave", startAutoCarousel);
}

// ========== INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", () => {
    const filterHeaders = document.querySelectorAll(".filter-header");
    
    filterHeaders.forEach(header => {
        header.style.cursor = "pointer";
        header.addEventListener("click", () => {
            const filterGroup = header.parentElement;
            const icon = header.querySelector("i");
            const items = Array.from(filterGroup.children)
                .filter(child => !child.classList.contains("filter-header"));
            const collapsed = filterGroup.classList.toggle("collapsed");
            items.forEach(item => {
                item.style.display = collapsed ? "none" : "";
            });
            icon.classList.toggle("fa-chevron-up");
            icon.classList.toggle("fa-chevron-down");
        });
    });
    
    updateCarouselDimensions();
    renderCurrentPage();
    renderMentors();
    renderCarousel();
    updateCarousel();
    startAutoCarousel();
});