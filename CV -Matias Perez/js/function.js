/*----------------------INICIO----------------------------------*/

/*Botones*/

document.getElementById("botonA").onclick = function () {
    const element = document.getElementById("sobreMi");
    element.scrollIntoView();   
    }

document.getElementById("botonB").onclick = function () {
    const element = document.getElementById("contactame");
    element.scrollIntoView();   
    }

document.getElementById("botonC").onclick = function () {
    const element = document.getElementById("contactame");
    element.scrollIntoView();   
    }
  

/*----------------------Sobre Mi----------------------------------*/

/*Acordion - Imagenes*/

const acoritemA = "imagen/acordion/A.png"
const acoritemB = "imagen/acordion/B.png"
const acoritemC = "imagen/acordion/C.png"
const acoritemD = "imagen/acordion/D.png"
const acoritemE = "imagen/acordion/E.png"
const acoritemF = "imagen/acordion/F.png"
const acoritemG = "imagen/acordion/G.png"
const acoritemH = "imagen/acordion/H.png"
const acoritemI = "imagen/acordion/I.png"
let imagenAcord = "imagen/acordion/A.png"

/*Acordion - Botones 

Cambiar Imagen al seleccionar item y scroll a sobreMi

*/

document.getElementById("Acord-1-Item-1").onclick = function () {
let imagenAcord = acoritemA
document.getElementById("acordion-imagen").src = imagenAcord 
sobreMi.scrollIntoView()
}

document.getElementById("Acord-1-Item-2").onclick = function () {
let imagenAcord = acoritemB
document.getElementById("acordion-imagen").src = imagenAcord 
sobreMi.scrollIntoView()
}

document.getElementById("Acord-1-Item-3").onclick = function () {
let imagenAcord = acoritemC
document.getElementById("acordion-imagen").src = imagenAcord 
sobreMi.scrollIntoView()
}

document.getElementById("Acord-2-Item-1").onclick = function () {
let imagenAcord = acoritemD
document.getElementById("acordion-imagen").src = imagenAcord 
sobreMi.scrollIntoView()
}

document.getElementById("Acord-2-Item-2").onclick = function () {
let imagenAcord = acoritemE
document.getElementById("acordion-imagen").src = imagenAcord 
sobreMi.scrollIntoView()
}

document.getElementById("Acord-2-Item-3").onclick = function () {
let imagenAcord = acoritemF
document.getElementById("acordion-imagen").src = imagenAcord 
sobreMi.scrollIntoView()
}

document.getElementById("Acord-3-Item-1").onclick = function () {
let imagenAcord = acoritemG
document.getElementById("acordion-imagen").src = imagenAcord 
sobreMi.scrollIntoView()
}

document.getElementById("Acord-3-Item-2").onclick = function () {
let imagenAcord = acoritemH
document.getElementById("acordion-imagen").src = imagenAcord 
sobreMi.scrollIntoView()
}

document.getElementById("Acord-3-Item-3").onclick = function () {
let imagenAcord = acoritemI
document.getElementById("acordion-imagen").src = imagenAcord 
sobreMi.scrollIntoView()
}



/* 3. Contactame*/

/* Botones Logos*/

const Linkedin = "/mperezramos"
const telefono = "0291-154395536"
const ubicación =  "Rosario, Argentina"
const correo = "matiasperezramos91@gmail.com"
let contacto = ""

document.getElementById("Linkedin").onmouseover = function () {
    let contacto = Linkedin
    document.getElementById("datos-contacto").innerHTML = "<a href=https://www.linkedin.com/in"+contacto+" class= 'h6 text-decoration-none'>" +contacto+ "</a>"    
    }
    
    document.getElementById("Telefono").onmouseover = function () {
        let contacto = telefono
        document.getElementById("datos-contacto").innerHTML = contacto   
    }
    
    document.getElementById("Ubicación").onmouseover = function () {
        let contacto = ubicación
        document.getElementById("datos-contacto").innerHTML = contacto   
    }
    
    document.getElementById("Correo").onmouseover = function () {
        let contacto = correo
        document.getElementById("datos-contacto").innerHTML = contacto   
    }

