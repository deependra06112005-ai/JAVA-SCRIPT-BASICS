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

async function seed(){
    await Paint.deleteMany({})
    await Paint.insertMany([
        { name: "Royal Shyne", price: 4500, quantity: 10 },
        { name: "Royal Luxuxry Shyne", price: 3800, quantity: 5 },
        { name: "Royale Luxury Emulsion", price: 2499, quantity: 8 },
        { name: "Apcolite Premium Gloss Enamel", price: 2800, quantity: 15 },
        { name: "Tractor Sparc", price: 2300, quantity: 20 },
        { name: "Dulux Weathershield", price: 3750, quantity: 12 }
    ])
    console.log("Data added successfully")
    process.exit()
}