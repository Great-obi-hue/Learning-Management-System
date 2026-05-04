document.addEventListener('DOMContentLoaded', () => {
    // Auth guard
    const savedUser = JSON.parse(localStorage.getItem('userData'));
    if (!savedUser) {
        window.location.href = 'HomeScreen.html';
        return;
    }

    // Courses data
    const courses = [
        { id: 1, title: "Beginner's Guide to Design", instructor: 'Ronalds Richard', price: 149.9, img: 'Images/Rectangle 1080.png' },
        { id: 2, title: 'Marketing Essentials', instructor: 'Daniel Cornell', price: 150.9, img: 'Images/marketing-photo.jpg' },
        { id: 3, title: 'Web Development Bootcamp', instructor: 'Divine Stalone', price: 145.9, img: 'Images/development-photo.jpg' },
        { id: 4, title: 'Physics for Beginners', instructor: 'Great Crystal', price: 156.9, img: 'Images/physics-photo.jpg' },
        { id: 5, title: 'Advanced UI/UX Design', instructor: 'Ronalds Richard', price: 199.9, img: 'Images/Rectangle 1080.png' },
        { id: 6, title: 'Complete Python Masterclass', instructor: 'Jose Portilla', price: 129.9, img: 'Images/CourseCard Imgs/download (1).jpg' },
        { id: 7, title: 'Data Science with R', instructor: 'Emily Chen', price: 139.9, img: 'Images/CourseCard Imgs/download (2).jpg' },
        { id: 8, title: 'React - The Complete Guide', instructor: 'Maximilian Schwarzmüller', price: 159.9, img: 'Images/CourseCard Imgs/download (3).jpg' },
    ];

    const grid = document.getElementById('coursesGrid');
    const cartBadge = document.getElementById('cartBadge');

    // Update cart badge
    function updateCartBadge() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartBadge.textContent = cart.length;
    }
    updateCartBadge();

    // Add to cart
    function addToCart(course) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({
            id: course.id,
            title: course.title,
            price: course.price,
            img: course.img
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartBadge();
        // Show temporary message
        const btn = document.querySelector(`.add-to-cart[data-id="${course.id}"]`);
        const msg = btn.nextElementSibling;
        msg.style.display = 'block';
        setTimeout(() => msg.style.display = 'none', 1500);
    }

    // Render courses
    function renderCourses() {
        grid.innerHTML = courses.map(course => `
            <div class="course-card">
                <img src="${course.img}" alt="${course.title}">
                <div class="course-info">
                    <h3>${course.title}</h3>
                    <p>${course.instructor}</p>
                    <p class="price">$${course.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-id="${course.id}">Add to Cart</button>
                    <span class="added-msg">Added!</span>
                </div>
            </div>
        `).join('');

        // Attach event listeners
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const course = courses.find(c => c.id === id);
                addToCart(course);
            });
        });
    }

    renderCourses();

    // Profile dropdown & logout
    const profileIconBtn = document.getElementById('profileIconBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    profileIconBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle('show');
    });
    document.addEventListener('click', (e) => {
        if (!profileIconBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.classList.remove('show');
        }
    });
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('userData');
        window.location.href = 'HomeScreen.html';
    });
});