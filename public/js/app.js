let res__nav= document.querySelector("#res__nav")
let hamburger = document.querySelector("#hamburger")
let close = document.querySelector("#close__btn")

hamburger.addEventListener("click" , function(){
    res__nav.classList.add("top-0")
    res__nav.classList.remove("top-[-1000%]")
})
close.addEventListener("click" , function(){
    res__nav.classList.remove("top-0]")
    res__nav.classList.add("top-[-1000%]")
})

let hero_btn = document.querySelectorAll("#hero_btn")
let form = document.querySelector("#form")
let form__close = document.querySelector("#form__close")

hero_btn.forEach(function(item , index){
    item.addEventListener("click" , function(){
        form.classList.add("left-0")
        form.classList.remove("left-[-100%]")
    })
})
form__close.addEventListener("click" , function(){
    form.classList.remove("left-0")
    form.classList.add("left-[-100%]")
})
let form__sel = document.querySelectorAll("#form__sel")
let form__sel__text = document.querySelectorAll("#form__sel__text")

form__sel.forEach(function(item , index){
    item.addEventListener("click" , function(){
        form__sel[index].classList.toggle("h-[53px]")
        form__sel[index].classList.toggle("h-[381px]")
        form__sel[index].classList.toggle("md:pl-[112px]")
        form__sel__text.forEach(function(item , index){
            form__sel__text[index].classList.toggle("md:justify-center")
            form__sel__text[index].classList.toggle("pb-4")
            form__sel__text[index].classList.toggle("pb-[10px]")
        })
        form__sel[index].classList.toggle("pt-4")
        form__sel[index].classList.toggle("py-4")
    })
})

let katalog__box = document.querySelector("#katalog__box")
let katalog__text__box = document.querySelector("#katalog__text__box")
katalog__box.addEventListener("click" , function(){
    katalog__box.classList.toggle("h-[56px]")
    katalog__box.classList.toggle("h-[257px]")
    katalog__text__box.classList.toggle("pb-4")
})