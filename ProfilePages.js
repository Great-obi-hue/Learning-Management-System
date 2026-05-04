document.addEventListener('DOMContentLoaded', () => {
    // ---- AUTH GUARD ----
    const savedUser = JSON.parse(localStorage.getItem('userData'));
    if (!savedUser) {
        window.location.href = 'HomeScreen.html';
        return;
    }

    // ---- MERGE WITH EXTENDED PROFILE (if stored) ----
    const profileKey = 'profileData';
    let profile = JSON.parse(localStorage.getItem(profileKey)) || {};
    // Default fields from original user data
    if (!profile.firstName) profile.firstName = savedUser.firstName || '';
    if (!profile.lastName) profile.lastName = savedUser.lastName || '';
    if (!profile.headline) profile.headline = '';
    if (!profile.description) profile.description = '';
    if (!profile.language) profile.language = '';
    if (!profile.image) profile.image = '';   // base64
    if (!profile.website) profile.website = '';
    if (!profile.twitter) profile.twitter = '';
    if (!profile.linkedin) profile.linkedin = '';
    if (!profile.youtube) profile.youtube = '';
    if (!profile.facebook) profile.facebook = '';

    // Helper to save profile
    function saveProfile() {
        localStorage.setItem(profileKey, JSON.stringify(profile));
    }

    // ---- DOM ELEMENTS ----
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const headlineInput = document.getElementById('headline');
    const descriptionInput = document.getElementById('description');
    const languageSelect = document.getElementById('language');
    const profilePicPreview = document.getElementById('profilePicPreview');
    const placeholderAvatar = document.getElementById('placeholderAvatar');
    const imageUpload = document.getElementById('imageUpload');
    const changeImageBtn = document.getElementById('changeImageBtn');
    const websiteInput = document.getElementById('website');
    const twitterInput = document.getElementById('twitter');
    const linkedinInput = document.getElementById('linkedin');
    const youtubeInput = document.getElementById('youtube');
    const facebookInput = document.getElementById('facebook');
    const profileForm = document.getElementById('profileForm');

    // ---- POPULATE FORM ----
    function populateForm() {
        firstNameInput.value = profile.firstName;
        lastNameInput.value = profile.lastName;
        headlineInput.value = profile.headline;
        descriptionInput.value = profile.description;
        languageSelect.value = profile.language;
        websiteInput.value = profile.website;
        twitterInput.value = profile.twitter;
        linkedinInput.value = profile.linkedin;
        youtubeInput.value = profile.youtube;
        facebookInput.value = profile.facebook;

        if (profile.image) {
            profilePicPreview.src = profile.image;
            profilePicPreview.style.display = 'block';
            placeholderAvatar.style.display = 'none';
        } else {
            profilePicPreview.style.display = 'none';
            placeholderAvatar.style.display = 'flex';
            placeholderAvatar.textContent = (profile.firstName?.[0] || '') + (profile.lastName?.[0] || '') || 'U';
        }
    }
    populateForm();

    // ---- IMAGE UPLOAD ----
    changeImageBtn.addEventListener('click', () => imageUpload.click());
    imageUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            profile.image = ev.target.result;
            profilePicPreview.src = ev.target.result;
            profilePicPreview.style.display = 'block';
            placeholderAvatar.style.display = 'none';
            saveProfile();
        };
        reader.readAsDataURL(file);
    });

    // ---- SAVE PROFILE ----
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        profile.firstName = firstNameInput.value.trim();
        profile.lastName = lastNameInput.value.trim();
        profile.headline = headlineInput.value.trim();
        profile.description = descriptionInput.value.trim();
        profile.language = languageSelect.value;
        profile.website = websiteInput.value.trim();
        profile.twitter = twitterInput.value.trim();
        profile.linkedin = linkedinInput.value.trim();
        profile.youtube = youtubeInput.value.trim();
        profile.facebook = facebookInput.value.trim();

        // Update localStorage userData also (for dashboard greeting)
        if (profile.firstName) savedUser.firstName = profile.firstName;
        if (profile.lastName) savedUser.lastName = profile.lastName;
        localStorage.setItem('userData', JSON.stringify(savedUser));

        saveProfile();
        alert('Profile updated successfully!');
        populateForm(); // refresh preview initials if name changed
    });

    // ---- SIDEBAR & MODALS ----
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const modals = {
        courses: document.getElementById('coursesModal'),
        teachers: document.getElementById('teachersModal'),
        message: document.getElementById('messageModal'),
        reviews: document.getElementById('reviewsModal'),
    };
    const profileSection = document.getElementById('profileSection');

    function closeAllModals() {
        Object.values(modals).forEach(m => m.classList.remove('show'));
    }

    function openModal(modalId) {
        closeAllModals();
        modals[modalId].classList.add('show');
        // Load dynamic content if needed
        if (modalId === 'courses') renderAllCourses();
        if (modalId === 'teachers') renderTeachers();
        if (modalId === 'message') initMessageModal();
        if (modalId === 'reviews') renderReviews();
    }

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const page = item.dataset.page;

            if (page === 'profile') {
                closeAllModals();
                profileSection.classList.add('active');
            } else {
                profileSection.classList.remove('active');
                openModal(page);
            }
        });
    });

    // Close modals via button or overlay
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.close;
            modals[modalId].classList.remove('show');
            // If closing a modal, reset sidebar to profile
            sidebarItems.forEach(i => i.classList.remove('active'));
            document.querySelector('.sidebar-item[data-page="profile"]').classList.add('active');
            profileSection.classList.add('active');
        });
    });
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.classList.remove('show');
            sidebarItems.forEach(i => i.classList.remove('active'));
            document.querySelector('.sidebar-item[data-page="profile"]').classList.add('active');
            profileSection.classList.add('active');
        }
    });

    // ---- DYNAMIC CONTENT RENDERERS ----

    function renderAllCourses() {
        const grid = document.getElementById('allCoursesGrid');
        if (grid.children.length > 0) return; // already rendered
        const courses = [
            { img: 'Images/Rectangle 1080.png', title: "Beginner's Guide to Design", instructor: 'Ronalds Richard', price: '$149.9' },
            { img: 'Images/marketing-photo.jpg', title: "Marketing Essentials", instructor: 'Daniel Cornell', price: '$150.9' },
            { img: 'Images/development-photo.jpg', title: 'Web Development Bootcamp', instructor: 'Divine Stalone', price: '$145.9' },
            { img: 'Images/physics-photo.jpg', title: 'Physics for Beginners', instructor: 'Great Crystal', price: '$156.9' },
            { img: 'Images/Rectangle 1080.png', title: 'Advanced Design', instructor: 'Ronalds Richard', price: '$199.9' },
            { img: 'Images/CourseCard Imgs/download (1).jpg', title: 'Complete Python', instructor: 'Jose Portilla', price: '$129.9' },
        ];
        courses.forEach(c => {
            grid.innerHTML += `
                <div class="course-card">
                    <img src="${c.img}" alt="${c.title}">
                    <h4>${c.title}</h4>
                    <p>${c.instructor}</p>
                    <p><strong>${c.price}</strong></p>
                </div>`;
        });
    }

    function renderTeachers() {
        const list = document.getElementById('teachersList');
        if (list.children.length > 0) return;
        const teachers = [
            { img: 'Images/Rectangle 1136.png', name: 'Ronald Richards', role: 'UI/UX Designer' },
            { img: 'Images/Dev-Mr.webp', name: 'Divine Stalone', role: 'Web Developer' },
            { img: 'Images/marketer-p.jpg', name: 'Daniel Cornell', role: 'Marketing Specialist' },
            { img: 'Images/Mr physics.webp', name: 'Great Crystal', role: 'Physics Professor' },
        ];
        teachers.forEach(t => {
            const card = document.createElement('div');
            card.className = 'teacher-card';
            card.innerHTML = `
                <img src="${t.img}" alt="${t.name}">
                <div class="teacher-info">
                    <h4>${t.name}</h4>
                    <p>${t.role}</p>
                </div>
                <button class="btn-send-message" data-teacher="${t.name}">Send Message</button>`;
            list.appendChild(card);
        });
        // Add send message listeners
        document.querySelectorAll('.btn-send-message').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const teacherName = e.target.dataset.teacher;
                // Close teachers modal, open message modal with teacher pre-selected
                modals.teachers.classList.remove('show');
                openModal('message');
                // Simulate selecting that contact
                setTimeout(() => {
                    const contactItems = document.querySelectorAll('.contact-item');
                    contactItems.forEach(item => {
                        if (item.textContent.includes(teacherName)) {
                            item.click();
                        }
                    });
                }, 100);
            });
        });
    }

    // ---- MESSAGING ----
    let currentConversation = null;
    const conversations = JSON.parse(localStorage.getItem('chatConversations')) || {};

    function saveConversations() {
        localStorage.setItem('chatConversations', JSON.stringify(conversations));
    }

    function initMessageModal() {
        const contactList = document.getElementById('contactList');
        contactList.innerHTML = '';
        const contacts = [
            { name: 'Ronald Richards', type: 'teacher' },
            { name: 'Divine Stalone', type: 'teacher' },
            { name: 'Daniel Cornell', type: 'teacher' },
            { name: 'Great Crystal', type: 'teacher' },
            { name: 'Jane Doe (Student)', type: 'student' },
            { name: 'Alex Smith (Student)', type: 'student' },
        ];
        contacts.forEach(c => {
            const div = document.createElement('div');
            div.className = 'contact-item';
            div.textContent = c.name;
            div.addEventListener('click', () => {
                document.querySelectorAll('.contact-item').forEach(el => el.classList.remove('active'));
                div.classList.add('active');
                currentConversation = c.name;
                displayConversation(c.name);
            });
            contactList.appendChild(div);
        });
        // Reset chat area
        document.getElementById('chatMessages').innerHTML = '';
        document.getElementById('chatInputRow').style.display = 'none';
        document.querySelector('.chat-placeholder').style.display = 'block';
    }

    function displayConversation(name) {
        const chatMessages = document.getElementById('chatMessages');
        const chatInputRow = document.getElementById('chatInputRow');
        const placeholder = document.querySelector('.chat-placeholder');
        placeholder.style.display = 'none';
        chatInputRow.style.display = 'flex';
        chatMessages.innerHTML = '';

        const msgs = conversations[name] || [];
        msgs.forEach(msg => {
            const bubble = document.createElement('div');
            bubble.className = `message-bubble ${msg.self ? 'self' : ''}`;
            bubble.textContent = msg.text;
            chatMessages.appendChild(bubble);
        });
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    document.getElementById('sendMessageBtn').addEventListener('click', () => {
        const input = document.getElementById('messageInput');
        const text = input.value.trim();
        if (!text || !currentConversation) return;
        if (!conversations[currentConversation]) conversations[currentConversation] = [];
        conversations[currentConversation].push({ text, self: true });
        saveConversations();
        displayConversation(currentConversation);
        input.value = '';
        // Simulate reply after 1s (optional)
        setTimeout(() => {
            conversations[currentConversation].push({ text: 'Thanks for your message!', self: false });
            saveConversations();
            displayConversation(currentConversation);
        }, 1000);
    });

    // ---- REVIEWS ----
    function renderReviews() {
        const list = document.getElementById('reviewsList');
        if (list.children.length > 0) return;
        const reviews = [
            { reviewer: 'Emily R.', course: 'Design Basics', rating: 5, text: 'Excellent course! Very detailed and well-structured.' },
            { reviewer: 'Michael K.', course: 'Marketing 101', rating: 4, text: 'Good content, but could use more real-world examples.' },
            { reviewer: 'Sarah L.', course: 'Web Development', rating: 5, text: 'Loved the hands-on projects. Highly recommended!' },
            { reviewer: 'David T.', course: 'Physics Fundamentals', rating: 3, text: 'Decent overview, but some topics need deeper explanation.' },
        ];
        reviews.forEach(r => {
            list.innerHTML += `
                <div class="review-card">
                    <div class="review-header">
                        <span class="reviewer-name">${r.reviewer}</span>
                        <span class="stars">${'★'.repeat(r.star)}${'☆'.repeat(5-r.star)}</span>
                    </div>
                    <p class="review-text">${r.text}</p>
                    <p class="review-course">Course: ${r.course}</p>
                </div>`;
        });
    }

    // ---- LOGOUT ----
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('userData');
        alert('You have been logged out.');
        window.location.href = 'HomeScreen.html';
    });

    // ---- PROFILE DROPDOWN TOGGLE ----
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
});