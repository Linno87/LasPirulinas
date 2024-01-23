const burger_nav_phone = document.getElementById("nav_phone_menu");
const burger_icon = document.getElementById("burger_icon")

burger_icon.addEventListener("click", () =>{
    if(burger_nav_phone.classList.contains("d-none")){
        burger_nav_phone.classList.remove("d-none")
        burger_nav_phone.classList.add("d-block")
    }else{
        burger_nav_phone.classList.remove("d-block")
        burger_nav_phone.classList.add("d-none")
        console.log("burger");
    }
})