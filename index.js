let btn = document.querySelector('.btn')
let show= document.querySelector('.how')
let input= document.querySelector('input')
let inputrevesed=document.querySelector('.reverse')

function reverseString() { 
    let str=input.value
    return str.split('').reverse().join('');
  }
function showhow(){
    let number=input.value.length
    show.innerHTML=number
    let nama=reverseString()
    inputrevesed.innerHTML=nama
    setTimeout(function() {
       input.value=""
       show.innerHTML=""
       inputrevesed.innerHTML=""
    }, 5000);

}
btn.addEventListener("click",showhow)

  