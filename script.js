var randomeded = Math.floor(Math.random()*100) +1;
var sansiniz = 0;
var score = document.querySelector("#score");

var play = ()=>{
    var message = document.getElementById("mes");
    var eded = document.getElementById("num").value;
    if (eded > 100 || eded < 1 && eded != "") {
        alert("Daxil edilən ədəd 1-100 aralığında olmalıdr");
        return;
    }
    if (eded == "") {
        alert("Ədəd daxil etməmisiniz");
        return;
    } 
    sansiniz++;
    if (eded > randomeded) {
        message.textContent = "Daha kiçik ədəd sinayin "+`${ 5 -sansiniz}`+" təxmin haqqiniz qaldi";
    }else if(eded < randomeded){
        message.textContent = "Daha böyük ədəd sinayin "+`${5 -sansiniz}`+" təxmin haqqiniz qaldi";
    }
    else if (eded == randomeded) {
        message.textContent = "Təbriklər Doğru təxmin, Qalib oldunuz";
       setInterval(() => {
        location.reload();
       }, 2000);
    }
 
    var qalansans = 5 - sansiniz;
    if (qalansans ==0)  {
        message.textContent = "Oyun bitdi yeniden sınayın";
        setInterval(() => {
            location.reload();
           }, 2000);
    }
    document.getElementById("num").value ="";
  
}
function showrusult(e){
    console.log(e);
   e.innerHTML =randomeded;
}