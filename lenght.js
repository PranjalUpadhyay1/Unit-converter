let inputType = document.getElementById("inputType")
let outputType = document.getElementById("outputType")
let result = document.getElementById("result")

document.getElementById("btn").addEventListener("click", ()=>{
    let x = document.getElementById("input").value;
    if(inputType.value == "meter" && outputType.value == "miles"){
        result.innerHTML = x*0.00062137
    }
    else if(inputType.value == "meter" && outputType.value == "feat"){
        result.innerHTML = x*3.28084
    }
    else if(inputType.value == "meter" && outputType.value == "meter"){
        result.innerHTML = x
    }
    else if(inputType.value == "miles" && outputType.value == "meter"){
        result.innerHTML = x*1609.34
    }
    else if(inputType.value == "miles" && outputType.value == "feat"){
        result.innerHTML = x*5280
    }
    else if(inputType.value == "miles" && outputType.value == "miles"){
        result.innerHTML = x
    }
    else if(inputType.value == "feat" && outputType.value == "meter"){
        result.innerHTML = x*0.3048
    }
    else if(inputType.value == "feat" && outputType.value == "miles"){
        result.innerHTML = x*0.000189394
    }
    else if(inputType.value == "feat" && outputType.value == "feat"){
        result.innerHTML = x
    }
    
})