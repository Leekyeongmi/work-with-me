function switchHandler() {
    if(document.getElementById('switch').className === "fas fa-toggle-on fa-lg")
    {
        document.getElementById('switch').className = "fas fa-toggle-off fa-lg";
        document.querySelector('body').style.background = 'linear-gradient(to top, #f7ff00, #db36a4)';
       
   }else{
    document.getElementById('switch').className = "fas fa-toggle-on fa-lg";
    document.querySelector('body').style.background = "blue";
   }
}


