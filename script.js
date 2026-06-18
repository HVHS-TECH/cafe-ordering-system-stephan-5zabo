/****************************
Name of task: Validation
****************************/
console.log("Running t01_javascriptAndHtml.js")

//Variables
 let userName
 let age
 let money
 let change
 let shoppingCart = [];
let chocolate
let chips
let drink

/****************************
Main code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
displayWelcome(1.25 , 0.50 , 1);
/****************************
Functions
****************************/
function displayWelcome(KrabbyPatty, KelpFries, KelpShake){
    OUTPUT.innerHTML += "<p>KrabbyPatty: $"+ KrabbyPatty +"</p>";
    OUTPUT.innerHTML += "<p>KelpFries: $"+ KelpFries +" </p>";
    OUTPUT.innerHTML += "<p>KelpShake: $"+ KelpShake +" </p>";
}if (money >= 1.25){
    OUTPUT.innerHTML += "<p>you CAN afford a Krabby Patty.</p>"
}else{
    OUTPUT.innerHTML += "<p>you CAN'T afford a Krabby Patty.</p>"

}
function addKrabbyPatty() {
shoppingCart.push("1.25");
    OUTPUT.innerHTML += "added KrabbyPatty<br>";
}
function addKelpFries(){
shoppingCart.push("0.5");
    OUTPUT.innerHTML += "added KelpFries<br>";
}
function addKelpShake(){
shoppingCart.push("1");
    OUTPUT.innerHTML += "added KelpShake<br>";
}
function showCart(){

    OUTPUT.innerHTML += "Cart Contents:<br>";

    for (let i=0; i < shoppingCart.length; i++){
    OUTPUT.innerHTML += shoppingCart[i]+"<br>";
  }
}
function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    if (NAME_FIELD.checkValidity()=== false)  {
    OUTPUT.innerHTML = "please give us a order name."
}else{
userName = NAME_FIELD.value;
 OUTPUT.innerHTML = "<p> Your order name is "+userName+"</p>"
}

 
 const MONEY_FIELD = document.getElementById("moneyField");

if (MONEY_FIELD.checkValidity()=== false)  {
    OUTPUT.innerHTML = "please fill out the form correctly"
}else{
money = MONEY_FIELD.value;
 OUTPUT.innerHTML += "<p> You have "+money+" dollars"+"</p>"
}
 displayWelcome(1.25 , 0.50 , 1);
let total = 0;

for(let i = 0; i < shoppingCart.length; i++){
    total += Number(shoppingCart[i]);  
    OUTPUT.innerHTML +=  "<p>" +total+ "</p>";
}

OUTPUT.innerHTML += "<p>Your Total cost is $" + total + "</p>";
 
//if (money >= shoppingCart){
if (money >= total){
    OUTPUT.innerHTML += "<p>you can dine with us today sir. </p>"
}else{
    OUTPUT.innerHTML += "<p>you Can not afford to dine here sir.</p>"
}

const CHANGE_FIELD = document.getElementById("changeField");
 change = money - total;
 CHANGE_FIELD.value = change;
 OUTPUT.innerHTML += "<p>Your change is $"+change+"</p>"

 let choice = Number(CHOCOLATE_FIELD.value);}
