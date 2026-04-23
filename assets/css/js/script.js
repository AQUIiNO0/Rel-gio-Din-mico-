const horas = document.getElementById('Horas')
const Minutos = document.getElementById('Minutos')
const Segundos = document.getElementById('Segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let Hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (Hr < 10) Hr = '0' + Hr;

    if (mn < 10) mn = '0' + mn;

    if (seg < 10) seg = '0' + seg;
    horas.textContent = Hr;
    Minutos.textContent = mn;
    Segundos.textContent = seg;

})

