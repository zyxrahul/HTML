// const Twitter={
//    userName: "Rahul_patel",
//    content: "Gaming",
//    likes: 500,
//    repost: 85,
//    tags: ["@dce","@ujbal","@aman","@pankaj","@shivam"]
// }

// const classinfo = [
//    rahul={
//       class:"Btech",
//       gender: "male" 
//    },
//    shivam={ 
//       class:"Cs",
//       gender:"MAle"

//    },
//    satyam={
//       class:"civil",
//       gender:"male"

//    }
// ]

// let random=Math.ceil(Math.random()*5);
// console.log(random)


// let max=prompt("Enter max number: ");
// let number=Math.ceil(Math.random()*max);
// let guess=prompt("Guess the number: ");
// while(true){
//    if(guess=="quit"){
//       console.log("looser looser ! ");
//       break;

//    }
//    if(guess==number){
//       console.log("congat ! you guess the number.number is ",number);
//       break;
//    }
//    else if (guess < number){
//       guess=prompt("HINT: You guess too small , Try again: ")
//    }
//    else{
//       guess=prompt("HINT: You guess too big , Try again: ")
//    }
// }

// function poem(){
//  console.log("Twinkle Twinkle ,Little Star \n HOw are wonder waht you are ")

// }
// poem();

// function dice(){
//   let d=Math.ceil(Math.random()*6);
//   console.log(d);
// }
// dice()
// dice()

// function avg(a,b,c){
//    let res=(a+b+c)/3;
//    console.log(res);
// }

// avg(5,7,8);
// avg(16,12,18);

// function table(n){
//    for(let i=1;i<11;i++){
//       console.log(i*n);
//    }
// }
// table(5);
// table(8);

// function sum(n){
//    let res=0;
//    for(let i=1;i<=n;i++){
//       res+=i;
//    }
//    return res;
// }
// console.log(sum(5));

// function concat(arr){
//    let result="";
//    for(let i=0;i<arr.length;i++){
//       result+=arr[i];
//    }
//    return result;
// }
//  let str=["hi","Rahul","Kumar"];
//  console.log(concat(str));

// let greet="Hello";
// function changegreet(){
//    let greet="Rahul";
//    console.log(greet);
//    function innergrret(){
//       console.log(greet);
//    }
//   innergrret();
// }

// console.log(greet);
// changegreet();
// innergrret();

// function factory(req){
//    if(req=="odd"){
//       return function(n){
//          console.log(!(n%2==0));
//       }
//    }
//    else if(req=="even"){
//       return function(n){
//          console.log(n%2==0);
//       }
//    }
//    else{
//       return console.log("Wrong Request !")
//    }
// }
// let Request="odd";
// factory(Request);


// const cal={
//    add(a,b){
//       return a+b
//    },
//    sub(a,b){
//       return a-b
//    },
//      mul(a,b){
//       return a*b
//    }
// }


// function search(arr,num){
//    for(let i=0;i<arr.length;i++){
//       if(arr[i]>num){
//          num=arr[i];
//       }
//    }
//    return num;
// }

// ar=[10,20,5,23,6,96,52,14];
// console.log(search(ar,50));


// function find(str){
//    let count=0;
//    let vow=['a','e','i','o','u'];
//    for(let i=0;i<str.length;i++){
//       for(let j=0;j<vow.length;j++){
//          if(str[i]==vow[j]){
//             count++;
//          }
//       }
//    }
//    return count;
// }

// stry="abcdefaec";
// console.log(find(stry));


//arrow function
// const sum=(a,b,c) => {
//    console.log(a+b+c);
// }
// sum(10,20,20)
// const pow=(a,b) =>{
//    return a**b;
// }


// console.log("Hi Rahul !");
// setTimeout(()=> {
//    console.log("Cyber Security.");
// },4000);
// console.log("My branch name is ")

// let id=setInterval(() => console.log("Hello"),2000);
// console.log(id);
// let id1=setInterval(() => {
//          console.log("Rahul !");   
// }, 2000);
// console.log(id1)

// const student ={
//    name: "Rahul",
//    marks:99,
//    prop:this,
//    getname:()=>{
//       console.log(this);
//       return student.marks;
//    },
//    getinfo1:()=>{
//       console.log(this);
//    }
   
// }


// let id=setInterval(()=>{
//    console.log("Hello world !")
// },2000);

// setTimeout(() => {
//    clearInterval(id);
// }, 10000);


// const  arrayaverage = (arry) =>{
//    let n=arry.length;
//    let sum=0;
//    for(let i=0;i<n;i++){
//       sum+=arry[i];
//    }
// console.log(sum/n)
// }
//  let arryt=[20,30,60,50,20];
//  arrayaverage(arryt);

// const obj={
//    message: "Hello World",
//    log() {
//       console.log(this.message);
//    }
// };
// setTimeout(() => {
   
// }, (Object.log),1000);


// let arr=[
//    {
//       name:'Rahul',
//       marks:95
//    },
//    {
//       name:"Shardual",
//       marks:99
//    },
//    {
//       name:"Shivam",
//       marks:90
//    }
// ]
// let gpa= arr.map((stu) =>{
//     return stu.marks/10

// });

// let arr=[20,4,5,8,7,6,9,2,22]
// let ans=arr.filter((n)=>n%2==0)


// let arr=[1,2,3,4,5];
// let v=arr.reduce((res,el) => {
//   console.log(res);
//   return res*el;
// }

//   );
// console.log(v)

// let num=[10,20,30,33,40];
// let mul=num.filter((el) =>el%10==0);
// console.log(mul);


// let nums=[4,2,3,1,6,5,4];
// let min=nums.reduce((min,el)=>{
//   if(min>el){
//     return el;
//   }
//   else{
//     return min;
//   }
// });
// console.log(min);

// let str="Rahulkumar";
// let char=[...str,..."Raj"];
// console.log(char);

// function min(){
//   console.log(arguments);
// }

// function max(msg,...arg){
//   console.log(msg);
//   return  arg.reduce((m,el) =>{
//     if(m>el){
//       return m;
//     }
//     else{
//       return el;
//     }
//   });
// }

// let arr=[5,4,3,2,7];
// const squar=arr.map((el)=>{
//   return  el*el;
// });
// console.log(squar);

// let str=['a','b','c','d'];
// const newarray=str.map((el) => el.toUpperCase());
// console.log(newarray);

let arry=[5,7,4,3,2]  ;
function double(...arg){
  console.log(arg);
  let newarray=arg.map((el)=>el*2);
  console.log(newarray);

};
 double(...arry);