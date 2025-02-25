let turn="0";

  
let isgameover=false
const a=document.querySelectorAll(".n")
// a.addEventListener('click',()=>{
//     console.log("yes")
// })

const checkWin=()=>{
    let boxtexts=document.getElementsByClassName("n");
    let wins=[
        [0,1,2,5,6.3,0],
        [3,4,5,5,19.8,0],
        [6,7,8,5,33.4,0],
        [0,3,6,-8.5,19.65,90],
        [1,4,7,4.9,19.7,90],
        [2,5,8,18.4,19.8,90],
        [0,4,8,5,20,45],
        [2,4,6,5,20,135]
    ]
    wins.forEach(e=>{
        if(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText && boxtexts[e[0]].innerText===boxtexts[e[2]].innerText && boxtexts[e[0]].innerText!==""){
            console.log("win")
            isgameover=true
            // document.querySelector(".infotext").innerText=turn +" WON"
            // document.getElementsByClassName("infotext")[0].innerText=turn+" WON";
            // document.getElementsByClassName("infotext")[0].innerText =  " WON 🎉";
            turn=(turn=="0")?"X":"0";
            document.getElementById("bugg").innerHTML=`${turn} won`

            document.getElementsByTagName("img")[0].style.width="30vh";
            document.querySelector(".line").style.transform = `translate(${e[3]}vh, ${e[4]}vh) rotate(${e[5]}deg)`
            console.log(e[3],e[4],e[5])
            document.querySelector(".line").style.width = "30vh";
            // confetti();
            effect()
        }
    })
    // let draw=true;
    // let arr=document.querySelectorAll("n")
    // Array.from(arr).forEach(element=>{
    //     if(element.innerHTML=="") draw==false
    // })
    // if(draw==true) {
    //     isgameover=true
    //     document.getElementById("bugg").innerHTML="It's a draw"
    // }
}
a.forEach(element => {
   
        element.addEventListener("click", () => {
            if(isgameover){
                
                return;
            }
            if(element.innerText==""){
                element.innerHTML=`${turn}`
                
                if(turn==0){
                    turn="X"
                }
                else{
                    turn="0"
                }
                document.getElementsByClassName("infotext")[0].innerText="Turn for "+turn;
                checkWin()
            }
        });
    
});
document.getElementById("reset").addEventListener('click',()=>{
    let boxtexts=document.getElementsByClassName("n");
    Array.from(boxtexts).forEach(element=>{
        element.innerHTML=""
        document.getElementsByTagName("img")[0].style.width="0";
        document.getElementsByClassName("infotext")[0].innerHTML='Turn for 0'
    })
    isgameover=false;
    turn=0;
    document.querySelector(".line").style.width = "0vh";
})
// document.querySelector(".main").addEventListener('click',()=>{
//     // console.log("yes")
//     if (event.target.classList.contains("n")) {
//         console.log("yes");
//     }
// })

const effect=()=>{
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}