const input=document.querySelectorAll(".angle");
const istriangleBtn= document.querySelector("#check-btn");
const outputDiv=document.querySelector("#output");

function findSum(angle1,angle2,angle3)
{
    const sum = angle1+angle2+angle3;
    return sum;
}

function validateTriangle(){

    if(input[0].value>0 && input[1].value>0 && input[2].value>0){

        var sumofAngles= findSum(Number(input[0].value),Number(input[1].value),Number(input[2].value))

        if(sumofAngles=== 180)
        {
            outputDiv.innerText="yay, the Angles form a Triangle";
        }else{
            outputDiv.innerText="Nah, the Angles do not form a Triangle";
        }
    }
    else{
        outputDiv.innerText="Please Enter Positive Values";
    }

   
}

istriangleBtn.addEventListener('click', validateTriangle)