function add(x){

     if (document.getElementById("resultado").textContent == "0"){
        document.getElementById("resultado").textContent = x;
     }
     else if(document.getElementById("resultado").textContent.length <= 7){
        document.getElementById("resultado").textContent += x;
     }
}
function resolver(){
    document.getElementById("resultado").textContent = eval(document.getElementById("resultado").textContent);
}
function borrar(){
    document.getElementById("resultado").textContent = "0"
}
