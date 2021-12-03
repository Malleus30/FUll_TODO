let low_list_array =[];


export default function addLowPriorElement() {

    let div = document.createElement('div');
    div.classList.add('field');

    let inp = document.createElement('input');
    inp.classList.add('radioButton');
    inp.type = 'checkbox';

    let pp = document.createElement('p');
    pp.classList.add('txt');

    pp.textContent = document.getElementById('lowInpId').value;
    

    let divClose = document.createElement('div');
    divClose.classList.add('close');
    let span1 = document.createElement('span');
    span1.classList.add('line_rotate45');
    let span2 = document.createElement('span');
    span2.classList.add('line_rotate45');

    let btn_close = document.createElement('input');
    btn_close.classList.add('btn_close');
    btn_close.type = 'button';

    divClose.append(span1);
    divClose.append(span2);


    div.append(inp);
    div.append(pp);
    div.append(divClose);
    div.append(btn_close);
    
    
  

    let lowPriorDiv = document.querySelector('.lowPrior');

    lowPriorDiv.append(div);


    let inpContent = document.getElementById('lowInpId').value;

    
    let i = low_list_array.length;

     low_list_array[i] = inpContent;
 
}