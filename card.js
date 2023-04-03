let error = document.getElementById('error')
const name1 = document.getElementById('name')


name1.addEventListener('focus',()=>{
    if(name1.value==''){
        name1.style.borderColor= 'red'
    }
})