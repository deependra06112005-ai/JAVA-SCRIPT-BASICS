const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const express = require('express')
const cors = require('cors')

mongoose.connect('mongodb+srv://deependra06112005_db_user:deepu0611@cluster0.lvbu2hc.mongodb.net/?appName=Cluster0')
.then(()=>{ console.log("MongoDB connected") })
.catch((err)=>{ console.log("Error:",err) }) 

const app = express()
app.use(cors())
app.use(express.json())

const userSchema = new mongoose.Schema({ username: String, password: String })
const User = mongoose.model('User', userSchema)

const paintSchema = new mongoose.Schema({ name: String, price: Number, quantity: Number })
const Paint = mongoose.model('Paint', paintSchema)

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']
  if(!token) return res.status(401).json({message: "Token nahi hai"})
  try {
    const decoded = jwt.verify(token, 'secret123')
    req.user = decoded
    next()
  } catch(err) {
    res.status(401).json({message: "Token galat hai"})
  }
}

app.post('/api/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10)
  const user = new User({username: req.body.username, password: hashedPassword})
  await user.save()
  res.json({message: "User registered"})
})

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({username: req.body.username})
  if(!user) return res.status(400).json({message: "User nahi mila"})
  const isMatch = await bcrypt.compare(req.body.password, user.password)
  if(!isMatch) return res.status(400).json({message: "Password galat hai"})
  const token = jwt.sign({id: user._id}, 'secret123', {expiresIn: '1d'})
  res.json({token})
})

app.get('/api/paints', async (req, res) => {
  const paints = await Paint.find()
  res.json(paints)
})

app.post('/api/paints', verifyToken, async (req, res) => {
  const paint = new Paint(req.body)
  await paint.save()
  res.json(paint)
})

app.delete('/api/paints/:id', verifyToken, async (req, res) => {
  await Paint.findByIdAndDelete(req.params.id)
  res.json({message: "Paint deleted"})
})

app.put('/api/paints/:id', verifyToken, async (req, res) => {
  const updatedPaint = await Paint.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.json(updatedPaint)
})

app.listen(3000, () => { console.log("Server is running on port 3000") })

