
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/calculator", function(request, response){
    response.sendFile(__dirname + "/index.html");
   
});

app.post("/calculator", function(request, response){

    var numb1 = Number(request.body.num1);
    var numb2 = Number(request.body.num2);
    var sym1 = request.body.sym;

    function calc(sym1){
        switch(sym1){
            case "+":
               return numb1 + numb2;
               break;

               case "-":
                return numb1-numb2;
                break;

                case "*":
                    return numb1*numb2;
                    break;
                case "/":
                return numb1/numb2;
                break;

                case "%":
                    return numb1%numb2;
                break;
        }
    }

    
    var res = calc(sym1);
    
    response.send("Result of your calculation is " + res);

});

app.listen(3000, function(){
    console.log("Listening to port 3000");
});