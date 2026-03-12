const express= require('express')
 const app =express()


app.use(express.json())


 const paints = [
        {id:1, name:"Royal Shyne !0L", price:1500, quantity:10},
        {id:2, name:"Royal Shyne 20L", price:2800, quantity:8},
        {id:3, name:"Royal Luxury Shyne 20L", price:3550, quantity:5},
        {id:4, name:"Royale Luxury Emulsion 10L", price:1500, quantity:10},
        {id:5, name:"Royale Luxury Emulsion 20L", price:2800, quantity:8},
    ]

    app.get('/api/paints',(req,res)=>{
        res.json(paints)
    })
    app.post('/api/paints',(req,res)=>{
        const newPaint = req.body
        paints.push(newPaint)
        res.json(newPaint)
        
    })

    app.listen(3000,()=>{
    console.log("Server is running on port 3000")
    })