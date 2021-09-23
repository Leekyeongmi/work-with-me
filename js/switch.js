function switchHandler() {
    if(document.getElementById('switch').className === "fas fa-toggle-on fa-lg")
    {
        document.getElementById('switch').className = "fas fa-toggle-off fa-lg";
        document.querySelector('body').style.backgroundColor = "black";
   }else{
    document.getElementById('switch').className = "fas fa-toggle-on fa-lg";
    document.querySelector('body').style.backgroundColor = "blue";
   }
}

function changeSom(){
    document.getElementById('wifi').className = "fas fa-cat fa-lg";
}

