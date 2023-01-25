window.onload = function () {


    document.querySelector(".nav_menu").addEventListener("click", muestraNav);
    let links = document.querySelector(".nav_links");
    let menu = document.querySelector(".nav_menu");
    let enlaces = document.querySelectorAll(".nav_links_links")

    //Función que cierra o abre el menu de links en diseño responsivo
    function muestraNav() {
        if (links.getAttribute("class") == "nav_links abrir") {
            links.classList.remove("abrir");
            document.querySelector("main").style.display="flex";

        }else{
            links.classList.add("abrir");
            document.querySelector("main").style.display="none";
        }
    }

    //Listener al hace click a uno de los links del nav.
    enlaces.addEventListener("click",decoraLink);

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
        menu.classList.add("abrir");
    }


}


