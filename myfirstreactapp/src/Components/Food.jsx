function Food(){
function Orderfood(){
    console.log("Food is ordered...")
}

function ServeFood(callback){
    setTimeout(function() {
        console.log("Food is Served")
        callback()
    },3000)
}

function BillPayment(){
    console.log("Bill Paid")
}
Orderfood()
ServeFood(BillPayment)

}
export default Food