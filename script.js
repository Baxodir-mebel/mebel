// SAVATCHA
let cart = [];
let total = 0;

const cartCount = document.getElementById("count");

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    if (cartCount) {
        cartCount.innerText = cart.length;
    }

    alert(`${name} savatchaga qo'shildi!\nJami: ${total.toLocaleString()} so'm`);
}

// DARK MODE
const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {
    darkBtn.onclick = () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            darkBtn.innerHTML = "☀";
        } else {
            darkBtn.innerHTML = "🌙";
        }
    };
}

// QIDIRUV
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        let value = searchInput.value.toLowerCase();

        cards.forEach(card => {
            let title = card.querySelector("h3").innerText.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// HEADER SCROLL
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.padding = "0 8%";
        header.style.height = "70px";
    } else {
        header.style.height = "80px";
    }
});

// SMOOTH SCROLL
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const id = link.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
    });
});
