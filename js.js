let n1=Math.floor(Math.random() * (6 - 1) ) + 1;
let n2=Math.floor(Math.random() * (6 - 1) ) + 1;
if(n1==n2) document.getElementById("p1").innerHTML = "Match draw😒";

else if(n1>n2){
    document.getElementById("p1").innerHTML = "Player 1 wins🥳";
}
else{
    document.getElementById("p1").innerHTML = "Player 2 wins🥳";
}

switch(n1){
case 1:
    document.getElementById('im1').src='1.png';
    break;
case 2:
    document.getElementById('im1').src='2.png';
    break;
case 3:
    document.getElementById('im1').src='3.png';
    break;
case 4:
    document.getElementById('im1').src='4.png';
    break;
case 5:
    document.getElementById('im1').src='5.png';
    break;
case 6:
    document.getElementById('im1').src='6.png';
    break;
                 

                
}

switch(n2){
    case 1:
        document.getElementById('im2').src='1.png';
        break;
    case 2:
        document.getElementById('im2').src='2.png';  
        break;
    case 3:
        document.getElementById('im2').src='3.png';
        break;
    case 4:
        document.getElementById('im2').src='4.png';
        break;
    case 5:
        document.getElementById('im2').src='5.png';
        break;
    case 6:
        document.getElementById('im2').src='6.png';
        break;
                     
    
                    
    }
    
    