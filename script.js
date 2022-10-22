const display= document.getElementById('display');
document.getElementById('calc-btns').addEventListener('click',function(event){
    console.log(event.target.innerText);
    const clickedBtn =event.target.innerText;
    if(clickedBtn=='C'){
        display.value='';
    }
    else if(clickedBtn=='√'){
        const result = eval(display.value);
        display.value = Math.sqrt(result);
    }
    else if(clickedBtn=='<'){
        display.value=display.value;
    }
    else if(clickedBtn=='='){
        const result = eval(display.value);
        display.value = result;
    }
    else{
        display.value = display.value+clickedBtn;
    }
})