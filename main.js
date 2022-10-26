var som1=document.createElement("span");
var som1t=document.createTextNode("100");
som1.appendChild(som1t);
var btn1=document.getElementById("btn1");
var sum=document.getElementById("nav");
var somme0=document.getElementById("somme");
var add=document.getElementById("add");

btn1.addEventListener("click", function name(params) {
    tot=tot+100;
    somme0.innerText+="+100"+"="+tot;
    add.innerText+="+watch1";
    return somme0,add})

var btn2=document.getElementById("btn2");
btn2.addEventListener("click", function name(params) {
    tot=tot+100;
    somme0.innerText+="+100"+"="+tot;
    add.innerText+="+watch2";
    return somme0,add})
    
    var btn3=document.getElementById("btn3");
    let tot=0
    btn3.addEventListener("click", function name(params) {
tot=tot+100;
        somme0.innerText+="+100"+"="+tot;
        add.innerText+="+watch3";
        return somme0,add})

        var btn4=document.getElementById("btn4");
        btn4.addEventListener("click", function name(params) {
            tot=tot+90;
            somme0.innerText+="+90"+"="+tot;
            add.innerText+="+watch4";
            return somme0,add})

            var btn5=document.getElementById("btn5");
            btn5.addEventListener("click", function name(params) {
                tot=tot+80;
                somme0.innerText+="+80"+"="+tot;
                add.innerText+="+watch5";
                return somme0,add})

                var btn6=document.getElementById("btn6");
                btn6.addEventListener("click", function name(params) {
                    tot=tot+80;
                    somme0.innerText+="+80"+"="+tot;
                    add.innerText+="+watch6";
                    return somme0,add})

                    var btn7=document.getElementById("btn7");
                    btn7.addEventListener("click", function name(params) {
                        tot=tot+80;
                        somme0.innerText+="+80"+"="+tot;;
                        add.innerText+="+watch7";
                        return somme0,add})

                        var btn8=document.getElementById("btn8");
                        btn8.addEventListener("click", function name(params) {
                            tot=tot+60;
                            somme0.innerText+="+60"+"="+tot;
                            add.innerText+="+watch8";
                            return somme0,add})

                            var btn9=document.getElementById("btn9");
                            btn9.addEventListener("click", function name(params) {
                                tot=tot+70;
                                somme0.innerText+="+70"+"="+tot;
                                add.innerText+="+watch9";
                                return somme0,add})











var hearts=document.querySelectorAll(".fa-heart");
for (let i=0;i<hearts.length;i++){hearts[i].addEventListener("click",function(){if(hearts[i].style.color=="red"){hearts[i].style.color="black"}else{hearts[i].style.color="red"}  }
)}

