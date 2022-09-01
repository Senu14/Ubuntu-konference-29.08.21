const sendbutton= document.getElementById("btn");
 sendbutton.addEventListener("click",evaluitform);
 const inputtxt= document.getElementById("firstname");
 const isValidAlpha= document.getElementById("email");
  function evaluitform(){
    
    const letters = /^[A-Za-z]+$/;
    const pattern = /^([\w-]+(?:\.[w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const inputFirst = inputtxt.value.match(letters);
    const inputFirstNo = !inputtxt.value.match(letters);
    const inputSecond = isValidAlpha.value.match(pattern);
    const inputSecondNo = !isValidAlpha.value.match(pattern); 
    if(inputFirstNo && inputSecondNo){
        alert("Fill the empty fields!");
        return true;
    }else if(inputFirst && inputSecond){
           alert("correct!");
           element = document.querySelector('.form');
           element.style.visibility = 'hidden';
           
           document.getElementById("form").innerHTML = "Thank you for registration!";
           document.getElementById("form").style.padding = '80px 550px';
           
           return false;
       }else if(inputFirstNo && inputSecond){
        alert("only letters!");
        return false;
       }else if(inputFirst && inputSecondNo){
        alert("only Pattern!");
           return false;
       }
    }