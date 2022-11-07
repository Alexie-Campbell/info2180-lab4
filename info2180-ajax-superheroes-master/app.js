"use strict";


/*
app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "Origin, X-Requested-Width, Content-Type, Accept");
    next();
});A*/

window.onload= function(){

    var btn = document.getElementsByClassName("btn")[0];

    btn.addEventListener("click", function(e){
        e.preventDefault(); 

        var marvelrequest = new XMLHttpRequest();
        let url = "http://localhost/info2180-lab4/info2180-lab4/info2180-ajax-superheroes-master/superheroes.php";
        marvelrequest.onreadystatechange = something;
        marvelrequest.open('GET', url);
        marvelrequest.send();
        console.log();

        function something(){
            if(marvelrequest.readyState === XMLHttpRequest.DONE){
                if(marvelrequest.status === 200){
                    let response = marvelrequest.responseText;
                    alert(response);
                }else{
                    alert('There was an issue with the request.');
                }
            }
        }

    });


}  



