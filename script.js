// ===========================
// BAXODIR MEBEL
// SCRIPT.JS
// ===========================

let cart = [];
let total = 0;

const cartCount = document.getElementById("count");
const totalPrice = document.getElementById("total");

/* ===========================
   Savatchaga qo'shish
=========================== */

function addToCart(name, price, image) {

    const product = cart.find(item => item.name === name);

    if (product) {
        product.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    updateCart();

}

/* ===========================
   Savatchani yangilash
=========================== */

function updateCart() {

    const cartItems = document.getElementById("cartItems");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `
        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">
                <h3>${item.name}</h3>
                <p>${item.price.toLocaleString()} so'm</p>
            </div>

            <div class="quantity">

                <button onclick="minus(${index})">-</button>

                <span>${item.quantity}</span>

                <button onclick="plus(${index})">+</button>

            </div>

            <div class="cart-price">

                ${(item.price * item.quantity).toLocaleString()} so'm

            </div>

            <button class="remove-btn"
            onclick="removeItem(${index})">

                O'chirish

            </button>

        </div>
        `;

    });

    if(totalPrice){
        totalPrice.innerHTML =
        total.toLocaleString() + " so'm";
    }

    if(cartCount){
        cartCount.innerHTML = cart.length;
    }

}

/* ===========================
   Mahsulotni o'chirish
=========================== */

function removeItem(index){

    cart.splice(index,1);

    updateCart();

}
/* ===========================
   Mahsulot sonini oshirish
=========================== */

function plus(index){

    cart[index].quantity++;

    updateCart();

    saveCart();

}

/* ===========================
   Mahsulot sonini kamaytirish
=========================== */

function minus(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    updateCart();

    saveCart();

}

/* ===========================
   Savatchani tozalash
=========================== */

function clearCart(){

    if(confirm("Savatchani tozalamoqchimisiz?")){

        cart = [];

        updateCart();

        saveCart();

    }

}

/* ===========================
   LocalStorage
=========================== */

function saveCart(){

    localStorage.setItem(
        "baxodirMebelCart",
        JSON.stringify(cart)
    );

}

function loadCart(){

    const data = localStorage.getItem(
        "baxodirMebelCart"
    );

    if(data){

        cart = JSON.parse(data);

        updateCart();

    }

}

window.onload = function(){

    loadCart();

};
/* ===========================
   SEVIMLILAR (Wishlist)
=========================== */

let favorites = JSON.parse(
    localStorage.getItem("favorites")
) || [];

function toggleFavorite(button, name){

    const index = favorites.indexOf(name);

    if(index === -1){

        favorites.push(name);

        button.classList.add("active");

    }else{

        favorites.splice(index,1);

        button.classList.remove("active");

    }

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}

/* ===========================
   QIDIRUV
=========================== */

const searchInput =
document.getElementById("search");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        const value =
        this.value.toLowerCase();

        const cards =
        document.querySelectorAll(".product-card");

        cards.forEach(card=>{

            const title =
            card.querySelector("h3")
            .innerText
            .toLowerCase();

            if(title.includes(value)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

}

/* ===========================
   MOBIL MENU
=========================== */

const menuBtn =
document.getElementById("menuBtn");

const menu =
document.querySelector(".menu");

if(menuBtn){

    menuBtn.onclick=function(){

        menu.classList.toggle("active");

    }

}

/* ===========================
   HEADER SCROLL
=========================== */

window.addEventListener("scroll",()=>{

    const header =
    document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow=
        "0 10px 20px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow=
        "0 3px 12px rgba(0,0,0,.08)";

    }

});
/* ===========================
   DARK MODE
=========================== */

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    darkBtn.onclick = function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    };

}

/* ===========================
   BACK TO TOP
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.onclick = function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    };

}

/* ===========================
   SCROLL ANIMATION
=========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
    ".product-card, .category-card, .contact, footer"
).forEach(item => {

    observer.observe(item);

});

/* ===========================
   PAGE LOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

/* ===========================
   SUCCESS MESSAGE
=========================== */

function showMessage(text) {

    const msg = document.createElement("div");

    msg.className = "toast";

    msg.innerText = text;

    document.body.appendChild(msg);

    setTimeout(() => {

        msg.classList.add("show");

    }, 100);

    setTimeout(() => {

        msg.classList.remove("show");

        setTimeout(() => {

            msg.remove();

        }, 300);

    }, 2500);

}

/* ===========================
   ADD TO CART WITH MESSAGE
=========================== */

const oldAddToCart = addToCart;

addToCart = function(name, price, image) {

    oldAddToCart(name, price, image);

    showMessage("✅ Mahsulot savatchaga qo'shildi!");

};

/* ===========================
   END OF SCRIPT
=========================== */
