const side=document.querySelectorAll(".side");
const calculateBtn= document.querySelector("#calulate-btn");
const outputDiv=document.querySelector("#output");

function calculateArea(){

    if(side[0].value>0 && side[1].value>0)
    {
    let base=Number(side[0].value);
    let height=Number(side[1].value);
    let area=0.5*base*height;
    
    outputDiv.innerText="The Area of Triangle is:-"+area;

    }
    else{
        outputDiv.innerText="Please Enter Positive Values";
    }
    
   
}

calculateBtn.addEventListener('click', calculateArea)