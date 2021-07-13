window.addEventListener('scroll', () => {
     let header =  document.getElementById('header')
     let position = scrollY > 20
    header.classList.toggle('change', position )
})

let names = document.querySelector('#name')
let tel = document.querySelector('#tel')
let email = document.querySelector('#mail')
let popUp = document.querySelector('.alert')
function sub(){

let number = document.getElementById('number').value
let priceOfpass = document.querySelector('.calc')
priceOfpass.innerHTML = `Sum Total: $ ${eval(number * 45)}`
 
}

let form = document.getElementById('myform')
form.addEventListener('submit', checkvalues)

function checkvalues(e){
     e.preventDefault();

     if(names.value == 0 || names.value.length < 4){
          popUp.textContent = "name must be at least five characters"
          names.style.color = 'red'
     }else if(tel.value == 0 || tel.value.length < 10){
          popUp.textContent = "tel must be correct"
          tel.style.color = 'red'
     }else if(email.value == 0 || email.value.length < 11){
         popUp.textContent = "email must be correct"
          email.style.color = 'red'
     }else{
          popUp.textContent = "form delivered !"
          popUp.style.color = 'green'
     }
}
