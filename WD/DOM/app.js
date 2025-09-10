let mydiv=document.querySelector('#mydiv');

let newelement=document.createElement('p');
newelement.textContent="Rahul kumar"
mydiv.insertAdjacentElement('beforebegin',newelement);