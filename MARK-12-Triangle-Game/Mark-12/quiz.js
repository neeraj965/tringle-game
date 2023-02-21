const quizForm=document.querySelector(".quiz-form");
const submitBtn= document.querySelector("#submit-btn");
const outputDiv=document.querySelector("#output");

const answerList=["90", "right angled", "one right angle", "12, 16, 20","Equilateral triangle",
"100","30","a + b + c",
"no",
"45"];

function checkAnswer(){

    let score=0;
    let index=0;
    const formResults= new FormData(quizForm);
    for(let value of formResults.values())
    {
        if(value === answerList[index]){
            score=score+1;
        }
        index=index+1;
    }

   outputDiv.innerText="Your Score is:-"+score;

}

submitBtn.addEventListener('click', checkAnswer)