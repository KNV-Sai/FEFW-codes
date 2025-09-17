export default function Callbackdemo(){
    
   goodmorning(function() {
        goodafternoon(goodbye);
    });

function goodmorning(callback){
  console.log("Good Morning!!")
  callback()
}
function goodafternoon(callback){
    console.log("Good Afternoon!")
    callback()
}
function goodbye(){
  console.log("Goodbye!");
}

}