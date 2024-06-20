const cabecera = document.getElementById("header");
const navegacion = document.createElement("navbar");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const imagen = document.createElement("img");
const a = document.createElement("a");

cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);

navegacion.className = "navbar";

const pages = ["Logo", "Index", "Carrito"];

for(let i = 0; i<pages.length; i++){
    const li = document.createElement("li");
    if(i === 0){li.innerHTML = `<a href="index.html"><img src="./assets/img/logo-sin-fondo.png" alt="Inicio" style = "width: 50px; height: 50px;"></a>`
    }
    else{li.innerHTML = `<a href="${pages[i].toLowerCase()}.html">${pages[i]}</a>`
    };
    ul.appendChild(li);
};


