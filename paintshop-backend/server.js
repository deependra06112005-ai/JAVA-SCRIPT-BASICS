const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://deependra06112005_db_user:deepu0611@cluster0.lvbu2hc.mongodb.net/?appName=Cluster0').then(()=>{
console.log("Connected to MongoDB")
}).catch((error)=>{
    console.log("Error:",error)
})
const cors = require('cors')
const express= require('express')
const app =express()
app.use(express.json())
app.use(cors())

const paintSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
})
const Paint = mongoose.model('Paint', paintSchema)

app.get('/api/paints', async (req, res) => {
    const paints = await Paint.find()
    res.json(paints)
})

app.post('/api/paints', async (req, res) => {
    const paint = newPaint(req.body)
    await paint.save()
    res.json(paint)
})

app.delete('/api/paints/:id', async (req, res) => {
    await Paint.findByIdAndDelete(req.params.id)
    res.json({ message: "Paint deleted successfully" })
})

app.put('/api/paints/:id', async (req, res) => {
    const updatedPaint = await Paint.findByIdAndUpdate(req.params.id, req.body,)
    res.json(paint)

})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})





