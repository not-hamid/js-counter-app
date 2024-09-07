const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        if(count > 0){
            value.style.color = 'rgb(2, 184, 2)'
        }
        else if(count < 0){
            value.style.color = 'rgb(227, 0, 0)'
        }
        else{
            value.style.color = 'rgba(227, 227, 227, 0.74)'
        }
        value.textContent = count;
    })
    
})