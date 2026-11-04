console.log(window.screen)

window.document.body.innerHTML = "<p> OLÁ</p>"
document.body.style.backgroundColor = "gray"
let div = document.createElement("div")
document.body.appendChild(div)








//nome
let temp = document.createElement("label")
temp.innerHTML = "Informe seu nome"
div.appendChild(temp)
div.appendChild(document.createElement("br"))
temp = document.createElement("input")
temp.id = "inpnome"
div.appendChild(temp)
div.appendChild(document.createElement("br"))
//peso
temp = document.createElement("label")
temp.innerHTML = "peso"
div.appendChild(temp)
div.appendChild(document.createElement("br"))
//inp
temp = document.createElement("input")
temp.id = "inppeso"
div.appendChild(temp)
div.appendChild(document.createElement("br"))
//altura
temp = document.createElement("label")
temp.innerHTML = "altura"
div.appendChild(temp)
div.appendChild(document.createElement("br"))
//inp
temp = document.createElement("input")
temp.id = "inpaltura"
div.appendChild(temp)
div.appendChild(document.createElement("br"))
//botao
temp = document.createElement("BUTTON")
temp.innerHTML = "botao"
div.appendChild(temp)
div.appendChild(document.createElement("br"))
//label do imc
let x = document.createElement("label")
x.id = "imc"
div.appendChild(x)
div.appendChild(document.createElement("br"))
//imagem
let img = document.createElement("img")
img.id = "imgIMC"
div.appendChild(img)
div.appendChild(document.createElement("br"))
//event listener
temp.addEventListener("click", () => {
    var p = Number.parseFloat(document.querySelector("#inppeso").value)
    var a = Number.parseFloat(document.querySelector("#inpaltura").value)
    var imc = (p / (a * a))
    x.innerHTML = imc.toFixed(2);
    if (imc < 18.5) {
        img.src = "imgs/abaixopeso.png"
    } else if (imc < 24.9) {
        img.src = "imgs/normal.png"
    } else if (imc < 29.9) {
        img.src = "imgs/sobrepeso.png"
    } else if (imc < 34.9) {
        img.src = "imgs/obesidade1.png"
    } else if (imc < 39.9) {
        img.src = "imgs/obesidade2.png"
    } else if (imc >= 39.9) {
        img.src = "imgs/obesidade3.png"
    } else {
        img.src = "imgs/patinho.jpg"
    }
})


























//min
let s = document.createElement("label")
s.innerHTML = "minimo"
div.appendChild(s)
div.appendChild(document.createElement("br"))
//inp
s = document.createElement("input")
s.id = "inpmin"
div.appendChild(s)
div.appendChild(document.createElement("br"))
//max
s = document.createElement("label")
s.innerHTML = "maximo"
div.appendChild(s)
div.appendChild(document.createElement("br"))
//inp
s = document.createElement("input")
s.id = "inpmax"
div.appendChild(s)
div.appendChild(document.createElement("br"))

s = document.createElement("BUTTON")
s.innerHTML = "Sorteio"
div.appendChild(s)
div.appendChild(document.createElement("br"))
let y = document.createElement("label")
y.id = "txtsorteio"
y.innerHTML = ""
div.appendChild(y)
div.appendChild(document.createElement("br"))
s.addEventListener("click", () => {
    let mi = Number.parseFloat(document.getElementById("inpmin").value)
    let ma = Number.parseFloat(document.getElementById("inpmax").value)
    let h = document.getElementById("txtsorteio")
    h.innerHTML = Math.floor(Math.random() * (ma - mi) + mi)

})










//sorteio de cores
btncor = document.createElement("BUTTON")
btncor.innerHTML = "Sorteio de cor"
div.appendChild(btncor)
div.appendChild(document.createElement("br"))
let cor = document.createElement("label")
cor.id = "txtsorteiocor"

div.appendChild(cor)
div.appendChild(document.createElement("br"))
btncor.addEventListener("click", () => {
    let h = document.querySelector("#txtsorteiocor")
    let rd = Math.floor(Math.random() * (365))
    let gn = Math.floor(Math.random() * (365))
    let be = Math.floor(Math.random() * (365))
    let codigo = "#" + rd.toString(16) + gn.toString(16) + be.toString(16) 
    h.innerHTML = codigo
    h.style.backgroundColor = codigo
    

})
addEventListener("keypress", (Space)=>{
    let rd = Math.floor(Math.random() * (365))
    let gn = Math.floor(Math.random() * (365))
    let be = Math.floor(Math.random() * (365))
    let codigo = "#" + rd.toString(16) + gn.toString(16) + be.toString(16) 
    div.style.backgroundColor = codigo
})




let numi = document.createElement("input")
numi.id = "numi"
div.appendChild(numi)
div.appendChild(document.createElement("br"))
let numf = document.createElement("input")
numf.id = "numf"
div.appendChild(numf)
div.appendChild(document.createElement("br"))
let btnprimo = document.createElement("BUTTON")
btnprimo.innerHTML = "Numeros primos"
div.appendChild(btnprimo)
div.appendChild(document.createElement("br"))

function primo(num){
 if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

  
btnprimo.addEventListener("click", () => {
    mi = Number.parseFloat(document.getElementById("numi").value)
    ma = Number.parseFloat(document.getElementById("numf").value)
        for(let x = mi; x <= ma; x++){
        if(primo(x) == true){
        let vprimo = document.createElement("label")
        vprimo.innerHTML = x
        div.appendChild(vprimo)
        div.appendChild(document.createElement("br"))
        }         
    }
})

let palavra = document.createElement("input")
palavra.id = "p"
div.appendChild(palavra)
div.appendChild(document.createElement("br"))
let btnpalindromo = document.createElement("BUTTON")
btnpalindromo.innerHTML = "Numeros primos"
div.appendChild(btnpalindromo)
div.appendChild(document.createElement("br"))
let p = document.createElement("label")
div.appendChild(p)
div.appendChild(document.createElement("br"))
btnpalindromo.addEventListener("click", () =>{
    let palavrap = String(document.getElementById("p").value).toLowerCase()
    let palavrai = palavrap.split('').reverse().join('')
    console.log(palavrap)
    console.log(palavrai)
    if(String(palavrai) === String(palavrap)){    
        p.innerHTML ="É palindromo"      
    }else{   
        p.innerHTML ="Não é palindromo"    
    }
})

let conta = document.createElement("input")
conta.id = "p"
div.appendChild(conta)
div.appendChild(document.createElement("br"))
let btnconta = document.createElement("BUTTON")
btnconta.innerHTML = "calcular"
div.appendChild(btnconta)
div.appendChild(document.createElement("br"))
c = document.createElement("label")
div.appendChild(c)
div.appendChild(document.createElement("br"))
btnconta.addEventListener("click", () =>{

})
let calculadora = document.createElement("div")
calculadora.classList.add('calculadora')
document.body.appendChild(calculadora)

let resultado = document.createElement("div")
resultado.innerHTML = "0"
resultado.classList.add('resultado')
calculadora.appendChild(resultado)

let buttons = document.createElement("div")
buttons.classList.add('buttons')
calculadora.appendChild(buttons)

let mais = document.createElement("BUTTON")
mais.innerHTML = "+"
calculadora.classList.add('botao')
buttons.appendChild(mais)

let menos = document.createElement("BUTTON")
menos.innerHTML = "-"
calculadora.classList.add('botao')
buttons.appendChild(menos)

let mult = document.createElement("BUTTON")
mult.innerHTML = "x"
calculadora.classList.add('botao')
buttons.appendChild(mult)

let di = document.createElement("BUTTON")
di.innerHTML = "/"
calculadora.classList.add('botao')
buttons.appendChild(di)

buttons.appendChild(document.createElement("br"))

let sete = document.createElement("BUTTON")
sete.innerHTML = "7"
calculadora.classList.add('botao')
buttons.appendChild(sete)

let oito = document.createElement("BUTTON")
oito.innerHTML = "8"
calculadora.classList.add('botao')
buttons.appendChild(oito)

let nove = document.createElement("BUTTON")
nove.innerHTML = "9"
calculadora.classList.add('botao')
buttons.appendChild(nove)

let igual = document.createElement("BUTTON")
igual.innerHTML = "="
calculadora.classList.add('botao')
buttons.appendChild(igual)

buttons.appendChild(document.createElement("br"))

let quatro = document.createElement("BUTTON")
quatro.innerHTML = "4"
calculadora.classList.add('botao')
buttons.appendChild(quatro)

let cinco = document.createElement("BUTTON")
cinco.innerHTML = "5"
calculadora.classList.add('botao')
buttons.appendChild(cinco)

let seis = document.createElement("BUTTON")
seis.innerHTML = "6"
calculadora.classList.add('botao')
buttons.appendChild(seis)

let ac = document.createElement("BUTTON")
ac.innerHTML = "ac"
calculadora.classList.add('botao')
buttons.appendChild(ac)

buttons.appendChild(document.createElement("br"))

let um = document.createElement("BUTTON")
um.innerHTML = "1"
calculadora.classList.add('botao')
buttons.appendChild(um)

let dois = document.createElement("BUTTON")
dois.innerHTML = "2"
calculadora.classList.add('botao')
buttons.appendChild(dois)

let tres = document.createElement("BUTTON")
tres.innerHTML = "3"
calculadora.classList.add('botao')
buttons.appendChild(tres)

let ponto = document.createElement("BUTTON")
ponto.innerHTML = "."
calculadora.classList.add('botao')
buttons.appendChild(ponto)

buttons.appendChild(document.createElement("br"))

let zero = document.createElement("BUTTON")
zero.innerHTML = "0"
calculadora.classList.add('botao')
buttons.appendChild(zero)

const btn = document.querySelector(".botao")
btn.style.margin = 0
btn.style.padding = 0
btn.style.boxSizing = "border-box"
