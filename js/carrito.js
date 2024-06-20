function renderCart(){
    const cartDiv = document.getElementById("cart") //aca llama al elemento cart que esta declarado en el html
    cartDiv.innerHTML = "";
    let cart = loadCartFromLocalStorage();
    cart.forEach(item => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.innerHTML = `
            <p>ID: ${item.id}, Nombre: ${item.nombre}, Cantidad: ${item.cantidad}, Precio Total: $${item.subtotal}</p>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
};

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
};

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});
