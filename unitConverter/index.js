inputEl = document.getElementById('valor')
botonEl = document.getElementById('boton')
valoresEl = document.getElementById('valores')

botonEl.addEventListener('click', ()=>{
    valor1.innerHTML = `${inputEl.value} 
        metros = ${((inputEl.value)*3.281).toFixed(3)} 
        | ${inputEl.value} pies = ${((inputEl.value)/3.281).toFixed(3)} 
        metros`

    valor2.innerHTML = `${inputEl.value} 
        litros = ${((inputEl.value)*0.264).toFixed(3)} 
        | ${inputEl.value} galones = ${((inputEl.value)/0.264).toFixed(3)} 
        litros`

    valor3.innerHTML = `${inputEl.value} 
        kilos = ${((inputEl.value)*2.204).toFixed(3)} 
        | ${inputEl.value} libras = ${((inputEl.value)/2.204).toFixed(3)} 
        kilos`
    inputEl.value=''
})
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
