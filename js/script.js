let bombillaBoton = document.getElementById("bombilla-boton");    // Boton de modo claro u oscuro
let menuBoton = document.getElementById("header-menu-trigger");    // Boton de menu
let menu = document.querySelector(".header-nav-space");    // Parte del header que contiene el nav o menu
let logo = document.querySelector(".header-logo");    // Parte del header que contiene los logos
let root = getComputedStyle(document.documentElement);    // Raiz del archivo de estilo, donde estan las variables de colores
let mediaQuery = window.matchMedia("(max-width: calc(400px + 40rem))")    // Media query para achicar el menu si es muy pequeña la ventana
let modoOscuro = true;    // Si verdadero, es modo oscuro. Si falso, modo claro.
let menuAbierto = false;    // Si verdadero, el menu esta abierto. Si falso, esta cerrado.

let azureWeb = root.getPropertyValue("--azure-web");    // Variables de los colores
let richBlack = root.getPropertyValue("--rich-black");
let oxfordBlue = root.getPropertyValue("--oxford-blue");
let mayaBlue = root.getPropertyValue("--maya-blue");
let vermilion = root.getPropertyValue("--vermilion");
let mindaro = root.getPropertyValue("--mindaro");

bombillaBoton.addEventListener("click", function() {    // Al presionar el boton, se cambian cuales colores se utilizan como los "oscuros" y cuales como los "claros"
    if(modoOscuro === true) {    // En practica, se intercambian los colores oscuros con los claros
        document.documentElement.style.setProperty("--color-principal-oscuro", azureWeb);
        document.documentElement.style.setProperty("--color-principal-medio", mayaBlue);
        document.documentElement.style.setProperty("--color-principal-claro", richBlack);
        document.documentElement.style.setProperty("--color-detalle-oscuro", mindaro);
        document.documentElement.style.setProperty("--color-detalle-claro", vermilion);
        modoOscuro = false;
    } else {
        document.documentElement.style.setProperty("--color-principal-oscuro", richBlack);
        document.documentElement.style.setProperty("--color-principal-medio", oxfordBlue);
        document.documentElement.style.setProperty("--color-principal-claro", azureWeb);
        document.documentElement.style.setProperty("--color-detalle-oscuro", vermilion);
        document.documentElement.style.setProperty("--color-detalle-claro", mindaro);
        modoOscuro = true;
    }
})

function handleTabletChange(e) {    // Al cambiar el tamaño de la ventana, se verifica si es menor a 400px + 40rem
    if ((e.matches === false)) {    // Si no es menor, se muestra el menu
        menu.style.display = "flex";    // Se muestra el menu
        logo.style.borderRadius = "20px 0 0 20px";    // Se cambia como se redondean las esquinas
    } else {    // Si es menor, se muestra el menu solo si se presiono antes el boton del menu
        if(menuAbierto === true) {
            menu.style.display = "flex";
            logo.style.borderRadius = "20px 0 0 0";
            menuBoton.style.borderRadius = "0 20px 0 0";
        } else {
            menu.style.display = "none";    // No se muestra el menu
            logo.style.borderRadius = "20px 0 0 20px";
            menuBoton.style.borderRadius = "0 20px 20px 0";
        }
    }
}
  
mediaQuery.addEventListener("change", handleTabletChange);    // El objeto mediaQuery revisa si la ventana cambio de tamaño
  
handleTabletChange(mediaQuery);    // Se ejecuta la funcion de verificar el tamaño de la ventana con el media query anterior

menuBoton.addEventListener("click", function() {    // Al presionar el boton del menu, se abre o cierra el menu
    if(menuAbierto === true) {
        menu.style.display = "none";
        logo.style.borderRadius = "20px 0 0 20px";
        menuBoton.style.borderRadius = "0 20px 20px 0";
        menuAbierto = false;
    } else {
        menu.style.display = "flex";
        logo.style.borderRadius = "20px 0 0 0";
        menuBoton.style.borderRadius = "0 20px 0 0";
        menuAbierto = true;
    }
})