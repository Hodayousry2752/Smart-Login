

var inputNameUser=document.querySelector("#name");
var inputEmailUser=document.querySelector("#email");
var inputPassUser=document.querySelector("#password");
var signExist=document.querySelector("#password");
var emptyDiv=document.getElementById("emptyDiv");
var loginClick=document.querySelector("#login");
var emailLog=document.querySelector("#emailLog");
var passwordLog=document.querySelector("#passwordLog");
var loginLog=document.querySelector("#loginLog");
var emptyDivLog=document.querySelector("#emptyDivLog");
var divEmail=document.getElementById("divEmail");

var inputsArr=[];
var inputsAll;
loginClick.addEventListener("click",signFun);

var localStore =localStorage.getItem("inputsLogin");
if(localStorage.getItem("inputsLogin")==null){
    inputsArr=[];
}else{
    inputsArr=JSON.parse(localStorage.getItem("inputsLogin"));
}
console.log("hiii");


function signFun(){
    inputsAll={
        name:inputNameUser.value,
        email:inputEmailUser.value,
        password:inputPassUser.value
    }
    
    isEmpty();

}

function isEmpty(){
    JSON.parse(localStorage.getItem("inputsLogin"));



    if(isExest()==false){
        emptyDiv.innerHTML='<p>email already exists</p>';
    }else if(inputNameUser.value==""||inputEmailUser.value==""||inputPassUser.value==""){
        emptyDiv.innerHTML='<p>All inputs is required</p>'
    }else{
        inputsArr.push(inputsAll);
        localStorage.setItem("inputsLogin",JSON.stringify(inputsArr));
        emptyDiv.innerHTML='<p class="text-success">sucsess</p>'
        loginClick.innerHTML=`<a href="../part.three/index.html">Sign Up</a>`
        divEmail.innerHTML=`<h1> Welcome ${inputEmailUser.value}</h1>` ;

    }
   
}

function isExest(){
    for(var i=0;i<inputsArr.length;i++){
        if(inputsArr[i].email.toLowerCase()==inputEmailUser.value.toLowerCase()){
            return false;
        }
    }
}



/////////////////login page//////////////////

loginLog.addEventListener("click",loginFun);

function loginFun(){        


    if(isExestLog()==true){
            
            emptyDivLog.innerHTML='<p class="text-success">sucsess</p>';
            divEmail.innerHTML=`<h1> Welcome ${emailLog.value}</h1>` ;
            loginLog.innerHTML=`<a href="../part.three/index.html">Login</a>`

        }else if(emailLog.value==""||passwordLog.value==""){
            emptyDivLog.innerHTML='<p>All inputs is required</p>'
        }else{
        
            emptyDivLog.innerHTML='<p class="text-success">incorrect email or password</p>'

        }
}


function isExestLog(){
    for(var i=0;i<inputsArr.length;i++){
        if(inputsArr[i].email.toLowerCase()==emailLog.value.toLowerCase()&&inputsArr[i].password.toLowerCase()==passwordLog.value.toLowerCase()){
            return true;
        }
    }
}


    


