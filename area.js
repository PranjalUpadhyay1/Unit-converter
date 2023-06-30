let inputType = document.getElementById("inputType")
let outputType = document.getElementById("outputType")
let result = document.getElementById("result")

document.getElementById("btn").addEventListener("click", ()=>{
    let x = document.getElementById("input").value;
    if(inputType.value == "meter" && outputType.value == "hectare"){
        result.innerHTML = x*0.0001
    }
    else if(inputType.value == "meter" && outputType.value == "acre"){
        result.innerHTML = x*0.000247105
    }
    else if(inputType.value == "meter" && outputType.value == "meter"){
        result.innerHTML = x
    }
    else if(inputType.value == "hectare" && outputType.value == "meter"){
        result.innerHTML = x*10000
    }
    else if(inputType.value == "hectare" && outputType.value == "acre"){
        result.innerHTML = x*2.4711
    }
    else if(inputType.value == "hectare" && outputType.value == "hectare"){
        result.innerHTML = x
    }
    else if(inputType.value == "acre" && outputType.value == "meter"){
        result.innerHTML = x*4046.86
    }
    else if(inputType.value == "acre" && outputType.value == "hectare"){
        result.innerHTML = x*0.404686
    }
    else if(inputType.value == "acre" && outputType.value == "acre"){
        result.innerHTML = x
    }
    
})