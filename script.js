const display= document.getElementById('display');
document.getElementById('calc-btns').addEventListener('click',function(event){
    const clickedBtn =event.target.innerText;
    if(clickedBtn=='C'){
        display.value='';
    }
    else if(clickedBtn=='√'){
        const result = eval(display.value);
        display.value = Math.sqrt(result);
    }
    else if(clickedBtn=='<'){        
        let result = display.value;
        result = result.substring(0, result.length - 1);
        display.value = result;
    }
    else if(clickedBtn=='='){
        let result="";
        if (display.value.includes("%")) {
            const numbers = display.value.split("%");
            const number1 = parseInt(numbers[0]);
            const number2 = parseInt(numbers[1]);
            result = (number1*100)/number2;
            result = result.toString();
        }
        else{
            result = eval(display.value);        
        }
        display.value = result;
    }
    else{
        display.value = display.value+clickedBtn;
    }
});