const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let qrImg = document.querySelector ("#qr-img");
let btn = document.querySelector ("#btn");
let input = document.querySelector ("#input-box");

const getQR = async ()=>{
    qrImg.src = URL+input.value;
}
btn.addEventListener ("click", ()=>{
    getQR();
})