window.onload = function () {

    document.querySelector(".nav_menu").addEventListener("click", muestraNav);
    let links = document.querySelector(".nav_links");
    let menu = document.querySelector(".nav_menu");
    let enlaces = document.querySelectorAll(".nav_links_links")

    function muestraNav() {
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

    for(let enlace of enlaces){
        enlace.addEventListener("click",decoraLink);
    }

    function decoraLink(){
        //Resetea background y color de letra de todos los links
        for(let enlace of enlaces){
            enlace.style.backgroundColor = "black";
            enlace.style.color = "white"
        }

        //Estilos a link seleccionado 
        this.style.backgroundColor = "white";
        this.style.color = "black";

        //Cerrar menu navegación cuando se seleccione un link (Media Query activado)
        links.classList.remove("abrir");
        links.classList.add("cerrar");
        menu.classList.remove("cerrar");
        menu.classList.add("abrir");
       
    }

   


}


