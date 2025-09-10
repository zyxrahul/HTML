let todo=[];

let req=prompt("Enter your req:- ");

while(true){
  if(req=="quit"){
    console.log("Exit from app.");
    break;
  }
  else if(req=="list"){
    console.log("----------");
    for(let i=0;i<todo.length;i++){
      console.log(todo[i]);
    }
    console.log("-------");
  }
  else if(req=="add"){
    let n=prompt("Enter what you add:- ");
    todo.push(n);
  }
  else if(req=="delete"){
    let idx=prompt("Enter the index which you remove: ");
    todo.splice(idx,1);
  }
  else{
    console.log("please entee valid req.");

  }

  req=prompt("Enter your req:- ");
}