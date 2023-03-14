
const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spin_button");

var deg = 0;
var color;
var values = [26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32, 0]
const section_deg = 360/37;


spinButton.addEventListener("click", ()=>{
    deg = Math.floor(5000 + Math.random()*5000);

    spinButton.style.pointerEvents = "none";
    wheel.style.transition = "all 10s ease";
    wheel.style.transform = `rotate(${deg}deg)`;

    console.log(`grados rotados: ${deg}°`)
    deg = deg%360;
    console.log(`grados actuales: ${deg}°`);
    final_result = getResult();

    if(final_result == 0){
        color = "Verde";
    }else if(values.indexOf(final_result)%2){ // si el elemento es par en la lista de elementos de la rueda, entonces es rojo, si no, como no es 0 entonces es negro.
        color = "Rojo";
    }else{
        color = "Negro"
    }
    
});

wheel.addEventListener("transitionend", ()=>{
    spinButton.style.pointerEvents = "auto";
    wheel.style.transition = "none";    
    wheel.style.transform = `rotate(${deg}deg)`;
    document.getElementById("result").textContent = `Numero: ${final_result} Color: ${color}`;
})

function getResult(){
    console.log("index:"+Math.ceil(deg/section_deg));
    console.log("value:" + values[Math.floor(deg/section_deg)]);
    return values[Math.floor(deg/section_deg)]; //obtiene la posicion a evaluar dependiendo del angulo de rotacion de la rueda
    //redondea hacia abajo para evaluar la condicion de menor que.
}