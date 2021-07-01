function insert(N)
{
let number = document.getElementById("Display").innerHTML;
document.getElementById("Display").innerHTML = number + N;
}
function clean()
{
document.getElementById("Display").innerHTML ="";
}
function dell()
{
    let apagar = document.getElementById("Display").innerHTML
    document.getElementById("Display").innerHTML = apagar.substring(0, apagar.length -1);
}
function calculo(){
 let calcular = document.getElementById("Display").innerHTML;
 if(calcular)
 {
     document.getElementById("Display").innerHTML = eval(calcular)
 }

}
