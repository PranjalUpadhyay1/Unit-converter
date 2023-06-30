let inputType = document.getElementById("inputType")
let outputType = document.getElementById("outputType")
let result = document.getElementById("result")

document.getElementById("btn").addEventListener("click", ()=>{
    let x = document.getElementById("input").value;
    if(inputType.value == "kg" && outputType.value == "pounds"){
        result.innerHTML = x*2.20462
    }
    else if(inputType.value == "kg" && outputType.value == "ounce"){
        result.innerHTML = x*35.27396
    }
    else if(inputType.value == "kg" && outputType.value == "kg"){
        result.innerHTML = x
    }
    else if(inputType.value == "pounds" && outputType.value == "kg"){
        result.innerHTML = x* 0.45359237
    }
    else if(inputType.value == "pounds" && outputType.value == "ounce"){
        result.innerHTML = x*16
    }
    else if(inputType.value == "pounds" && outputType.value == "pounds"){
        result.innerHTML = x
    }
    else if(inputType.value == "ounce" && outputType.value == "kg"){
        result.innerHTML = x*0.028349523
    }
    else if(inputType.value == "ounce" && outputType.value == "pounds"){
        result.innerHTML = x/16
    }
    else if(inputType.value == "ounce" && outputType.value == "ounce"){
        result.innerHTML = x
    }
    
})