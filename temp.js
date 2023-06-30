let inputType = document.getElementById("inputType")
let outputType = document.getElementById("outputType")
let result = document.getElementById("result")

document.getElementById("btn").addEventListener("click", ()=>{
    let x = document.getElementById("input").value;
    if(inputType.value === "celsius" && outputType.value === "fahrenheit"){
        result.innerHTML = `${(x*(9/5))+32}°F`
    }
    // else if(inputType.value === "celsius" && outputType.value === "kelvin"){
    //     result.innerHTML = x+273.15
    // }

    else if(inputType.value === "celsius" && outputType.value === "kelvin"){
            result.innerHTML = `${x+273.15}K`
    }
    else if(inputType.value === "celsius" && outputType.value === "celsius"){
        result.innerHTML = x
    }
    else if(inputType.value === "fahrenheit" && outputType.value === "celsius"){
        result.innerHTML = `${(x-32)*(5/9)}°C`
    }
    else if(inputType.value === "fahrenheit" && outputType.value === "kelvin"){
        result.innerHTML = `${(5/9)*(x-32) + 273.15}`
    }
    else if(inputType.value === "fahrenheit" && outputType.value === "fahrenheit"){
        result.innerHTML = x
    }
    else if(inputType.value === "kelvin" && outputType.value === "celsius"){
        result.innerHTML = `${(x-273.15)}°C`
    }
    else if(inputType.value === "kelvin" && outputType.value === "fahrenheit"){
        result.innerHTML = `${((x-273.15)*(9/5))+32}°F`
    }
    else if(inputType.value === "kelvin" && outputType.value === "kelvin"){
        result.innerHTML = x
    }
    
})