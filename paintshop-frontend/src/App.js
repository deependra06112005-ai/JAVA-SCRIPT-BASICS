import {useState, useEffect} from "react";
import './App.css'

function App() {
  const[paints, setpaints]=useState([])
  const[showLowstock, setShowLowStock]=useState(false)
  const[newPaint, setNewPaint]=useState({name:"",price:0,quantity:0})
  const[editingPaint, setEditingPaint]=useState(null)
  const[newQuantity, setNewQuantity]=useState(0)

  useEffect(()=>{
    fetch("https://manuhardware-backend.onrender.com/api/paints")
    .then(res=>res.json())
    .then(data=>setpaints(data))
  },[])

  const addPaint =()=>{
    if(!newPaint.name) return alert("Please enter a name")
      fetch('https://manuhardware-backend.onrender.com/api/paints',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(newPaint)
      })
      .then(res=>res.json())
      .then(data=> setpaints([...paints,data]))
      setNewPaint({name:"",price:0,quantity:0})
  }

  const deletePaint =(id)=>{
    fetch(`https://manuhardware-backend.onrender.com/api/paints/${id}`,{
      method:'DELETE'
    })
    .then(() => setpaints(paints.filter(p => p._id !== id)))
  }
//Editing quantity of paint 
  const updateQuantity =(id)=>{
    fetch(`https://manuhardware-backend.onrender.com/api/paints/${id}`,{
      method:'PUT',
      headers:{'Content-Type':'application/json'}, 
      body:JSON.stringify({quantity: Number(newQuantity)})
    })
    .then(res=>res.json())
    .then(()=>{ 
      setPaints(paints.map(p => p._id === id ? {...p, quantity: Number(newQuantity)} : p));
      setEditingPaint(null); 
      setNewQuantity("");
    }); 
  } ; 
  // Filter paints based on low stock 

  const filteredPaints = showLowstock ? paints.filter(p => p.quantity < 5) : paints

  return (
    <div  className="container">
      <h1>Manu Hardware-PaintShop</h1>
      <p className="stats">Total Products : {paints.length}</p>
      <button  className ="btn-filter"onClick={()=> setShowLowStock(!showLowstock)}>{showLowstock ? "Show All" : "Show Low Stock"}</button>
      <div className="add-form">
        <h2>Add New Paint</h2>
        <input type="text" placeholder="Name" value={newPaint.name} onChange={e => setNewPaint({...newPaint, name: e.target.value})} />
        <input type="number" placeholder="Price" value={newPaint.price} onChange={e => setNewPaint({...newPaint, price: Number(e.target.value)})} />
        <input type="number" placeholder="Quantity" value={newPaint.quantity} onChange={e => setNewPaint({...newPaint, quantity: Number(e.target.value)})} />
        <button onClick={addPaint}>Add Paint</button>
      </div> 
      {filteredPaints.map (paint => (
        <div key={paint._id} className="paint-card">
          <div className ="paint-info">
          <h3>{paint.name}</h3>
          <p>Price: Rs.{paint.price}</p>
          <p>Quantity: {paint.quantity}{paint.quantity <5 && <span className="low-stock"> Low Stock</span>}</p>
          </div>
          <div className="paint-actions">
          <button className="btn-delete" onClick={() => deletePaint(paint._id)}>Delete</button>
          {editingPaint===paint.id ? (
            <span className="edit-box">
              <input value = {newQuantity} onChange={e => setNewQuantity(e.target.value)} />
              <button onClick={() => updateQuantity(paint._id)}>Save</button>
              <button onClick={()=> setEditingPaint(null)}>Cancel</button>
            </span>
            )  : (
              <button className = "btn-edit"onClick={() => setEditingPaint(paint._id)}>Edit Quantity</button>
            )}
        </div>
    </div>
      ))}
    </div>
  );
}

export default App