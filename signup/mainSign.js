

let inputNameUser=document.querySelector("#name");
let inputEmailUser=document.querySelector("#email");
let inputPassUser=document.querySelector("#password");
let signUp=document.querySelector("#signUp");
let hrefSign=document.querySelector("#href-sign");
let emptyDiv=document.querySelector("#emptyDiv");
let inputsArr;
let inputsAll;

if(localStorage.getItem("inputsLogin")===null){
    inputsArr=[];
}else{
    inputsArr=JSON.parse(localStorage.getItem("inputsLogin"));
}


function isEmpty(){
    JSON.parse(localStorage.getItem("inputsLogin"));

        
     if(inputNameUser.value===""||inputEmailUser.value===""||inputPassUser.value===""){
        emptyDiv.innerHTML='<p>All inputs is required</p>'
        return false
     }else if(isExest()==false){
        emptyDiv.innerHTML='<p>email already exists</p>';
        return false;
    }else{
        inputsArr.push(inputsAll);
        localStorage.setItem("inputsLogin",JSON.stringify(inputsArr));
        return true;
    
}}

inputNameUser.addEventListener('keydown',regexName);
inputEmailUser.addEventListener('keydown',regexEmail);
inputPassUser.addEventListener('keydown',regexPassword);
function regexName(){
    let regexName=/^[A-Z][a-z]{3,8}$/;

    if(regexName.test(inputNameUser.value)==true){
        inputNameUser.classList.replace('is-invalid','is-valid');
        return true;
    }else{
        inputNameUser.classList.add('is-invalid');
        emptyDiv.innerHTML='<p class="">name is invalid</p>';
        return false;
    }
}
function regexEmail(){
    let regexEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(    regexEmail.test(inputEmailUser.value)==true){
        inputEmailUser.classList.replace('is-invalid','is-valid');
        return true;
    }else{
        inputEmailUser.classList.add('is-invalid');
        emptyDiv.innerHTML='<p class="">email is invalid</p>';

        return false;
    }
    
}
function regexPassword(){
    let regexPassword= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if( regexPassword.test(inputPassUser.value)==true){
        inputPassUser.classList.replace('is-invalid','is-valid');
        return true;
    }else{
        inputPassUser.classList.add('is-invalid');
        emptyDiv.innerHTML='<p class="">Password is invalid</p>';

        return false;

    }
    
}
signUp.addEventListener("click", (e) => {
    e.preventDefault();
    if(    isEmpty()&&regexName()==true&&regexEmail()==true&&regexPassword()==true){
            inputsAll={
                name:inputNameUser.value,
                email:inputEmailUser.value,
                password:inputPassUser.value
            }
               
        emptyDiv.innerHTML='<p class="text-success">sucsess</p>';
        window.location.href ='../Login/index.html';
        
    }
       

})

function isExest(){
    for(let i=0;i<inputsArr.length;i++){
        if(inputsArr[i].email.toLowerCase()==inputEmailUser.value.toLowerCase()){
            return false;
        }else{
            return true;
        }
    }
}

