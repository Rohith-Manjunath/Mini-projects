const buttons=document.querySelectorAll("#btn");
let turn=true;
const player=document.querySelector("h2");


function Turn(){
    buttons.forEach(cell=>cell.addEventListener("click",()=>{
        turn?cell.textContent="X":cell.textContent="O"

    }))
turn=!turn;
}

buttons.forEach(button=>button.addEventListener("click",()=>{
    Turn()
}))

