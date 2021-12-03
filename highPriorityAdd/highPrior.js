let  high_list_array = [];


export default function addElementHighList() {

    let div = document.createElement('div');
    div.classList.add('field');

    let inp = document.createElement('input');
    inp.classList.add('radioButton');
    inp.type = 'checkbox';

    let pp = document.createElement('p');
    pp.classList.add('txt');

    pp.textContent = document.getElementById('highInpId').value;
    

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
    
  

    let seniorDiv = document.querySelector('.highPrior');

    seniorDiv.append(div);


    let inpContent = document.getElementById('highInpId').value;

    
    let i = high_list_array.length;

   high_list_array[i] = inpContent;

   

 
}