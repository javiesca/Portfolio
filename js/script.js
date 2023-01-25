window.onload = function () {

    document.querySelector(".nav_menu").addEventListener("click", muestraNav);
    let links = document.querySelector(".nav_links");
    let menu = document.querySelector(".nav_menu");

    function muestraNav() {
        if (links.getAttribute("class") == "nav_links abrir") {
            links.classList.remove("abrir");
            document.querySelector("main").style.display="flex";

        }else{
            links.classList.add("abrir");
            document.querySelector("main").style.display="none";
        }

        if (menu.getAttribute("class") == "nav_menu cerrar") {
            menu.classList.remove("cerrar");
        }else{
            menu.classList.add("cerrar");
        }
    }

}


