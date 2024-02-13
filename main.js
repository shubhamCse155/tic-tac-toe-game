let button=document.querySelectorAll(".box");
let winnerBox=document.querySelector("#win");
let restartBtn=document.querySelector("#restart")
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

let firstTurn=true;
let markedBox=0;
button.forEach((Element)=>{
    Element.addEventListener("click",()=>{
        if(firstTurn){
        Element.innerText="O";
        firstTurn=false;
        }else{
           Element.innerText="X";
           firstTurn=true;
        }
        Element.disabled=true;
        markedBox++;
        let isWinner=checkWinner();

        if(markedBox==9 && !isWinner){
            winnerBox.innerText="Draw !! Both played well"
            winnerBox.style.color="red"
        }

    })
});

const showWinner=(name)=>{
    button.forEach((ele)=>{
        ele.disabled=true;
    })
    winnerBox.innerText=`Congratulation !! The winner is ${name}`
    winnerBox.style.color="rgb(2, 243, 2)"
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = button[pattern[0]].innerText;
      let pos2Val = button[pattern[1]].innerText;
      let pos3Val = button[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };

  const restart=()=>{
    button.forEach((ele)=>{
        ele.disabled=false;
        ele.innerText="";
    })
    markedBox=0;
    winnerBox.innerText="";
  }

  restartBtn.addEventListener("click",restart);