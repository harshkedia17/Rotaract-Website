let valueDisplays=document.querySelectorAll(".number1");
let interval=5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue=0;
    let endValue=parseInt(valueDisplays.getAttribute("data-num"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
        startValue+=1;
        valueDisplay.textContent=startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    }, duration);
});