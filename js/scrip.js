// variables

desplegables = document.querySelector(".desplegable")
// nose porque no anda el all
tangADeBootrapYDelButton = document.querySelectorAll(".tagADelDesplagable")
listaDesordenadaDeldesplagable = document.querySelectorAll(".listaDesordenadaDeldesplagable")

// funciones

function funcionDelDesplegableAbrir(){
    console.log("pip")
    for(i=0;i<tangADeBootrapYDelButton.length;i++){
        tangADeBootrapYDelButton[i].setAttribute("aria-expanded","true")
        tangADeBootrapYDelButton[i].classList.add("show")
    }
    for(i=0;i<listaDesordenadaDeldesplagable.length;i++){
        listaDesordenadaDeldesplagable[i].classList.add("show")
        listaDesordenadaDeldesplagable[i].setAttribute("data-bs-popper","estatic")
    }
}

function funcionDelDesplegableCerrar(){
    console.log("pop")
    for(i=0;i<tangADeBootrapYDelButton.length;i++){
        tangADeBootrapYDelButton[i].removeAttribute("aria-expanded","false")
        tangADeBootrapYDelButton[i].classList.remove("show")
    }
    for(i=0;i<listaDesordenadaDeldesplagable.length;i++){
        listaDesordenadaDeldesplagable[i].classList.remove("show")
        listaDesordenadaDeldesplagable[i].removeAttribute("data-bs-popper","estatic")
    }
}

// eventos

// en el tag a snow se agraga en un atributo aria-expanded de false pasa a true, el ul se agraga la clase show y por ultimo se agrga el atributo data-bs-popper="estatic"
desplegables.addEventListener("mouseover",funcionDelDesplegableAbrir)
desplegables.addEventListener("mouseout",funcionDelDesplegableCerrar)