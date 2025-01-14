const display = document.querySelector('.value');
const buttons = document.querySelectorAll('button');

buttons.forEach( (item) => {
    item.onclick = () => {
        try{
            if(item.dataset.button === 'AC') {
                display.value = '';
            } else if(item.dataset.button === 'DEL') {
                let string = display.value;
                display.value = string.substr(0 , string.length -1);
            } else if(item.dataset.button === '=') {
                if(display.value !== ''){
                    display.value = eval(display.value);
                    setTimeout( () => (display.value =''), 5000)
                }
                
            } 
            else {
                display.value += item.dataset.button;
            }
        } catch(err) {
            display.value = 'Invalid Entry';
            setTimeout( () => (display.value =''), 1000)
        }
    }
})