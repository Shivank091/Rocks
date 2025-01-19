let humanscore=0;
let computerscore=0;    
function GetComputerChoice(){
    let s=Math.floor(Math.random() * 3);
    if( s==0){
        return "rock";
    }
    if (s==1){
        return "paper";
    }
    if(s==2){
        return "scissor";
    }
}
function GetHumanChoice(){
    let userChoice=(prompt("Enter your choice"));
    return userChoice;
}
function playround(){
    
    let round_track=0;
    while(round_track<5){
        
        let humanchoice=GetHumanChoice();
        let computerchoice=GetComputerChoice();
        humanchoice=humanchoice.toLowerCase();
        computerchoice=computerchoice.toLowerCase();
        if(humanchoice!="rock" && humanchoice!="scissor" && humanchoice!="paper"){
            alert("Please enter rock,paper or scissor!!");
            continue;
        }
        if(humanchoice=="rock" && computerchoice=="rock"){
            alert("Round Draw");
            round_track++;
        }
        else if(humanchoice=="rock" && computerchoice=="paper"){
            alert("Computer Won!!");
            computerscore++;
            round_track++;
        }
        else if(humanchoice=="paper" && computerchoice=="rock"){
            round_track++;
            alert("You Won!!");
            humanscore++;
            round_track++;
        }
        else if(humanchoice=="paper" && computerchoice=="paper"){
            round_track++;
           
            alert("Draw!!");
        }
        else if(humanchoice=="paper" && computerchoice=="scissor"){
            round_track++;
            alert("Computer Won!!");
            computerscore++;
        }
        else if(humanchoice=="scissor" && computerchoice=="paper"){
            round_track++;
            alert("You Won!!");
            humanscore++;
        }
        else if(humanchoice=="scissor" && computerchoice=="rock"){
            round_track++;
            alert("Computer Won!!");
            computerscore++;
        }
        else if(humanchoice=="scissor" && computerchoice=="scissor"){
            round_track++;
            alert("Draw!!");
        }

    }
    if(humanscore>computerscore){
        alert(`Human won!!Human-${humanscore},Computer-${computerscore}`);
    }
    else if(humanscore==computerscore){
        alert(`Draw!!Human-${humanscore},Computer-${computerscore}`);
    }
    else if(humanscore<computerscore){
        alert(`Computer won!!Human-${humanscore},Computer-${computerscore}`)
    }

}
playround();

