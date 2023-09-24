// variables

desplegable1 = document.querySelector(".desplegable1")
desplegable2 = document.querySelector(".desplegable2")
desplegable3 = document.querySelector(".desplegable3")
desplegable4 = document.querySelector(".desplegable4")
desplegable5 = document.querySelector(".desplegable5")
desplegable6 = document.querySelector(".desplegable6")
// nose porque no anda el all
tangADeBootrapYDelButton1 = document.querySelector(".tagADelDesplagable1")
listaDesordenadaDeldesplagable1 = document.querySelector(".listaDesordenadaDeldesplagable1")

tangADeBootrapYDelButton2 = document.querySelector(".tagADelDesplagable2")
listaDesordenadaDeldesplagable2 = document.querySelector(".listaDesordenadaDeldesplagable2")

tangADeBootrapYDelButton3 = document.querySelector(".tagADelDesplagable3")
listaDesordenadaDeldesplagable3 = document.querySelector(".listaDesordenadaDeldesplagable3")

tangADeBootrapYDelButton4 = document.querySelector(".tagADelDesplagable4")
listaDesordenadaDeldesplagable4 = document.querySelector(".listaDesordenadaDeldesplagable4")

tangADeBootrapYDelButton5 = document.querySelector(".tagADelDesplagable5")
listaDesordenadaDeldesplagable5 = document.querySelector(".listaDesordenadaDeldesplagable5")

tangADeBootrapYDelButton6 = document.querySelector(".tagADelDesplagable6")
listaDesordenadaDeldesplagable6 = document.querySelector(".listaDesordenadaDeldesplagable6")
// funciones

// 1
function funcionDelDesplegableAbrir1(){
    console.log("pip")
    tangADeBootrapYDelButton1.setAttribute("aria-expanded","true")
    tangADeBootrapYDelButton1.classList.add("show")
    
    listaDesordenadaDeldesplagable1.classList.add("show")
    listaDesordenadaDeldesplagable1.setAttribute("data-bs-popper","estatic")
    
}

function funcionDelDesplegableCerrar1(){
        console.log("pop")
    tangADeBootrapYDelButton1.removeAttribute("aria-expanded","false")
    tangADeBootrapYDelButton1.classList.remove("show")

    listaDesordenadaDeldesplagable1.classList.remove("show")
    listaDesordenadaDeldesplagable1.removeAttribute("data-bs-popper","estatic")
}

// 2

function funcionDelDesplegableAbrir2(){
    console.log("pip")
    tangADeBootrapYDelButton2.setAttribute("aria-expanded","true")
    tangADeBootrapYDelButton2.classList.add("show")
    
    listaDesordenadaDeldesplagable2.classList.add("show")
    listaDesordenadaDeldesplagable2.setAttribute("data-bs-popper","estatic")
    
}

function funcionDelDesplegableCerrar2(){
    console.log("pop")
    tangADeBootrapYDelButton2.removeAttribute("aria-expanded","false")
    tangADeBootrapYDelButton2.classList.remove("show")

    listaDesordenadaDeldesplagable2.classList.remove("show")
    listaDesordenadaDeldesplagable2.removeAttribute("data-bs-popper","estatic")
}

// 3

function funcionDelDesplegableAbrir3(){
    console.log("pip")
    tangADeBootrapYDelButton3.setAttribute("aria-expanded","true")
    tangADeBootrapYDelButton3.classList.add("show")
    
    listaDesordenadaDeldesplagable3.classList.add("show")
    listaDesordenadaDeldesplagable3.setAttribute("data-bs-popper","estatic")
    
}

function funcionDelDesplegableCerrar3(){
    console.log("pop")
    tangADeBootrapYDelButton3.removeAttribute("aria-expanded","false")
    tangADeBootrapYDelButton3.classList.remove("show")

    listaDesordenadaDeldesplagable3.classList.remove("show")
    listaDesordenadaDeldesplagable3.removeAttribute("data-bs-popper","estatic")
}

// 4

function funcionDelDesplegableAbrir4(){
    console.log("pip")
    tangADeBootrapYDelButton4.setAttribute("aria-expanded","true")
    tangADeBootrapYDelButton4.classList.add("show")
    
    listaDesordenadaDeldesplagable4.classList.add("show")
    listaDesordenadaDeldesplagable4.setAttribute("data-bs-popper","estatic")
    
}

function funcionDelDesplegableCerrar4(){
    console.log("pop")
    tangADeBootrapYDelButton4.removeAttribute("aria-expanded","false")
    tangADeBootrapYDelButton4.classList.remove("show")

    listaDesordenadaDeldesplagable4.classList.remove("show")
    listaDesordenadaDeldesplagable4.removeAttribute("data-bs-popper","estatic")
}

// 5

function funcionDelDesplegableAbrir5(){
    console.log("pip")
    tangADeBootrapYDelButton5.setAttribute("aria-expanded","true")
    tangADeBootrapYDelButton5.classList.add("show")
    
    listaDesordenadaDeldesplagable5.classList.add("show")
    listaDesordenadaDeldesplagable5.setAttribute("data-bs-popper","estatic")
    
}

function funcionDelDesplegableCerrar5(){
    console.log("pop")
    tangADeBootrapYDelButton5.removeAttribute("aria-expanded","false")
    tangADeBootrapYDelButton5.classList.remove("show")

    listaDesordenadaDeldesplagable5.classList.remove("show")
    listaDesordenadaDeldesplagable5.removeAttribute("data-bs-popper","estatic")
}

// 6

function funcionDelDesplegableAbrir6(){
    console.log("pip")
    tangADeBootrapYDelButton6.setAttribute("aria-expanded","true")
    tangADeBootrapYDelButton6.classList.add("show")
    
    listaDesordenadaDeldesplagable6.classList.add("show")
    listaDesordenadaDeldesplagable6.setAttribute("data-bs-popper","estatic")
    
}

function funcionDelDesplegableCerrar6(){
    console.log("pop")
    tangADeBootrapYDelButton6.removeAttribute("aria-expanded","false")
    tangADeBootrapYDelButton6.classList.remove("show")

    listaDesordenadaDeldesplagable6.classList.remove("show")
    listaDesordenadaDeldesplagable6.removeAttribute("data-bs-popper","estatic")
}

// function funcionDelDesplegableAbrir(){
//     console.log("pip")
//     for(i=0;i<tangADeBootrapYDelButton.length;i++){
//         tangADeBootrapYDelButton[i].setAttribute("aria-expanded","true")
//         tangADeBootrapYDelButton[i].classList.add("show")
//     }
//     for(i=0;i<listaDesordenadaDeldesplagable.length;i++){
//         listaDesordenadaDeldesplagable[i].classList.add("show")
//         listaDesordenadaDeldesplagable[i].setAttribute("data-bs-popper","estatic")
//     }
// }

// function funcionDelDesplegableCerrar(){
//     console.log("pop")
//     for(i=0;i<tangADeBootrapYDelButton.length;i++){
//         tangADeBootrapYDelButton[i].removeAttribute("aria-expanded","false")
//         tangADeBootrapYDelButton[i].classList.remove("show")
//     }
//     for(i=0;i<listaDesordenadaDeldesplagable.length;i++){
//         listaDesordenadaDeldesplagable[i].classList.remove("show")
//         listaDesordenadaDeldesplagable[i].removeAttribute("data-bs-popper","estatic")
//     }
// }


// eventos

// en el tag a snow se agraga en un atributo aria-expanded de false pasa a true, el ul se agraga la clase show y por ultimo se agrga el atributo data-bs-popper="estatic"

desplegable1.addEventListener("mouseover",funcionDelDesplegableAbrir1)
desplegable1.addEventListener("mouseout",funcionDelDesplegableCerrar1)

desplegable2.addEventListener("mouseover",funcionDelDesplegableAbrir2)
desplegable2.addEventListener("mouseout",funcionDelDesplegableCerrar2)

desplegable3.addEventListener("mouseover",funcionDelDesplegableAbrir3)
desplegable3.addEventListener("mouseout",funcionDelDesplegableCerrar3)

desplegable4.addEventListener("mouseover",funcionDelDesplegableAbrir4)
desplegable4.addEventListener("mouseout",funcionDelDesplegableCerrar4)

desplegable5.addEventListener("mouseover",funcionDelDesplegableAbrir5)
desplegable5.addEventListener("mouseout",funcionDelDesplegableCerrar5)

desplegable6.addEventListener("mouseover",funcionDelDesplegableAbrir6)
desplegable6.addEventListener("mouseout",funcionDelDesplegableCerrar6)