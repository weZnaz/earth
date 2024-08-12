let myscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
let wint=0;
let loset=0;
const myscoret=document.querySelector("#myscore");
const compscoret=document.querySelector("#compscore");

const gencomchoice= ()=>{
  const option=["rock","paper","scissor"];
  const randindx=Math.floor(Math.random()*3);
   return option[randindx];
}

const draw=(userchoice,compchoice)=>{

console.log("game draw");
msg.innerText=`Its a draw :| .You both choice ${compchoice}`;
msg.style.backgroundColor="black";
};
const win=(userchoice,compchoice) =>{
  console.log("game won!");
  msg.innerText=`You won :) . Your ${userchoice} beats computer choice ${compchoice}`;
  wint++;
  myscoret.innerText=wint;
  msg.style.backgroundColor="green";

}

 const lose=(userchoice,compchoice) =>{
  console.log("game lose :(");
  msg.innerText=`You lose :( . computer choice ${compchoice} beats your ${userchoice} `;
  loset++;
 compscoret.innerText=loset;
 msg.style.backgroundColor="red";
}



const whowiiwin=(userchoice)=>{
  console.log("user choice is",userchoice);
  const compchoice=gencomchoice();
  console.log("comp choice is",compchoice);

  if(userchoice===compchoice)
    draw(userchoice,compchoice);
  else if(userchoice==="rock" && compchoice==="scissor")
    win(userchoice,compchoice);
  else if(userchoice==="rock" && compchoice==="paper")
    lose(userchoice,compchoice);
  else if(userchoice==="paper" && compchoice==="scissor")
    lose(userchoice,compchoice);
  else if(userchoice==="paper" && compchoice==="rock")
    win(userchoice,compchoice);
  else if(userchoice==="scissor" && compchoice==="rock")
    lose(userchoice,compchoice);
  else if(userchoice==="scissor" && compchoice==="paper")
    win(userchoice,compchoice);
}

const getchoice=document.querySelectorAll(".choice");
getchoice.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
       whowiiwin(userchoice);
    
  });
});

