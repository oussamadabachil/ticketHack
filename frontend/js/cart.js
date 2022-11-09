let arrayOfId = []

fetch("http://localhost:3000/cart/idTrip").then(res=>res.json()).then(data=>{


    // if(data.length==0){
    //     document.querySelector(".list-group-item-panier-vide").style.display = "block"
    //     document.querySelector(".cart-list").innerHTML += `<li class="list-group-item-panier-vide"Votre panier est vide</li> `
    // }else{
    //     document.querySelector(".cart-list").innerHTML += `<li class="list-group-item"><span>${data.departure} > ${data.arrival}</span><span>${data.date} </span><span>${data.price}€</span> <span class='delete'>x</span></li> `
        
    // }
    //parcourir le tableau data
    if(data.length){
    let somme =     0

    for(let i=0;i<data.length;i++){

        
        //afficher les données dans le panier
        somme += data[i].price
        let hourFromDate = data[i].date
        let hourFrom = hourFromDate.split("T")
        let hour = hourFrom[1]  
        let hourAndMinute = hour.split(":")
        let hourOnly = hourAndMinute[0]
        let minuteOnly = hourAndMinute[1]
        let hourAndMinuteOnly = hourOnly+":"+minuteOnly
        document.querySelector(".cart-list").innerHTML += `<li class="list-group-item"><span>${data[i].departure} > ${data[i].arrival}</span><span>${hourAndMinuteOnly} </span><span>${data[i].price}€</span> <span class='delete' data-id='${data[i]._id}'>SUPPRIMER</span></li> `
        document.querySelector('.total').innerHTML = ` ${somme}€`
        arrayOfId.push(data[i]._id)
        let idOftrip = document.querySelectorAll(".delete")[i].getAttribute("data-id") 
        for(let i = 0;i<document.querySelectorAll(".delete").length;i++){
            document.querySelectorAll(".delete")[i].addEventListener("click",()=>{
                arrayOfId.splice(i,1)
                location.reload();
                document.querySelectorAll(".delete")[i].parentElement.remove()
                fetch("http://localhost:3000/cart/deleteTrip",{
                    method:"DELETE",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        id:idOftrip
                    })
                }).then(res=>res.json()).then(data=>{
                    console.log(data)
                })
                somme -= data[i].price
                document.querySelector('.total').innerHTML = ` ${somme}€`
            })
        

        }
    }
}else{
    document.querySelector(".cart-list").innerHTML += `<li class="list-group-item-panier-vide">Votre panier est vide</li> `
}
})



let purchase = document.querySelector(".purchase-btn")



purchase.addEventListener("click",()=>{
    
    
    console.log(arrayOfId)

    window.location.href = "./booked.html"
    fetch("http://localhost:3000/book/showTrip",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            idTrip:[arrayOfId]
        })
    }).then(res=>res.json()).then(data=>{
        console.log(data)
    })

}

)


