window.onload = function () {

    document.querySelector("#menu").addEventListener("click", muestraNav)



    function muestraNav() {
        let links = document.querySelector("#links");
        let menu = document.querySelector("#menu");

        if (links.getAttribute("class") == "nav_links abrir") {
            links.classList.remove("abrir");
            links.classList.add("cerrar");
        }else{
            links.classList.remove("cerrar");
            links.classList.add("abrir");
        }

        if (menu.getAttribute("class") == "nav_menu cerrar") {
            menu.classList.remove("cerrar");
            menu.classList.add("abrir");
        }else{
            menu.classList.remove("abrir");
            menu.classList.add("cerrar");
        }
        

        
    }



}


