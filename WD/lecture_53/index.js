// function changetext(){
//   // let fpara=document.getElementById('fpara');
// fpara.textContent="मेरा नाम राहुल है";
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changetext);


 function alertpara(event){
  alert("You click at : "+ event.target.textContent);
 }
 let mydiv=document.getElementById('para');
 document.addEventListener('click',alertpara);