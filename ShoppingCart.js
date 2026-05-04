document.addEventListener('DOMContentLoaded', () => {
    // Auth guard
    const savedUser = JSON.parse(localStorage.getItem('userData'));
    if (!savedUser) {
        window.location.href = 'HomeScreen.html';
        return;
    }

    const cartItemsContainer = document.getElementById('cartItems');
    const totalSpan = document.getElementById('totalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const cartBadge = document.getElementById('cartBadge');

    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartBadge() {
        cartBadge.textContent = cart.length;
    }

    function renderCart() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
            totalSpan.textContent = '$0.00';
            checkoutBtn.disabled = true;
        } else {
            cartItemsContainer.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="item-info">
                        <h3>${item.title}</h3>
                        <p class="price">$${item.price.toFixed(2)}</p>
                    </div>
                    <button class="remove-btn" data-index="${index}">
                        <i class="fas fa-trash-alt"></i> Remove
                    </button>
                </div>
            `).join('');
            checkoutBtn.disabled = false;

            // Calculate total
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            totalSpan.textContent = `$${total.toFixed(2)}`;

            // Attach remove handlers
            document.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const index = parseInt(btn.dataset.index);
                    cart.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartBadge();
                    renderCart();
                });
            });
        }
    }

    updateCartBadge();
    renderCart();

    // Checkout button – for now redirect to OrderComplete
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout!');
            window.location.href = 'OrderComplete.html';
        }
    });

    // Profile dropdown & logout (same as before)
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