const menuIcon = document.getElementById("menu_icon");
const mobileMenu = document.getElementById("mobile_menu");
const closeIcon = document.getElementById("close_icon")

menuIcon.addEventListener("click", function(event){
    mobileMenu.style.display = "flex"
})

closeIcon.addEventListener("click", function(event){
    mobileMenu.style.display = "none"
})