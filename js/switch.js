function switchHandler() {
    if(document.getElementById('switch').className === "fas fa-toggle-on fa-lg")
    {
        document.getElementById('switch').className = "fas fa-toggle-off fa-lg";
        document.querySelector('body').style.background = 'linear-gradient(to bottom, #8360c3, #2ebf91)';
       
   }else{
    document.getElementById('switch').className = "fas fa-toggle-on fa-lg";
    document.querySelector('body').style.background = "blue";
   }
}


