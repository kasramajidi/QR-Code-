const btn = document.querySelector(".btn")
const inputText = document.querySelector("input")
const container = document.querySelector(".container")

btn.addEventListener("click", qrCode)


async function qrCode(e) {
    const divImg = document.querySelector(".qr-code-div")

    const valueInput = inputText.value

    if (valueInput === ""){
        return alert("لطفا مقدار وارد کنید")
    }

    if (divImg){
        divImg.remove()
    }

    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(valueInput)}`

    const divElm = document.createElement("div")
    divElm.classList.add("qr-code-div")
    const imgElm = document.createElement("img")
    imgElm.classList.add("qr-code-div-img")
    imgElm.src = url
    divElm.append(imgElm)
    container.appendChild(divElm)
    
    inputText.value = ""
}
