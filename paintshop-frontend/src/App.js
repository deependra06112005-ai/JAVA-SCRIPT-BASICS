import { useState } from  'react';  
    
function App(){
  const [showLowstock, setShowLowStock] = useState(false);
  const[newPaint, setNewPaint] = useState({
    name: "", price: 0, quantity: 0});
    const [editingPaint, setEditingPaint] = useState(null);
    const [newQuantity, setNewQuantity] = useState("");
  const [paints, setPaints ] = useState([
    { name: "Royal Shyne 10L", price: 1500, quantity: 10 }, 
    { name: "Royal Shyne 20L", price: 2800, quantity: 8 },
    {name: "Royal Luxuxry Shyne 20L", price: 3550, quantity:5},
    {name:"Royale Luxury Emulsion 10L", price: 1500, quantity: 10},
    {name:"Royale Luxury Emulsion 20L", price: 2800, quantity: 8},
    {name:"Royale Luxury Emulsion 5L", price: 800, quantity: 15},
    {name:"Apcolite Premium Gloss Enamel 1L", price: 400, quantity: 20},
    {name:"Apcolite Premium Gloss Enamel 4L", price: 1200, quantity: 3},
    {name:"Apcolite Premium Gloss Enamel 10L", price: 2800, quantity: 7},
    {name:"Apcolite Premium Gloss Enamel 20L", price: 5000, quantity: 2},
    {name:"Tractor Sparc 1L", price: 350, quantity: 25},
    {name:"Tractor Sparc 4L", price: 1000, quantity: 10},
    {name:"Tractor Sparc 10L", price: 2500, quantity: 5},
    {name:"Tractor Sparc 20L", price: 4500, quantity: 1},
    {name:"Dulux Weathershield 1L", price: 500, quantity: 30},
    {name:"Dulux Weathershield 4L", price: 1500, quantity: 12},
    {name:"Dulux Weathershield 10L", price: 3500, quantity: 6},
    {name:"Dulux Weathershield 20L", price: 6000, quantity: 3},
  ]);
  const dislayPaints = showLowstock ? paints.filter(paint => paint.quantity < 5) : paints;
  return(
    <div>
      <h1>Manu Hardware</h1>
      <h2>Paints</h2>
      <p>Total Products: {paints.length}</p>
      <div>
        <input type ="Paint Name" placeholder ="Paint Name" value={newPaint.name}
         onChange={(e) => setNewPaint({...newPaint, name: e.target.value})}/>
         <input type ="Price" placeholder ="Price" value={newPaint.price}
          onChange={(e) => setNewPaint({...newPaint, price: e.target.value})}/>
         <input type ="Quantity" placeholder ="Quantity" value={newPaint.quantity}
          onChange={(e) => setNewPaint({...newPaint, quantity: e.target.value})}/>  


          <button onClick={() => {
            if(newPaint.name===""){
              alert("Please enter a paint name")
              return;
            }
            setPaints([...paints, newPaint]);
            setNewPaint({ name: "", price: 0, quantity: 0 });
          }}>
            Add Paint  
          </button> 


          <button onClick={() => {
            setPaints(paints.filter(paint => paint.name !== newPaint.name));
            setNewPaint({ name: "", price: 0, quantity: 0 });
          }}>
            Delete
          </button>

      </div>
      <button onClick={()=> setShowLowStock(!showLowstock)}>
        {showLowstock ? "Show All Paints" : "Show Low Stock"} 
      </button> 

      {dislayPaints.map(paint => (
        <div key ={paint.name}>
          <h3>{paint.name}</h3>
          <button onClick ={()=> setEditingPaint(paint.name)}>Edit Quantity</button>
          <p>price: {paint.price}</p>
          {editingPaint === paint.name ? (
            <div>
              <input 
              value ={newQuantity}
              onChange={(e) => setNewQuantity(e.target.value)}
              placeholder="New Quantity"
              />
              <button onClick={() => {
                setPaints(paints.map(p => p.name === editingPaint ? {...p, quantity: newQuantity }:p))
                setEditingPaint(null);
                setNewQuantity("");
              }}>
                Save
              </button>
            </div>
          ) : (
            <p>quantity: {paint.quantity}</p>
          )}


          <p>{paint.quantity <5 ? "red LOW Stock" : " green In Stock"}</p>
        </div>
      ))}
    </div>
  )
}
export default App;    