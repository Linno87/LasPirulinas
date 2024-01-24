
/* Choce navbar with query */
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

/* Open search bar */
const input_search = document.getElementById("search_desk_input");
const icon_search = document.getElementById("search_desk_icon");
const form_seach = document.getElementById("form_search")
icon_search.addEventListener("click",(e)=>{
    if(!input_search.value.trim() || !input_search.classList.contains("search_desk_input_trans")){
        e.preventDefault();
        input_search.classList.toggle("search_desk_input_trans")
    }
})