let bombillaBoton = document.getElementById("bombilla-boton");
let menuBoton = document.getElementById("header-menu-trigger");
let menu = document.querySelector(".header-nav-space");
let logo = document.querySelector(".header-logo");
let root = getComputedStyle(document.documentElement);
let mediaQuery = window.matchMedia("(max-width: calc(240px + 32rem))")
let modoOscuro = true;
let menuAbierto = false;

let azureWeb = root.getPropertyValue("--azure-web");
let richBlack = root.getPropertyValue("--rich-black");
let oxfordBlue = root.getPropertyValue("--oxford-blue");
let mayaBlue = root.getPropertyValue("--maya-blue");
let vermilion = root.getPropertyValue("--vermilion");
let mindaro = root.getPropertyValue("--mindaro");

bombillaBoton.addEventListener("click", function() {
    if(modoOscuro === true) {
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

function handleTabletChange(e) {
    if ((e.matches === false)) {
        menu.style.display = "flex";
        logo.style.borderRadius = "20px 0 0 20px";
    } else {
        if(menuAbierto === true) {
            menu.style.display = "flex";
            logo.style.borderRadius = "20px 0 0 0";
            menuBoton.style.borderRadius = "0 20px 0 0";
        } else {
            menu.style.display = "none";
            logo.style.borderRadius = "20px 0 0 20px";
            menuBoton.style.borderRadius = "0 20px 20px 0";
        }
    }
}
  
mediaQuery.addEventListener("change", handleTabletChange);
  
handleTabletChange(mediaQuery);

menuBoton.addEventListener("click", function() {
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