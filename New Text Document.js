var btn = document.querySelector('.btn')
var show= document.querySelector('.how')
var input= document.querySelector('input')


function showhow(){
    let number=input.value.length
    show.innerHTML=number
    setTimeout(function() {
       input.value=""
       show.innerHTML=""
    }, 5000);
}
// btn.addEventListener('click', )
btn.addEventListener("click",showhow)