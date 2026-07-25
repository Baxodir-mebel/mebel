alert("Baxodir mebel saytiga xush kelibsiz! 🛋️");

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        alert("Mahsulot savatchaga qo'shildi! 🛒");
    });
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        alert(this.innerText + " sahifasi tez orada qo'shiladi.");
    });
});
