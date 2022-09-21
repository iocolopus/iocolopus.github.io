var tablero = [["","",""],["","",""],["","",""]];

function display(){

    var counter = 1;

    for (var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            document.getElementById(counter).textContent = tablero[i][j];
            counter++;
        }
    }


}

function toggle(x){

    var counter = 1;
    var failure = false;

    for(var i = 0;i<=2;i++){
        for(var j = 0;j<=2;j++){
            if(counter == x){
                if(tablero[i][j] == ""){
                    tablero[i][j] = "O";
                }else{
                    failure = true;
                }
            }

            counter++;
        }
    }

    display();

    check_win();

    ia_canplay = false;

    for(var i = 0;i<=2;i++){
        for(var j = 0;j<=2;j++){
            if(tablero[i][j] == ""){

                ia_canplay = true;

                
            }

        }
    }
    
    if(ia_canplay){

        ia_turn();
        check_lost();

    }else{
        alert("Empate")
        location.reload();
    }


}

function ia_turn(){

    placed = false;


    do{

        var x = Math.floor(Math.random() * 3);
        var y = Math.floor(Math.random() * 3);

        if(tablero[x][y] == ""){
            tablero[x][y] = "X";
            placed = true;
        }

    }while(placed == false);

    display();

    

}

function check_win(){

    var simb = "O";
    var isWin = false;

    if(tablero[0][0] == simb && tablero[0][1] == simb && tablero[0][2] == simb){
        isWin = true;
    }
    if(tablero[1][0] == simb && tablero[1][1] == simb && tablero[1][2] == simb){
        isWin = true;
    }
    if(tablero[2][0] == simb && tablero[2][1] == simb && tablero[2][2] == simb){
        isWin = true;
    }
    if(tablero[0][0] == simb && tablero[1][0] == simb && tablero[2][0] == simb){
        isWin = true;
    }
    if(tablero[0][1] == simb && tablero[1][1] == simb && tablero[2][1] == simb){
        isWin = true;
    }
    if(tablero[0][2] == simb && tablero[1][2] == simb && tablero[2][2] == simb){
        isWin = true;
    }
    if(tablero[0][0] == simb && tablero[1][1] == simb && tablero[2][2] == simb){
        isWin = true;
    }
    if(tablero[0][2] == simb && tablero[1][1] == simb && tablero[2][0] == simb){
        isWin = true;
    }





    if(isWin == true){
        alert("Has ganado trozo de mierda");
        location.reload(); 
    }


}

function check_lost(){

    var simb = "X";
    var isLost = false;

    if(tablero[0][0] == simb && tablero[0][1] == simb && tablero[0][2] == simb){
        isLost = true;
    }
    if(tablero[1][0] == simb && tablero[1][1] == simb && tablero[1][2] == simb){
        isLost = true;
    }
    if(tablero[2][0] == simb && tablero[2][1] == simb && tablero[2][2] == simb){
        isLost = true;
    }
    if(tablero[0][0] == simb && tablero[1][0] == simb && tablero[2][0] == simb){
        isLost = true;
    }
    if(tablero[0][1] == simb && tablero[1][1] == simb && tablero[2][1] == simb){
        isLost = true;
    }
    if(tablero[0][2] == simb && tablero[1][2] == simb && tablero[2][2] == simb){
        isLost = true;
    }
    if(tablero[0][0] == simb && tablero[1][1] == simb && tablero[2][2] == simb){
        isLost = true;
    }
    if(tablero[0][2] == simb && tablero[1][1] == simb && tablero[2][0] == simb){
        isLost = true;
    }





    if(isLost == true){
        alert("Te acaba de ganar un prgrama de mierda das puta pena payaso");
        location.reload(); 
    }


}