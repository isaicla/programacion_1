let cart = [];
let total = 0;
let products = [];

function renderProducts() {
    const container = document.getElementById('product-list');
    if (products.length === 0) {
        container.innerHTML = '<p class="empty-message">No hay productos. Agrega uno usando el formulario abaixo.</p>';
        return;
    }
    
    container.innerHTML = products.map((product, index) => `
        <div class="product-card">
            <div class="product-image">
                <img src="https://placehold.co/200x200/2e7d32/white?text=${encodeURIComponent(product.name)}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <div class="quantity-selector">
                    <button onclick="changeQty('qty-${index}', -1)">-</button>
                    <input type="number" id="qty-${index}" value="1" min="1" max="99">
                    <button onclick="changeQty('qty-${index}', 1)">+</button>
                </div>
                <button class="btn-add" onclick="addToCartWithQty('${product.name}', ${product.price}, 'qty-${index}')">Agregar al Carrito</button>
            </div>
        </div>
    `).join('');
}

function changeQty(inputId, delta) {
    const input = document.getElementById(inputId);
    let newValue = parseInt(input.value) + delta;
    if (newValue < 1) newValue = 1;
    if (newValue > 99) newValue = 99;
    input.value = newValue;
}

function addToCartWithQty(productName, price, qtyId) {
    const qty = parseInt(document.getElementById(qtyId).value);
    for (let i = 0; i < qty; i++) {
        cart.push({ name: productName, price: price });
    }
    updateCartDisplay();
    showNotification(`"${productName}" (x${qty}) agregado al carrito`);
    document.getElementById(qtyId).value = 1;
}

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartDisplay();
    showNotification(`"${productName}" agregado al carrito`);
}

function updateCartDisplay() {
    document.getElementById('cart-count').innerText = cart.length;
    total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').innerText = total.toFixed(2);
    
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">El carrito está vacío</p>';
        } else {
            const groupedCart = {};
            cart.forEach(item => {
                if (groupedCart[item.name]) {
                    groupedCart[item.name].qty++;
                } else {
                    groupedCart[item.name] = { ...item, qty: 1 };
                }
            });
            
            cartItemsContainer.innerHTML = Object.entries(groupedCart).map(([name, item]) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${name}</h4>
                        <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)} (x${item.qty})</span>
                    </div>
                    <button class="remove-item" onclick="removeFromCartGroup('${name}')">X</button>
                </div>
            `).join('');
        }
    }
}

function removeFromCartGroup(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartDisplay();
    showNotification(`"${name}" eliminado del carrito`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
}

document.querySelector('.cart').addEventListener('click', toggleCart);

function checkout() {
    if (cart.length === 0) {
        showNotification('El carrito está vacío');
        return;
    }
    alert(`¡Gracias por tu compra! Total: $${total.toFixed(2)}`);
    cart = [];
    updateCartDisplay();
    toggleCart();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #2e7d32;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 300;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('custom-product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('new-product-name').value;
    const price = parseFloat(document.getElementById('new-product-price').value);
    const category = document.getElementById('new-product-category').value;
    
    const product = { name, price, category, id: Date.now() };
    products.push(product);
    
    renderProducts();
    
    document.getElementById('custom-product-form').reset();
    showNotification(`"${name}" agregado`);
});

document.addEventListener('DOMContentLoaded', function() {
    const closeCart = document.querySelector('.close-cart');
    if (closeCart) {
        closeCart.addEventListener('click', toggleCart);
    }
    
    document.getElementById('cart-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            toggleCart();
        }
    });
    
    renderProducts();
});