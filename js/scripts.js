
/* ----- Toggle menu mobile ----- */
let menuItems = document.getElementById('menuItems');
let iconMenu = document.getElementById('menu-icon');
menuItems.style.maxHeight = "0px";

iconMenu.addEventListener('click', () => {
    if(menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px";
    } else {
        menuItems.style.maxHeight = "0px";
    }
})

/* ----- Transition of singin for create count  ----- */
let loginForm = document.getElementById('loginForm');
let regForm = document.getElementById('regForm');
let indicator = document.getElementById('indicator');
let login = document.getElementById('login');
let register = document.getElementById('register');

register.addEventListener('click', () => {
    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
});

login.addEventListener('click', () => {
    regForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
})

/* ----- change images product gallery  ----- */
var productImg = document.getElementById('product-img');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
}
