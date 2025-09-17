function CallbackFun(){
    goodmorning(goodnight)
    function goodmorning(callback){
        setTimeout(function (){
            console.log("Good morning!")
            callback()
        }, 3000);


    }


function goodnight(){
    console.log("Good night!")
}
}