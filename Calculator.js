
function calculate(value){

    var x = document.getElementById("result").value 
    var str = new String(x);   

    if(str.includes('+')){
        const arrNO = str.split('+')
        let a = arrNO[0];
        let b = arrNO[1];
        let c = add(a,b)
        display(" =" +c)
    
    }//end of if for "+"

    if(str.includes('-')){
        const arrNO = str.split('-')
        let a = arrNO[0];
        let b = arrNO[1];
        let c = sub(a,b)
        display(" =" +c)

    }//end of if for "-"

    if(str.includes('*')){
        const arrNO = str.split('*')
        let a = arrNO[0];
        let b = arrNO[1];
        let c = mul(a,b)
        display(" =" +c)
    }//end of if for "*"

    if(str.includes('/')){
        const arrNO = str.split('/')
        let a = arrNO[0];
        let b = arrNO[1];
        let c = div(a,b)
        display(" =" +c)

    }  //end of if for "/"
    
}//end of function calculate


function add(a,b){
    console.log("Addition")
    x = parseFloat(a)
    y = parseFloat(b)
    return x+y
}//end of function add 

function sub(a,b){
    console.log("subtraction")
    x = parseFloat(a)
    y = parseFloat(b)
    return x-y
}//end of function add 

function mul(a,b){
    console.log("Multiplication")
    x = parseFloat(a)
    y = parseFloat(b)
    return x*y
}//end of function add 

function div(a,b){
    console.log("Division")
    x = parseFloat(a)
    y = parseFloat(b)
    return x/y
}//end of function add 

function clearSC(){
    document.getElementById("result").value = 0 ;
}//end of function clearSC()

function on(){
    display(0);
}//end of function on()

function off(){
    document.getElementById("result").value ='';
}//end of function off()

function display(value) {
    document.getElementById("result").value += value;
}//end of function display 