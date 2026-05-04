document.addEventListener('DOMContentLoaded', function() {
    // ----- Sidebar Navigation (Profile / My Courses / Teachers) -----
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const coursesModal = document.getElementById('coursesModal');
    const teachersModal = document.getElementById('teachersModal');
    const closeCoursesBtn = document.getElementById('closeCoursesModal');
    const closeTeachersBtn = document.getElementById('closeTeachersModal');
    const profileSection = document.getElementById('profileSection');

    // Set "My Profile" as default active
    sidebarItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === 'profile') {
            item.classList.add('active');
        }
    });

    // Sidebar click handler
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.dataset.page;

            // Update active state
            sidebarItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            if (page === 'profile') {
                // Show profile main content, hide modals
                profileSection.classList.add('active');
                closeModal(coursesModal);
                closeModal(teachersModal);
            } else if (page === 'courses') {
                // Hide profile section, show courses modal
                profileSection.classList.remove('active');
                closeModal(teachersModal);
                openModal(coursesModal);
            } else if (page === 'teachers') {
                // Hide profile section, show teachers modal
                profileSection.classList.remove('active');
                closeModal(coursesModal);
                openModal(teachersModal);
            }
        });
    });

    // Modal close buttons
    if (closeCoursesBtn) {
        closeCoursesBtn.addEventListener('click', function() {
            closeModal(coursesModal);
            // Return to My Profile if modal closed
            resetToProfile();
        });
    }

    if (closeTeachersBtn) {
        closeTeachersBtn.addEventListener('click', function() {
            closeModal(teachersModal);
            resetToProfile();
        });
    }

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(e) {
        if (e.target === coursesModal) {
            closeModal(coursesModal);
            resetToProfile();
        }
        if (e.target === teachersModal) {
            closeModal(teachersModal);
            resetToProfile();
        }
    });

    function openModal(modal) {
        if (modal) modal.classList.add('show');
    }

    function closeModal(modal) {
        if (modal) modal.classList.remove('show');
    }

    function resetToProfile() {
        // Activate My Profile sidebar and show profile content
        sidebarItems.forEach(i => i.classList.remove('active'));
        const profileTab = document.querySelector('.sidebar-item[data-page="profile"]');
        if (profileTab) profileTab.classList.add('active');
        if (profileSection) profileSection.classList.add('active');
    }

    // ----- Profile Dropdown Toggle -----
    const profileIconBtn = document.getElementById('profileIconBtn');
    const profileDropdown = document.getElementById('profileDropdown');

    if (profileIconBtn && profileDropdown) {
        profileIconBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
            if (!profileIconBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.classList.remove('show');
            }
        });
    }

    // ----- (Optional) Change Photo Simulation -----
    const changePhotoBtn = document.querySelector('.change-photo-btn');
    if (changePhotoBtn) {
        changePhotoBtn.addEventListener('click', function() {
            alert('Feature coming soon: upload a new profile picture.');
        });
    }
});