let cart = [];
let total = 0;

const cartCount = document.getElementById("count");
const cartBox = document.getElementById("cartBox");
const search = document.getElementById("search");

function addCart(name, price){

cart.push({
name:name,
price:price
});

total += price;

cartCount.innerHTML = cart.length;

showCart();

}

function showCart(){

let html = `
<h2>🛒 Savatcha</h2>
`;

cart.forEach((item,index)=>{

html += `
<div class="item">

<h3>${item.name}</h3>

<p>${item.price.toLocaleString()} so'm</p>

<button onclick="removeItem(${index})">
❌ O'chirish
</button>

</div>
`;

});

html += `
<hr>

<h2>
Jami:
${total.toLocaleString()} so'm
</h2>

<button onclick="buyNow()">
Buyurtma berish
</button>
`;

cartBox.innerHTML = html;

}

function removeItem(index){

total -= cart[index].price;

cart.splice(index,1);

cartCount.innerHTML = cart.length;

showCart();

}

function buyNow(){

if(cart.length==0){

alert("Savatcha bo'sh");

return;

}

alert("Buyurtma qabul qilindi!");

}

search.addEventListener("keyup",()=>{

let value = search.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

if(card.innerText.toLowerCase().includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

function scrollProducts(){

document
.getElementById("products")
.scrollIntoView({
behavior:"smooth"
});

}
