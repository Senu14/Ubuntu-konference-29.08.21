const sendbutton= document.getElementById("btn");
 sendbutton.addEventListener("click",evaluitform);
 const inputtxt= document.getElementById("firstname");
 const inputAddress = document.getElementById("adresse");
 const inputLand = document.getElementById("land");
 const isValidAlpha= document.getElementById("email");
  function evaluitform(){
    const lettersAndNumbers = /^[A-Za-z0-9]+$/;
    const letters = /^[A-Za-z]+$/;
    const pattern = /^([\w-]+(?:\.[w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const inputFirst = inputtxt.value.match(letters);
    const inputFirstNo = !inputtxt.value.match(letters);
    const inputFour = isValidAlpha.value.match(pattern);
    const inputFourNo = !isValidAlpha.value.match(pattern);
    const inputSecond = inputAddress.value.match(lettersAndNumbers) ;
    const inputSecondNo = !inputAddress.value.match(lettersAndNumbers);
    const inputThree = inputLand.value.match(letters);
    const inputThreeNo = !inputLand.value.match(letters);
    const checkboxOne = document.getElementById("accept").checked;
    const checkboxTwo = document.getElementById("check").checked;
    if(inputFirstNo && inputSecondNo && inputThreeNo && inputFourNo && !checkboxOne && !checkboxTwo){
        alert("Fill the empty fields!");
        return true;
    }else if(inputFirst && inputSecond && inputThree && inputFour && checkboxOne && checkboxTwo){
           alert("choose one day!");
           return false;
       }else if(inputFirst && inputSecond && inputThree && inputFour && checkboxOne || checkboxTwo){
        alert("correct!");
        return false;
       }else if(inputFirstNo && inputSecond && inputThree && inputFour && checkboxOne || checkboxTwo){
        alert("only letters!");
        return false;
       }else if(inputFirst && inputSecondNo && inputThree && inputFour && checkboxOne || checkboxTwo){
        alert("only letters and numbers!");
           return false;
       }else if(inputFirst && inputSecond && inputThreeNo && inputFour&& checkboxOne || checkboxTwo){
        alert("only Letters!");
        return false;
       }else if(inputFirst && inputSecond && inputThree && inputFourNo && checkboxOne || checkboxTwo){
        alert("only Pattern!");
        return false;
       }else if(inputFirst && inputSecond && inputThree && inputFour && !checkboxOne && !checkboxTwo){
        alert('You must check suitable day for you!');
        return false;
       }
    
    }