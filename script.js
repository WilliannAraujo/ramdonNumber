
function generateNumber(){
    const paragrafo = document.querySelector('.paragrafo')
    const initialNumber = Math.ceil(document.querySelector(".initial-number").value)
    const finalNumber = Math.floor(document.querySelector(".final-number").value)
    const result = Math.floor(Math.random() * (finalNumber - initialNumber + 1) ) + initialNumber;
    
    paragrafo.innerHTML = `O número é: ${result}`
    paragrafo.style.background ='#27272A'
    paragrafo.style.border = '1px solid #fff'
    window.location.href = '#fim'
}