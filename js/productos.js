const insumosDiv = document.createElement("div");
insumosDiv.className = "insumos";

const insumos = [
    {id: 1, nombre: "agujas", precio: 2500, imagen:"./assets/img/agujas.jpg"},
    {id: 2, nombre: "cables", precio: 3500, imagen: "./assets/img/cables.jpg"},
    {id: 3, nombre: "guantes", precio: 1500, imagen: "./assets/img/guantes.jpg"},
    {id: 4, nombre: "maquinas", precio: 50000, imagen:"./assets/img/maquinas.jpg"},
    {id: 5, nombre: "punteras", precio: 4500, imagen: "./assets/img/punteras.jpg"},
    {id: 6, nombre: "tintas", precio: 5200, imagen: "./assets/img/tintas.jpg"},
];

function mostrarLista() {
    insumosDiv.innerHTML = ""; // aca declaro null para que tome el array actualizado y lo muestre luego de la iteracion.
    let i = 0;
    insumos.forEach(element => {
        let producto1 = document.createElement("div");//Creo un elemento <div>
        let card = `<img src="${element.imagen}" alt="${element.nombre}" style="width: 100px;">
                    <h3>${element.nombre}</h3> <h2>$${element.precio}</h2>
                    <button onclick = "addToCart(${element.id},1)">Add to cart</button>`;
        i++;
        producto1.innerHTML = card;
        insumosDiv.appendChild(producto1);
        producto1.style.width = '100px';
    });
    document.getElementById("productos").appendChild(insumosDiv);
};



function addToCart(productId, cantidad){//para cuando el producto no existe
    let cart = loadCartFromLocalStorage();
    const insumo = insumos.find(p => p.id === productId);
    if(!insumo){
        alert("El producto no fue encontrado"); //cambiar por sweet alert o toastify
        return;//para que salga de la funcion
    }
    const cartItem = cart.find(item => item.id === productId);
    if(cartItem){//aumenta la cantidad del producto que ya esta en el carrito
        cartItem.cantidad += cantidad;
        cartItem.subtotal = cartItem.cantidad * cartItem.precio;
    } else{//agrega un nuevo producto al carrito
        cart.push({
            id: insumo.id,
            nombre: insumo.nombre,
            precio: insumo.precio,
            cantidad: cantidad,
            subtotal: cantidad * insumo.precio
        });
    }
    saveCartToLocalStorage(cart);
};

function saveCartToLocalStorage(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
};

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
};

document.addEventListener('DOMContentLoaded', () => {
    mostrarLista();
});

