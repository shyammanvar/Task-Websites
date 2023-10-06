const btnEl= document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ""){

    }else{
const age = getAge(birthdayValue);
resultEl.innerText = `Your age is ${age} ${age>1? "years": "years"}old`;

    }
}
function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
if (month<0 || (month === 0 && currentDate.getDate())){
    age--;
}
return age;
}

btnEl.addEventListener('click',calculateAge);