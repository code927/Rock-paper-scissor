 //DECLARE SOME VARIABLES
 let round=0
 let playerscore=0
 let cmpscore=0

 let pselect
 let cselect
 let Round
 let result
 let display
 let key

 // DOM MANIPULATION 
 let player = document.getElementById('player')
 let cmp = document.getElementById('cmp')
 let choice = document.querySelectorAll(".container button")

//ACT LIKE A MAIN FUNCTION 

    choice.forEach(choice=> {
     
    choice.addEventListener("click",function(){         
    round++
     pselect= playerselect(choice,computerselect) //callback of player selection and computer selection
     result = decision(pselect,cselect)
     Round = decideround(displayresults) //callback of round and result function

})
})

//GET USER CHOICE

function playerselect(ps,computerselect){
    const plarray=["ROCK","PAPER","SCISSOR"]
                
     key = plarray[ps.id]
 //  return new Promise((resolve, reject) => {
if(key=="ROCK")
{
 player.innerHTML='<img src="rock.png"  style="height: 130px;" >'
 
}
else if(key=="PAPER"){
 player.innerHTML='<img src="paper.png"  style="height: 100px;">'
}
else {
 player.innerHTML='<img src="scissor.png"  style="height: 80px;" >'

}
cselect = computerselect()


fetch(computerselect)
.then((computerselect)=>{
return computerselect.json()
})
  return key

}


//COMPUTER CHOICE GENERATE

 function computerselect(){
  
 const cmpobj = {
    a: "ROCK",
    b: "PAPER",
    c:"SCISSOR"
 }
let keys = Object.keys(cmpobj)
 let index = keys[Math.floor(Math.random()*keys.length)]
 if(cmpobj[index]=="ROCK")
 {
     cmp.innerHTML='<img src="rock.png"  style="height: 130px;" >'
   //  return cmpobj[index]
 }
 else if(cmpobj[index]=="PAPER"){
     cmp.innerHTML='<img src="paper.png"  style="height: 100px;">'
   // return cmpobj[index]
 } 
 else{
 cmp.innerHTML='<img src="scissor.png"  style="height: 80px;" >'
 //return cmpobj[index]
}

       
     return cmpobj[index]
}
  
 
//DECIDE THE WINNER OF THE ROUND
    
function decision(player,computer){
 if(player==computer)
     {
         return "TIE!"
     }
 else if(
  (player=="ROCK" && computer=="SCISSOR") || 
  (player=="PAPER" && computer=="ROCK" ) ||
  (player=="SCISSOR" && computer=="PAPER")
         )
      {
         playerscore++
         
         return "YOU WIN "
     }
 else{
     cmpscore++
     return "COMPUTER WIN"
     }
  }

//MANAGE THE GAME ROUNDS

    let decideround = ()=>{
     if(round>=3)
    {
     if(playerscore>cmpscore)
     {
         setTimeout(()=>{
            alert("YOUR SCORE IS "+playerscore+" WHILE COMPUTER SCORE IS "+cmpscore+" SO YOU WIN THIS GAME!")
            reset()
             },500)
     }
     else if(cmpscore>playerscore){
         setTimeout(()=>{
            alert("YOUR SCORE IS "+playerscore+" WHILE COMPUTER SCORE IS "+cmpscore+" SO COMPUTER WIN THIS GAME!")
            reset()
         },500)
     }
      else{
         setTimeout(()=>{
            alert("YOUR SCORE IS "+playerscore+" WHILE COMPUTER SCORE IS "+cmpscore+" SO IT'S A TIE GAME!")
            reset()
     },500)
      }  
    } 
    
    display = displayresults(decideround)
    }

//DISPLAY THE RESULT ON GAME ROUNDS BASIS

let displayresults=()=>{

 // Get the table and tbody
 let table = document.getElementById("tb");
 let tbody = table.getElementsByTagName("tbody")[0];

 // Create a new row and cells
let newRow = tbody.insertRow();
 let cell1 = newRow.insertCell(0);
 let cell2 = newRow.insertCell(1);
 let cell3 = newRow.insertCell(2);
 let cell4 = newRow.insertCell(3);

 // Add data to the cells
cell1.innerHTML = round
cell2.innerHTML = key
cell3.innerHTML= cselect
cell4.innerHTML= result
 
}

function eraseTable() {
 // Get the table body
 let tbody = document.querySelector("#tb tbody");

 // Remove all rows from the tbody except the first row (header)
 while (tbody.rows.length > 0) {
   tbody.deleteRow(0);
 }
}

//RESET THE GAME

function reset(){
player.innerHTML=""
cmp.innerHTML=""
round=0
playerscore=0
cmpscore=0
eraseTable()
}