// SAVATCHA
let cart = [];
let total = 0;

const cartCount = document.getElementById("count");

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    total += price;

    cartCount.innerText = cart.length;

    alert(
        "✅ Savatchaga qo'shildi!\n\n" +
        name +
        "\nNarxi: " +
        price.toLocaleString() +
        " so'm"
    );
}

// DARK MODE
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
    }else{
        darkBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';
    }

});

// QIDIRUV
const search = document.getElementById("search");

search.addEventListener("keyup", function(){

    let value =
    search.value.toLowerCase();

    let cards =
    document.querySelectorAll(".card");

    cards.forEach(card=>{

        let title =
        card.querySelector("h3")
        .innerText.toLowerCase();

        if(title.includes(value)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

});

// TEPAGA QAYTISH
const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};
