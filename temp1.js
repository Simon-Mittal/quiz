const url="https://opentdb.com/api.php?amount=10"
let click=true
let c=0
let ques=[]
const x=document.querySelector(".yellow")
const op1=document.querySelector(".opt1")
const op2=document.querySelector(".opt2")
const op3=document.querySelector(".opt3")
const op4=document.querySelector(".opt4")
const demo=async()=>{
  const response = await fetch(url)
  const data=await response.json()
  ques=data.results
}
const clear=()=>{
  op1.style.backgroundColor=""
  op2.style.backgroundColor=""
  op3.style.backgroundColor=""
  op4.style.backgroundColor=""
}
const disp=()=>{
  if (ques.length===0)
  {
    demo().then(()=>disp())
    return 
  }
  const current = ques[c];
  c = (c + 1) % ques.length;  
  const question=current.question
  const correct=current.correct_answer
  const incorrect=current.incorrect_answers
  var op=[...incorrect]
  let ri=Math.floor(Math.random()*4)
  op.splice(ri,0,correct)
  x.innerText=question
  op1.innerText=op[0]
  op2.innerText=op[1]
  op3.innerText=op[2]
  op4.innerText=op[3]
  clear()
  op1.onclick=()=>{
    clear()
    op1.style.backgroundColor=(ri===0)?"green":"darkred"
  }
  op2.onclick=()=>{
    clear()
    op2.style.backgroundColor=(ri===1)?"green":"darkred"
  }
  op3.onclick=()=>{
    clear()
    op3.style.backgroundColor=(ri===2)?"green":"darkred"
  }
  op4.onclick=()=>{
    clear()
    op4.style.backgroundColor=(ri===3)?"green":"darkred"  
  }
}
const start=()=>{
  const x = document.querySelector(".btn")
  if (click)
  {
    x.innerText="Next question"
    click=false
    demo().then(() => disp());
  }
  else  
    disp()
}
