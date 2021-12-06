



import addDeleteEvent from './remove/remove.js';


addDeleteEvent();

document.querySelector('.high_list').addEventListener('click', addElementHighList);


document.querySelector('.low_list').addEventListener('click', addLowPriorElement);


const low_list_array =[];

const  high_list_array = [];



function addLowPriorElement() {



    const div = document.createElement('div');
    div.classList.add('field');

    const inp = document.createElement('input');
    inp.classList.add('radioButton');
    inp.type = 'checkbox';

    const taskParagrath = document.createElement('p');
    taskParagrath.classList.add('txt');

    const check = document.getElementById('lowInpId').value;


   
    try{
   
   if(!check){
      throw new SyntaxError("You canot add  an empty task") ; 
   }

   taskParagrath.textContent = check;

    }catch(e){
      if(e.name === 'SyntaxError'){
         alert('Empty sring error:' + e.message);
         return;
      }
    }
    
    
 

    const divClose = document.createElement('div');
    divClose.classList.add('close');


    const span1 = document.createElement('span');
    span1.classList.add('line_rotate45');
    const span2 = document.createElement('span');
    span2.classList.add('line_rotate45');


    const btn_close = document.createElement('input');
    btn_close.classList.add('btn_close');
    btn_close.type = 'button';


    divClose.append(span1);
    divClose.append(span2);


    div.append(inp);
    div.append(taskParagrath);
    div.append(divClose);
    div.append(btn_close);
    
  
    const lowPriorDiv = document.querySelector(".lowPrior");

    lowPriorDiv.append(div);


    const inpContent = document.getElementById('lowInpId').value;

    
    let i = low_list_array.length;

     low_list_array[i] = inpContent;
    
     addDeleteEvent();

     document.getElementById('lowInpId').form.reset();
 
}







 function addElementHighList() {

    const div = document.createElement('div');
    div.classList.add('field');

    const inp = document.createElement('input');
    inp.classList.add('radioButton');
    inp.type = 'checkbox';

    const taskParagrath = document.createElement('p');
    taskParagrath.classList.add('txt');

    const check = document.getElementById('highInpId').value;


    try{
   
      if(!check){
         throw new SyntaxError("You canot add  an empty task") ; 
      }
   
      taskParagrath.textContent = check;
   
       }catch(e){
         if(e.name === 'SyntaxError'){
            alert('Empty sring error:' + e.message);
            return;
         }
       }


    

    const divClose = document.createElement('div');
    divClose.classList.add('close');


    const span1 = document.createElement('span');
    span1.classList.add('line_rotate45');
    const span2 = document.createElement('span');
    span2.classList.add('line_rotate45');


    const btn_close = document.createElement('input');
    btn_close.classList.add('btn_close');
    btn_close.type = 'button';


    divClose.append(span1);
    divClose.append(span2);


    div.append(inp);
    div.append(taskParagrath);
    div.append(divClose);
    div.append(btn_close);
    
  

    const seniorDiv = document.querySelector('.highPrior');

    seniorDiv.append(div);


    const inpContent = document.getElementById('highInpId').value;

    
    const i = high_list_array.length;

   high_list_array[i] = inpContent;

   addDeleteEvent();
}















