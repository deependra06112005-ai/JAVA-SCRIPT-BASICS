const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://deependra06112005_db_user:deepu0611@cluster0.lvbu2hc.mongodb.net/?appName=Cluster0').then(()=>{
console.log("Connected to MongoDB")
}).catch((error)=>{
    console.log("Error:",error)
})

const paintSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
})
const Paint = mongoose.model('Paint', paintSchema)

const seedData = [
    { name: "Royal Shyne", price: 19.99, quantity: 10 },
    { name: "Royal Luxuxry Shyne", price: 29.99, quantity: 5 },
    { name: "Royale Luxury Emulsion", price: 24.99, quantity: 8 },
    { name: "Apcolite Premium Gloss Enamel", price: 14.99, quantity: 15 },
    { name: "Tractor Sparc", price: 9.99, quantity: 20 },
    { name: "Dulux Weathershield", price: 34.99, quantity: 12 }
]

Paint.insertMany(seedData).then(() => {
    console.log("Data added successfully")
    process.exit()
})