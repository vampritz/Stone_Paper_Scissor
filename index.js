var num=Math.random() ; 
num=Math.floor(3*num)+1;

var num1=Math.random() ; 
num1=Math.floor(3*num1)+1;

var randomImage1="images/im" + num + ".png" ; 
document.querySelector(".img1").setAttribute("src",randomImage1);

var randomImage2="images/im" + num1 + ".png" ; 
document.querySelector(".img2").setAttribute("src",randomImage2);



if(num1==num){  // deciding the winner
    document.querySelector("h1").innerText=  "Match is drawn";
}
else if(num==1 && num1==2){
    document.querySelector("h1").innerText="Player 2 is winner";
}
else if(num==2 && num1==1){
    document.querySelector("h1").innerText="Player 1 is winner";
}
else if(num==1 && num1==3){
    document.querySelector("h1").innerText="Player 1 is winner";
}
else if(num==3 && num1==1){
    document.querySelector("h1").innerText="Player 2 is winner";
}
else if(num==2 && num1==3){
    document.querySelector("h1").innerText="Player 2 is winner";
}
else if(num==3 && num1==2){
    document.querySelector("h1").innerText="Player 1 is winner";
}

// else{
//     document.querySelector("h1").innerText="Match Is Drawn";
// }

