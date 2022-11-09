fetch("http://localhost:3000/cart/idTrip").then(res=>res.json()).then(data=>{

    console.log(data)
for(let x in data){
    document.querySelector(".cart-list").innerHTML += `
    <li class="list-group-item">${data[x].departure} > ${data[x].arrival} ${data[x].date} ${data[x].price}€</li>
    `
}
//    for(let i = 0;i<data.length;i++){
//        let departure = data.data[i].departure
//        console.log(data[i].departure)
//     //    let arrival = data[i].arrival
//     //    let date = data[i].date
//     //    let price = data[i].price
//     //    let id = data[i]._id
//     //    document.querySelector(".cart-list").innerHTML += `
//     //    <li><span class="trip">${departure}>${arrival}</span> <span class="time">20:09</span> <span class="price">${price}€</span> <span class="delete">x</span></li>`

//    }
})
