export default function click(){
    
    let btns = document.querySelectorAll('.btn_close');
    
    btns.forEach(function(btn){
        btn.addEventListener('click',del);
    })
    
    }
    
    function del(){
        event.target.parentElement.remove();
    }