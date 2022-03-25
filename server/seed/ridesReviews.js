const db = require('../db')
const { Ride, Review } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createReviews = async () => {
    const reviews = [
        {
            title: 'Test Review 1',
            rating: 5,
            description: ' Test Description'
        }
    ]
    await Review.insertMany(reviews);
    console.log('Created Reviews!');
    return reviews;
}

const createRides = async (reviews) => {
    console.log(reviews)

    const rides = [
        { 
            name: 'X2',
            type: 'Roller Coaster',
            minHeight: 48,
            description: "Get ready to enter an all-new realm on X2, a trail-blazing fifth dimension roller coaster. With its 360-degree rotating seats and head-first, face down drops, X has been one of the most popular thrill rides on the planet. On ordinary roller coasters, the train stays in line with the track… but there is nothing ordinary about X2. Go ahead and take in the view on the long ride up, 200 feet in the air.  Enjoy the groundbreaking use of music, sound effects, and fire that have been carefully designed to heighten your total sensory overload. X2’s utterly innovative design will keep your mind in full thrust the entire time. Your 360-degree seats extend on wings far off the track.  So while you are careening down the rails at 76 miles per hour through an unreal assortment of dives, flips and twists, as well as two ultra-rare “raven turns” — half loops that change their minds midway and become sheer drops—your body will also be flipping around 360-degrees over and over again. Quite simply, you will be spun into another dimension.",
            averageWaitTime: 60,
            currentWaitTime: 70,
            status: 'open',
            reviews: reviews._id,
            image: "https://i.pinimg.com/736x/60/5b/93/605b931ec290ef64f83598810d111a25.jpg"
        },
        {
            name: 'Hulk Coaster',
            type: 'Roller Coaster',
            minHeight: 54,
            description: "You’ve volunteered to take part in a science experiment based on Dr. Bruce Banner’s research—but a blast of gamma radiation changes everything. You launch up to 67 miles per hour as Hulk-like power propels you upside down into a zero-gravity roll, racing faster and faster. Hang on as this high-speed, red-line rampage smashes its way through the sky.",
            averageWaitTime: 45,
            currentWaitTime: 30,
            status: 'open',
            reviews: reviews._id,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/90/The_Hulk_Coaster_%285143123646%29.jpg"
        },
        {
            name: 'Silver Star',
            type: 'Roller Coaster',
            minHeight: 55,
            description: "Silver Star features no inversions, but many camelback hills: After the first drop, the train travels leftwards and up onto the first camel back, and then a second. The train performs a 180 degree return in a Horseshoe-element. The train then continues onto another camel back followed by a mid-course brake segment. A 270 degree upwards turn brings the train back under the lift hill and onto one last camel back. An S-bend brings the train to the on-ride photo and final brake run. Nearly every camel back is fitted with trim brakes to regulate the train's speed. The original friction-brake trims made the ride uncomfortable for some riders, however these have been refitted with magnetic trims.",
            averageWaitTime: 60,
            currentWaitTime: 55,
            status: 'open',
            reviews: reviews._id,
            image: "https://rcdb.com/aaaezqa"
        }
    
    ]

    await Ride.insertMany(rides)
    console.log(rides)
    console.log("Created some rides!")
}


const run = async () => {
    const reviews = await createReviews();
    await createRides(reviews);

    db.close()
}


run()