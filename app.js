let boxes = document.querySelectorAll(".box");
let restetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let winMsg = document.querySelector("#win-msg");

let turnO = true;    // playerX, playerO

const winPatterns = 
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>
{
    box.addEventListener("click",()=>
    {
        
      if(turnO=== true)
      {
        box.innerText = "O";
        turnO = false;
      }
      else{
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      checkWinner();
    })
})

// this function is to reset the game
const resetGame =() =>{
  turnO = true;
   enableBoxes();
   msgContainer.classList.add("hide");
}

// this function enables when we want to reset the game 
const enableBoxes = ()=>{

  for(let box of boxes)
  {
    box.disabled = false;
    box.innerText ="";
  }
}

// this function enables when, we got the winner and all the boxes gets disabled
const disableBoxes = ()=>{

  for(let box of boxes)
  {
    box.disabled = true;
  }
}


// this function is to show the winner 
let showWinner = (winner) =>{

winMsg.innerText = `Congratulation, winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();

}

// this function is to check the winner of the game
const checkWinner = () =>
{
  // iterate over all the winning patterns
    for(let pattern of winPatterns)
    {
       let pos1Val = boxes[pattern[0]].innerText; 
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;


       if(pos1Val !="" && pos2Val!="" && pos3Val!="")
       {
        if(pos1Val === pos2Val && pos2Val=== pos3Val)
        {
  
          showWinner(pos1Val);
        }
       }
    }

};

newGameBtn.addEventListener("click",resetGame);
restetBtn.addEventListener("click",resetGame);
