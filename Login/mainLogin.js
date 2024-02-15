
let emailLog=document.querySelector("#emailLog");
let passwordLog=document.querySelector("#passwordLog");
let loginLog=document.querySelector("#loginLog");
let emptyDivLog=document.querySelector("#emptyDivLog");
let inputsArr=[];
let allIndex=0;


if(localStorage.getItem("inputsLogin")==null){
    inputsArr=[];
}else{
    inputsArr=JSON.parse(localStorage.getItem("inputsLogin"));
}


function isEmptyLog(){
    
    
   if(emailLog.value===""||passwordLog.value===""){
        emptyDivLog.innerHTML='<p>All inputs is required</p>';
        return false;
    }else if(isExestLog()==true){
        return true;
    }else{
        emptyDivLog.innerHTML='<p class="">incorrect email or password</p>'
        return false;
    }
}
function isExestLog(){
    inputsArr=JSON.parse(localStorage.getItem("inputsLogin"));

    for(let i=0;i<inputsArr.length;i++){
        if(inputsArr[i].email.toLowerCase()==emailLog.value.toLowerCase()&&inputsArr[i].password.toLowerCase()==passwordLog.value.toLowerCase()){
            return true;
        }else{
            return false;
        }

        allIndex= i;

    }
}

emailLog.addEventListener('keydown',regexEmail);
passwordLog.addEventListener('keydown',regexPassword);



function regexEmail(){
    let regexEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(    regexEmail.test(emailLog.value)==true){
        emailLog.classList.replace('is-invalid','is-valid');
        return true;
    }else{
        emailLog.classList.add('is-invalid');
        return false;
    }
    
}
function regexPassword(){
    let regexPassword= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if( regexPassword.test(passwordLog.value)==true){
        passwordLog.classList.replace('is-invalid','is-valid');
        return true;
    }else{
        passwordLog.classList.add('is-invalid');
        return false;

    }
    
}
loginLog.addEventListener("click",(e)=>{        

    e.preventDefault();
    if(isEmptyLog()==true &&regexEmail()==true&&regexPassword()==true){
         localStorage.setItem('allIndex',allIndex);
         emptyDivLog.innerHTML='<p class="text-success">sucsess</p>';
         window.location.href =`../homePage/index.html`;
         
     
    }
     
 })