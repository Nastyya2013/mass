let w = document.querySelector('.weight')
let h = document.querySelector('.height')
let btn = document.querySelector('.btn')
let res = document.querySelector('.result')
let r




btn.addEventListener('click', function(){
   weight = w.value
   height = h.value
   r = weight/((height/100)*(height/100))




   if(r<18.5){
    res.innerHTML = 'Недостатня вага'
   }else if(r<25){
    res.innerHTML = 'нормальна вага'
   }else {
    res.innerHTML = 'Надмірна вага'
   }
   
})
