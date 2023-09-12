const hr = document.getElementById('hora')
const min = document.getElementById('minutos')
const seg = document.getElementById('segundos')
const data = document.getElementById('data-atual')

const relogio = setInterval(()=>{


    let dataDeHoje = new Date()
    let horas = dataDeHoje.getHours()
    let minutos = dataDeHoje.getMinutes()
    let segundos = dataDeHoje.getSeconds()
    let dia = dataDeHoje.toLocaleDateString('pt-br')

    
    if(horas<10){
        horas = '0' + horas
    }
    if(minutos<10){
        minutos = '0' + minutos
   }
   if(segundos<10){
    segundos = '0' + segundos
}

    hr.textContent = horas
    min.textContent = minutos
    seg.textContent = segundos
    data.textContent = dia




}, 1000)