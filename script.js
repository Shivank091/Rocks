function GetComputerChoice(){
    return Math.floor(Math.random() * 3);
}
let p=GetComputerChoice();
function GetHumanChoice(){
    let userChoice=parseInt(prompt("Enter your choice"));
    console.log(userChoice);
}
GetHumanChoice();
