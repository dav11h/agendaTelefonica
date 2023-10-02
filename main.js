let tb = document.querySelector('tbody')
let inpTel = document.querySelector('#tel')
let inpText = document.querySelector('#nome')
let button = document.querySelector('#button')

button.addEventListener('click', function(e){
    e.preventDefault()

    adicionar()
})

function adicionar(){
    if(inpTel.value.length >= 6 && inpTel.value.length <= 15 && inpText.value.length >= 1){
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')

        td1.innerHTML = `${inpText.value}`
        td2.innerHTML = `${inpTel.value}`    
        
        tr.appendChild(td1)
        tr.appendChild(td2)

        tb.appendChild(tr)
    } else{
        alert('Dados incompletos, ou errados digite novamente')
        console.error('Dados errados ou incompletos')
    }
}