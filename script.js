console.log(window.screen)

window.document.body.innerHTML="<p> OLÁ</p>"
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
//funcao

//botao
 temp = document.createElement("BUTTON")
temp.innerHTML= "botao"
div.appendChild(temp)
div.appendChild(document.createElement("br"))
let x = document.createElement("label")
x.id = "imc"
div.appendChild(x)
div.appendChild(document.createElement("br"))
temp.addEventListener("click", ()=> {
var p =Number.parseFloat( document.getElementById("inppeso").value)
var a =Number.parseFloat( document.getElementById("inpaltura").value)
var imc = (p / (a*a))
x.innerHTML = imc;

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
s.innerHTML= "Sorteio"
div.appendChild(s)
div.appendChild(document.createElement("br"))
let y = document.createElement("label")
y.id = "txtsorteio"
y.innerHTML = ""
div.appendChild(y)
div.appendChild(document.createElement("br"))
s.addEventListener("click", ()=>{
    let mi = Number.parseFloat(document.getElementById("inpmin").value)
    let ma = Number.parseFloat(document.getElementById("inpmax").value)
    let h = document.getElementById("txtsorteio")
        h.innerHTML = Math.floor(Math.random()*(ma-1) + mi)
    
})