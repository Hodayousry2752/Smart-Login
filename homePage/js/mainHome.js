


let divEmail = document.getElementById("divEmail");
let index=Number(localStorage.getItem("allIndex"));
let data =JSON.parse(localStorage.getItem("inputsLogin"));
divEmail.innerHTML=`<h2>Welcome ${data[index].name}</h2>`;
