n = Math.random();
n = Math.floor(n*6)+1;

document.querySelector(".img1").setAttribute("src","./images/dice"+n+".png");

m = Math.random();
m = Math.floor(m*6)+1;

document.querySelector(".img2").setAttribute("src","./images/dice"+m+".png");

if(n==m){
      document.querySelector("h1").innerHTML ="Draw";
}
else if(n>m){
    document.querySelector("h1").innerHTML ="🚩Play 1 wins!";
}
else{
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
}



