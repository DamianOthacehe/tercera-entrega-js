function renderCart(){
    const cartDiv = document.getElementById("cart") //aca llama al elemento cart que esta declarado en el html
    cartDiv.innerHTML = "";
    let cart = loadCartFromLocalStorage();
    cart.forEach(item => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.innerHTML = `
            <p>Producto: ${item.nombre.toUpperCase()}, Cantidad: ${item.cantidad}, Subtotal: $${item.subtotal}</p>
            <button onclick="agregarOQuitarElementos(${item.id}, 1)">+ 1</button>
            <button onclick="agregarOQuitarElementos(${item.id}, -1)">- 1</button>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
};

function agregarOQuitarElementos(productId, boton) {
    let cart = loadCartFromLocalStorage();
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.cantidad += boton;
        if (cartItem.cantidad <= 0) {
            cart = cart.filter(item => item.id !== productId); // Eliminar producto si cantidad es 0 o menor
        } else {
            cartItem.subtotal = cartItem.cantidad * cartItem.precio;
        }
        saveCartToLocalStorage(cart);
        renderCart(); // Volver a renderizar el carrito
    }
}

function saveCartToLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}


function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
};

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});
