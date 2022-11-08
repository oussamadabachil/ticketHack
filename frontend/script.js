let buttonSearch = document.querySelector("#search-button")

console.log("hello word");

const xs = "2022-11-08T11:23:03.585+00:00"
const xy = "2022-11-08"

let     ezaz = new Date(xs).toLocaleDateString("en") 



let x = "2022-11-08T11:01:27.830+00:00";
//split the string take the first part
let xsj = new Date(x).toLocaleDateString("en")
console.log(xsj)

let a = "2022-11-08"
buttonSearch.addEventListener("click",()=>{

    let departure = document.querySelector("#departure").value 
    let arrival = document.querySelector("#arrival").value
    let dateInput = document.querySelector("#date").value
    let newDateInput = new Date(dateInput).toLocaleDateString("en")

    console.log(newDateInput==ezaz)
    // let newDate =dateInput.split("T");
    // let datete = newDate[0]
    // let timestamp = new Date(dateInput).getTime()

    if(departure&&arrival&&dateInput){
        fetch(`http://localhost:3000/trips/getTrip/${departure}/${arrival}/${dateInput}`).then(res=>res.json()).then(data=>{
            console.log(dateInput)
            console.log(data)
            
        })

     
  
    }else{
                // if(data.length>0){
                // console.log(data)
                // }else{
                //     Swal.fire({
                //         icon: 'error',
                //         title: 'Oops...',
                //         text: 'No trip found!',
                //       })  
                // }
            

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vos champs sont vides',
          })    }


})