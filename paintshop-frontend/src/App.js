import { useState, useEffect } from 'react'
import './App.css'

function App(){
  const [paints, setPaints] = useState([])
  const [showLowstock, setShowLowStock] = useState(false)
  const [newPaint, setNewPaint] = useState({ name: "", price: 0, quantity: 0 })
  const [editingPaint, setEditingPaint] = useState(null)
  const [newQuantity, setNewQuantity] = useState("")
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(()=>{
    fetch('https://manuhardware-backend.onrender.com/api/paints')
    .then(res => res.json())
    .then(data => setPaints(data))
  }, [])

  const login = () => {
    fetch('https://manuhardware-backend.onrender.com/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(data => {
      if(data.token){
        setToken(data.token)
        localStorage.setItem('token', data.token)
      } else {
        alert("Login failed")
      }
    })
  }

  const logout = () => {
    setToken('')
    localStorage.removeItem('token')
  }

  const addPaint = () => {
    if(!newPaint.name) return alert("Naam daalo")
    fetch('https://manuhardware-backend.onrender.com/api/paints', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      },
      body: JSON.stringify(newPaint)
    })
    .then(res => res.json())
    .then(data => setPaints([...paints, data]))
    setNewPaint({ name: "", price: 0, quantity: 0 })
  }

  const deletePaint = (id) => {
    fetch(`https://manuhardware-backend.onrender.com/api/paints/${id}`, {
      method: 'DELETE',
      headers: {'authorization': token}
    })
    .then(() => setPaints(paints.filter(p => p._id !== id)))
  }

  const updateQuantity = (id) => {
    fetch(`https://manuhardware-backend.onrender.com/api/paints/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      },
      body: JSON.stringify({quantity: Number(newQuantity)})
    })
    .then(res => res.json())
    .then(() => {
      setPaints(paints.map(p => p._id === id ? {...p, quantity: Number(newQuantity)} : p))
      setEditingPaint(null)
      setNewQuantity("")
    })
  }

  const filteredPaints = showLowstock ? paints.filter(p => p.quantity < 5) : paints

  if(!token) return (
    <div className="container">
      <h1>Manu Hardware - Login</h1>
      <div className="add-form">
        <h2>Owner Login</h2>
        <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
        <button onClick={login}>Login</button>
      </div>
    </div>
  )

  return (
    <div className="container">
      <h1> Hardware - Paint Shop</h1>
      <p className="stats">Total Products: {paints.length}</p>
      <button className="btn-filter" onClick={logout}>Logout</button>
      <button className="btn-filter" onClick={() => setShowLowStock(!showLowstock)}>
        {showLowstock ? "Show All" : "Show Low Stock"}
      </button>
      <div className="add-form">
        <h2>Add New Paint</h2>
        <input type="text" placeholder="Name" value={newPaint.name} onChange={e => setNewPaint({...newPaint, name: e.target.value})} />
        <input type="number" placeholder="Price" value={newPaint.price} onChange={e => setNewPaint({...newPaint, price: Number(e.target.value)})} />
        <input type="number" placeholder="Quantity" value={newPaint.quantity} onChange={e => setNewPaint({...newPaint, quantity: Number(e.target.value)})} />
        <button onClick={addPaint}>Add Paint</button>
      </div>
      {filteredPaints.map(paint => (
        <div key={paint._id} className="paint-card">
          <div className="paint-info">
            <h3>{paint.name}</h3>
            <p>Price: Rs.{paint.price}</p>
            <p>Quantity: {paint.quantity} {paint.quantity < 5 && <span className="low-stock">Low Stock</span>}</p>
          </div>
          <div className="paint-actions">
            <button className="btn-delete" onClick={() => deletePaint(paint._id)}>Delete</button>
            {editingPaint === paint._id ? (
              <span className="edit-box">
                <input value={newQuantity} onChange={e => setNewQuantity(e.target.value)} />
                <button className="btn-save" onClick={() => updateQuantity(paint._id)}>Save</button>
                <button className="btn-cancel" onClick={() => setEditingPaint(null)}>Cancel</button>
              </span>
            ) : (
              <button className="btn-edit" onClick={() => setEditingPaint(paint._id)}>Edit Quantity</button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App 
// This code defines a React component for a paint shop inventory management system. It allows users to log in, view paint products, add new paints, delete existing paints, and update the quantity of paints. The component uses state to manage the list of paints, user authentication token, and form inputs. It also includes functionality to filter paints based on low stock levels.