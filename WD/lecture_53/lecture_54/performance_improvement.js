// // code1
// const t1=performance.now();
// for(let i=1;i<=100;i++){
//   let para=document.createElement('p');
//   para.textContent="This ia para" +i;
//   document.body.appendChild(para);
// }
// const t2=performance.now();
// console.log("Total time by code 1 : "+(t2-t1));

// //code2
// const t3=performance.now();
// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//   let para=document.createElement('p');
//   para.textContent=("This is para "+ i);
//   mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);
// const t4=performance.now();
// console.log("Total time taken by code2: "+(t4-t3));

//best code

// let fragment=document.createDocumentFragment();
// for(let i=1;i<101;i++){
//   let para=document.createElement('p');
//   para.textContent="This is para: "+i; // no reflow and no repaint
//   fragment.appendChild(para);
// }
// document.body.appendChild(fragment); //1 reflow ang 1 repaint

//Async-wait and fetch API 
// async function getdata() {
//   setTimeout(function(){
//   console.log("I am inside of settime block.")},5000);  
  
// }
// // getdata();

// async function getdata() {

//   //get asyn request
//   let respoonse =await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//   //parse json -async
//   let  data=await respoonse.json();
//   alert(data);
//   console.log(data);
  
// }
// getdata();


//closer

function outerfunction(){
  let name="Rahul";

  function innerfunction(){
    console.log(name);
    alert(name);
    
  }
  return innerfunction;
}

let inner=outerfunction();
inner();