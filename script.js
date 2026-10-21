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