let get_value = [];
const calculate = 0;
let expression_value = "";
function calculater_button_click(event) {
    let a = event.target.value;
    console.log(a);
    const screen = document.getElementsByClassName("screen")[0];
    if (a == 'AC') {
        screen.innerHTML = '0';
        expression_value = '';
        get_value = [];
        return;
    }
    if (a == '=') {
        calculation();
        return;
    }
    get_value.push(event.target.value);
    for (let i = 0; i < get_value.length; i++){
        expression_value += get_value[i];
    }
    screen.innerHTML = expression_value;
    expression_value = '';
}
function calculation() {
    console.log(expression_value);
    const screen = document.getElementsByClassName("screen")[0];
    const result = eval(screen.innerHTML);

    screen.innerHTML = result;
    
}