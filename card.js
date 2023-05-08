let errorNumber = document.getElementById('errorNumber')
const errorName = document.getElementById('errorName')
const errorDate = document.getElementById('errorDate')
const errorCvc = document.getElementById('errorCvc')
const name1 = document.getElementById('name')
const submit = document.getElementById('submit')
let cardName = document.getElementById('cardName')
let formName =document.getElementById('formName')
let nameUser = ''
let cardNumber = document.getElementById('cardNumber')
let formNumber = document.getElementById('formNumber')
let cardMonth = document.getElementById('cardMonth')
let cardYear = document.getElementById('cardYear')
let cardCvv = document.getElementById('cardCvv')
let formMonth = document.getElementById('formMonth')
let formYear = document.getElementById('formYear')
let formCvv = document.getElementById('formCvv')
const complete = document.getElementById('complete')
const form = document.getElementById('form')

let current =''
const maskNumber = '#### #### #### ####'
let number = []





formNumber.addEventListener('keydown',(e)=>{
    if(e.key==='tab'){
        return
    }
    e.preventDefault()
    handleInput(maskNumber,e.key,number)
    formNumber.value = number.join('')
})

function handleInput(mask,key,arr){
    let numbers = ['0','1','2','3','4','5','6','7','8','9']
    if(key ==='Backspace' && arr.length > 0){
        arr.pop()
        return
    }
    if(numbers.includes(key) && arr.length+1 <= mask.length){
        errorNumber.style.display = 'none'
        if(mask[arr.length] === ' '){
            arr.push(mask[arr.length],key)
        } else{
            arr.push(key)
        }
    } else{
        errorNumber.style.display = 'block'
    }
}

submit.addEventListener('click',(e)=>{
    e.preventDefault()

    if(formName.value==='' || formMonth.value==='' || formYear==='' || formCvv==='' || formNumber===''){
        errorName.style.display='block'
        errorDate.style.display='block'
        errorCvc.style.display='block'
    }
    else{
        errorName.style.display='none'
        errorDate.style.display='none'
        errorCvc.style.display='none'
        nameUser = formName.value
        cardName.textContent = nameUser
        cardNumber.textContent = formNumber.value
        cardMonth.textContent = formMonth.value
        cardYear.textContent = formYear.value
        cardCvv.textContent = formCvv.value
        form.style.display = 'none'
        complete.style.display = 'flex'
        }
    
})
