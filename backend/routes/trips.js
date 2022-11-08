var express = require('express');
const moment = require('moment');
var router = express.Router();
require('../models/connexion')
const trips = require('../models/trips')



router.get("/",(req,res)=>{
    trips.find().then(data=>{
        console.log(data)
        res.json(data)
    })
    
})

router.get("/getTrip/:departure/:arrival/:date",(req,res)=>{


    let departure = req.params.departure
    let arrival = req.params.arrival
    let date = req.params.date  

    let newDate = moment(date).format("YYYY-MM-DD")


   
    //let newDate = new Date(date).toLocaleDateString("en")
    //console.log(newDate)
    trips.find({
        departure:departure,
        arrival:arrival,
        date:newDate
    }).then(data=>{
        if(data.length>0){
            console.log(data)
            res.json(data)
        }else{
            res.json({result:false,message:"No trip found"})
        }
    })
})

    
//     let departure = req.params.departure
//     let arrival = req.params.arrival
//     let date = req.params.date


//     console.log(departure,arrival,date)
//     let newDate = new Date(date).toLocaleDateString("en")
//    trips.find({departure:departure,arrival:arrival,date:newDate}).then(data=>{
//             console.log(data)
//             res.json(data)

//             console.log(data)
//         })
    
    // let departure = req.params.departure
    // let arrival = req.params.arrival
    // let timestamp = req.params.timestamp
    // let date = timestamp.split("T")
    // let dateInput = date[0]
    // let dateInputNew = new Date(dateInput).getTime()

    // trips.find({departure:departure,arrival:arrival,timestamp:dateInputNew}).then(data=>{
    //     console.log(data)
    //     res.json(data)
    // })
    



/* GET home page. */

module.exports = router;
