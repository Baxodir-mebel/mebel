let count = 0;

const buttons = document.querySelectorAll(".card button");
const cart = document.getElementById("count");
const cartBtn = document.getElementById("cartBtn");

buttons.forEach(btn=>{
btn.onclick=function(){
count++;
cart.innerHTML=count;
alert("✅ Savatchaga qo'shildi");
}
});

cartBtn.onclick=function(){
alert("🛒 Savatchada "+count+" ta mahsulot bor.");
}
