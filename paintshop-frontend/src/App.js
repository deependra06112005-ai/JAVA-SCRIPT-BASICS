function App(){
  
  const paints =[
    { name: "Royal Shyne 20L", price: 2800, quantity: 8 },
    {name: "Royal Luxuxry Shyne 20L", price: 3550, quantity:5},
    {name:"Royale Luxury Emulsion 10L", price: 1500, quantity: 10},
    {name:"Royale Luxury Emulsion 20L", price: 2800, quantity: 8},
    {name:"Royale Luxury Emulsion 5L", price: 800, quantity: 15},
  ]
  return(
    <div>
      <h1>Manu Hardware</h1>
      <h2>Paints</h2>
      {paints.map(paint => (
        <div key ={paint.name}>
          <h3>{paint.name}</h3>
          <p>price: {paint.price}</p>
          <p>Quantity: {paint.quantity}</p>
          <p>{paint.quantity <5 ? "red LOW Stock" : " green In Stock"}</p>
        </div>
      ))}
    </div>
  )
}
export default App;