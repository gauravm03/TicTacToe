const boxes= document.querySelectorAll(".box");
const gameInfo= document.querySelector(".game-info");
const button =document.querySelector(".btn");

let currentPlayer;
let Gamegrid;

const winningpositions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [],
  [],
  []
];

//let create a function jo game ko initialize karega

function initializeGame(){
    button.classList.add("active");
    currentPlayer="X";
    Gamegrid=["","","","","","","","",""];
    //box ko khali karne k liye
boxes.forEach((box,index)=>{
    box.innerText="";
    boxes[index].style.pointerEvents="all";
    box.classList=`box box${index+1}`
 });
   
    gameInfo.innerText=`Player-1 ${currentPlayer}`;
}

initializeGame();



function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X";
    }
    gameInfo.innerText=`Player ${currentPlayer}`
}



function checkGameover(){
          //jeeta kon answer mei store hoga
          let answer;

}


function handleClick(index){
    if(Gamegrid[index]==="")
    {
        boxes[index].style 
        boxes[index].innerHTML=currentPlayer;//ye UI ko darsha raha hai
        
        Gamegrid[index]=currentPlayer;//ye humare gamegrid ko darsha raha jo ki line 23 pe hai taki box grid ka status check kar sake
        boxes[index].style.pointerEvents="none";
        swapTurn();
        checkGameover();
    }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
});


button.addEventListener("click",initializeGame);