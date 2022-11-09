let buttonSearch = document.querySelector("#search-button")


const ordersId = []
// let dateExample = "2022-11-08T12:07:44.449Z"
// let getDateTimeOfdateExample = new Date(dateExample).getTime()
// let dateOfTheDays = new Date().getTime()
// console.log(dateOfTheDays)

// console.log(getDateTimeOfdateExample)
// let splite = getHourFrom.split("T")
// let date = splite[0]
// let time = splite[1]


// console.log(hour+":"+minute)
// getHourFrom = new Date(getHourFrom).toLocaleTimeString("en")
// console.log(getHourFrom)
// console.log("hello word");




// const xs = "2022-11-08T11:23:03.585+00:00"
// const xy = "2022-11-08"

// let ezaz = new Date(xs).toLocaleDateString("en") 

// //date of the day
// let dateOfTheDay = new Date().getTime()
// console.log(dateOfTheDay)
// let x = "2022-11-08T11:01:27.830+00:00";
// //split the string take the first part
// let xsj = new Date(x).toLocaleDateString("en")
// console.log(xsj)

// let a = "2022-11-08"
buttonSearch.addEventListener("click",()=>{

    let departure = document.querySelector("#departure").value 
    //store the value of the departure in local storage
    localStorage.setItem("departure",departure)


    let arrival = document.querySelector("#arrival").value
    //store the value of the arrival in local storage
    localStorage.setItem("arrival",arrival)

    
    let dateInput = document.querySelector("#date").value
    //store the value of the date in local storage
    localStorage.setItem("date",dateInput)

    if(departure&&arrival&&dateInput){
        // if(localStorage.getItem("departure")==departure && localStorage.getItem("arrival")==arrival && localStorage.getItem("date")==dateInput){
        //     buttonSearch.disabled = true
        // }else{
        //     buttonSearch.disabled = false
        // }
        fetch(`http://localhost:3000/trips/getTrip/${departure}/${arrival}/${dateInput}`).then(res=>res.json()).then(data=>{
                if(data.result){
                    
                    document.querySelector(".list-group").style.display="block"
                    document.querySelector("#figure").style.display = "none"
                    for(let i = 0;i<data.data.length;i++){
                
                        // console.log(data.data[i])
                        let departure = data.data[i].departure
                        let arrival = data.data[i].arrival
                        let date = data.data[i].date
                        let price = data.data[i].price
                        let hourFromDate = data.data[i].date
                        let hourFrom = hourFromDate.split("T")
                        let hour = hourFrom[1]  
                        let hourAndMinute = hour.split(":")
                        let hourOnly = hourAndMinute[0]
                        let minuteOnly = hourAndMinute[1]
                        let hourAndMinuteOnly = hourOnly+":"+minuteOnly
                        let getTimeFrom  = new Date(hourAndMinuteOnly).getTime()
                        let dateOfTheTrip = new Date(data.data[i].date).getTime()

                        let dateOfTheDay = new Date().getTime()
                        if(dateOfTheTrip>dateOfTheDay){
                            
                            console.log(data.data.length)
                        
                            // console.log(dateOfTheTrip)
                            // console.log(dateOfTheDay)
        
                    document.querySelector(".list-group").innerHTML+=`
                    <li class="list-group-item animate__animated animate__fadeInLeft">${departure}>${arrival}   ${hourAndMinuteOnly}   `+`  ${price}€ <span class='book' data-id="${data.data[i]._id}">Book </span></li>`

                    for(let i = 0;i<document.querySelectorAll(".book").length;i++){

                        document.querySelectorAll(".book")[i].addEventListener("click",()=>{
                            window.location.href = "./cart.html"
                            let id = document.querySelectorAll(".book")[i].getAttribute("data-id")
                            console.log(id)
                         //check if the id is already in the array
                          
                                ordersId.push(id)
                          fetch(`http://localhost:3000/cart/idTrip`,
                           {
                                 method:"POST",
                                    headers:{
                                        "Content-Type":"application/json"
                                    },
                                    body:JSON.stringify({
                                        idTrip:id               })

                           }).then(res=>res.json()).then(data=>{
                                 if(data.result){
                                      alert("you have booked successfully")
                                 }
                            })

                        
                            

                        })
                    
                    
                }
                        }
                        }

                }else{
                    document.querySelector("#figure>img").src ="./images/notfound.png"
                    document.querySelector("#figure>img").style.display = "block"
                    document.querySelector("#figure>figcaption>p").innerText = data.message
                    }

            
        })

        
    }else{

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vos champs sont vides',
          })    }




})

    

// function fetching(){
//     fetch("http://localhost:3000/trips/getTrips").then(res=>res.json()).then(data=>{
//         console.log(data.data)
//         for(let i = 0;i<data.data.length;i++){
//             let departure = data.data[i].departure
//             let arrival = data.data[i].arrival
//             let date = data.data[i].date
//             let price = data.data[i].price
//             let hourFromDate = data.data[i].date
//             let hourFrom = hourFromDate.split("T")
//             let hour = hourFrom[1]  
//             let hourAndMinute = hour.split(":")
//             let hourOnly = hourAndMinute[0]
//             let minuteOnly = hourAndMinute[1]
//             let hourAndMinuteOnly = hourOnly+":"+minuteOnly
//             let getTimeFrom  = new Date(hourAndMinuteOnly).getTime()
//             let dateOfTheTrip = new Date(data.data[i].date).getTime()

//             let dateOfTheDay = new Date().getTime()
//             if(dateOfTheTrip>dateOfTheDay){
//                 console.log(dateOfTheTrip)
//                 console.log(dateOfTheDay)

//             document.querySelector(".list-group").innerHTML+=`
//             <li class="list-group-item animate__animated animate__fadeInLeft">${departure}>${arrival}   ${hourAndMinuteOnly}   `+`  ${price}€ <span class='book' data-id="${data.data[i]._id}">Book </span></li>`
//             }
//         }
//     })
// }

