
var button = document.getElementsByTagName('input');
var textField = document.getElementsByClassName('text')[0];
var submit = document.getElementById('equal');
var Allclear = document.getElementById('clear');
var remove = document.getElementById('rem');

var expression = "";

// Add and evaluate values
for(var i=0;i<button.length;i++){
    button[i].addEventListener('click',(event)=>{
     var x = event.target;
     expression +=x.value;
     textField.innerHTML = expression.toString();  

     if(submit.addEventListener('click',()=>{
        textField.innerHTML = eval(expression);
     }));
     if(Allclear.addEventListener('click',()=>{
        expression = "0";
        textField.innerHTML = expression;
   }));
   
});
}
// Removes one character from last
if(remove.addEventListener('click',()=>{
   expression = expression.slice(0,-1);
   textField.innerHTML = expression;
   if(expression==""){
      expression='0';
      textField.innerHTML = expression;
   }
}));

