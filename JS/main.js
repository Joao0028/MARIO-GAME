const mario = document.querySelector(".mario")
const tubo = document.querySelector(".tubo")

document.addEventListener("keydown", ()=>{
    mario.classList.add("pulo")
    setTimeout(()=>{
        mario.classList.remove("pulo")
    },500)
    console.log();

   
   
})

const loop = setInterval(()=>{
    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' '); // window.getComputedStyle(mario)."Alguma propiedade do css..." - Então, básicamente essa função passa para o computador as mudanças no elemento escolhido, que no caso foi o "bottom", que está com uma função de aumentar e abaixar... E dependendo do tanto de px que ele estiver da para montar uma function dizendo que quer que aconteça algo quando estiver em tantos px...

    console.log(marioPosition)

    if(tuboPosition <= 140 && tuboPosition > 0 && marioPosition < 88){
        tubo.style.animation = "none"
        tubo.style.left = `${tuboPosition}px`

        mario.style.animation = "none"
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'IMG/Morto.webp'
        mario.style.width = "120px"

        clearInterval(loop)// Faz o LOOP do console para de contar... quando o jogo acaba...
    }
})
console.log(loop)

//right:75%;