function generarContrasena(numero, upp, nums, espec){

    const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const letrasMay = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const especiales = [ "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}"]

    let generada =[]

    if ((upp == false) && (nums == false) && (espec == false)){
        for (let i = 0; i < numero; i++){
            generada.push(letras[Math.floor(Math.random()*letras.length)])
        }
        return generada.join('')
    }

    else if((upp == true) && (nums == false) && (espec == false)){
        for (let i = 0; i < numero; i++){
            let random = Math.floor(Math.random()*2)
            if (random == 0){
                generada.push(letras[Math.floor(Math.random()*letras.length)])
            }
            else{
                generada.push(letrasMay[Math.floor(Math.random()*letrasMay.length)])
            }
        }
        return generada.join('')
    }

    else if((upp == false) && (nums == true) && (espec == false)){
        for (let i = 0; i < numero; i++){
            let random = Math.floor(Math.random()*2)
            if (random == 0){
                generada.push(letras[Math.floor(Math.random()*letras.length)])
            }
            else{
                generada.push(numeros[Math.floor(Math.random()*numeros.length)])
            }
        }
        return generada.join('')
    }

    else if((upp == false) && (nums == false) && (espec == true)){
        for (let i = 0; i < numero; i++){
            let random = Math.floor(Math.random()*2)
            if (random == 0){
                generada.push(letras[Math.floor(Math.random()*letras.length)])
            }
            else{
                generada.push(especiales[Math.floor(Math.random()*especiales.length)])
            }
        }
        return generada.join('')
    }

    else if((upp == true) && (nums == true) && (espec == false)){
        for (let i = 0; i < numero; i++){
            let random = Math.floor(Math.random()*3)
            if (random == 0){
                generada.push(letras[Math.floor(Math.random()*letras.length)])
            }
            else if(random == 1){
                generada.push(letrasMay[Math.floor(Math.random()*letrasMay.length)])
            }
            else{
                generada.push(numeros[Math.floor(Math.random()*numeros.length)])
            }
        }
        return generada.join('')
    }

    else if((upp == false) && (nums == true) && (espec == true)){
        for (let i = 0; i < numero; i++){
            let random = Math.floor(Math.random()*3)
            if (random == 0){
                generada.push(letras[Math.floor(Math.random()*letras.length)])
            }
            else if(random == 1){
                generada.push(especiales[Math.floor(Math.random()*especiales.length)])
            }
            else{
                generada.push(numeros[Math.floor(Math.random()*numeros.length)])
            }
        }
        return generada.join('')
    }

    else if((upp == true) && (nums == false) && (espec == true)){
        for (let i = 0; i < numero; i++){
            let random = Math.floor(Math.random()*3)
            if (random == 0){
                generada.push(letras[Math.floor(Math.random()*letras.length)])
            }
            else if(random == 1){
                generada.push(especiales[Math.floor(Math.random()*especiales.length)])
            }
            else{
                generada.push(letrasMay[Math.floor(Math.random()*letrasMay.length)])
            }
        }
        return generada.join('')
    }

    else if((upp == true) && (nums == true) && (espec == true)){
        for (let i = 0; i < numero; i++){
            let random = Math.floor(Math.random()*4)
            if (random == 0){
                generada.push(letras[Math.floor(Math.random()*letras.length)])
            }
            else if(random == 1){
                generada.push(especiales[Math.floor(Math.random()*especiales.length)])
            }
            else if(random == 2){
                generada.push(letrasMay[Math.floor(Math.random()*letrasMay.length)])
            }
            else{
                generada.push(numeros[Math.floor(Math.random()*numeros.length)])
            }
        }
        return generada.join('')
    }
}

const sumar = document.querySelector('.sumar')
const restar = document.querySelector('.restar')
let numero = document.querySelector('.numero')

sumar.addEventListener('click', () => {
    numero.textContent = parseInt(numero.textContent) + 1
})

restar.addEventListener('click', () => {
    if (parseInt(numero.textContent) > 10){
        numero.textContent = parseInt(numero.textContent) -1
    }
})

let mayusculas = document.querySelector('.upp')
let numers = document.querySelector('.num')
let especial = document.querySelector('.spec')

const botonGenerar = document.querySelector('.generador')
let contraseña = document.querySelector('.password')

botonGenerar.addEventListener('click', () => {
    contraseña.textContent = generarContrasena(parseInt(numero.textContent), mayusculas.checked, numers.checked, especial.checked)
})

const copiar = document.querySelector('.copiar')

copiar.addEventListener('click', () => {
    if (contraseña.textContent == ''){
        alert('No ha generado una contraseña')
    }
    else{
    navigator.clipboard.writeText(contraseña.textContent)
    alert('Contraseña copiada')
    }
})