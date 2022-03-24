const db = require('../db')
const Ride = require('../models/Rides')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const ride = [
        { 
            // Ride 1
        },
        {
            // Ride 2
        }
    
    ]

    await Ride.insertMany(ride)
    console.log("Created some rides!")
}
const run = async () => {
    await main()
    db.close()
}

run()