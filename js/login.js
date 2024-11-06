function check(form){
    if(form.email.value=="Ahmed@gmail.com" && form.pass.value=="88888888"){
        return true;
    }
    else{
        document.getElementById("incorrect").className="correct";
           return false 
        }
}
