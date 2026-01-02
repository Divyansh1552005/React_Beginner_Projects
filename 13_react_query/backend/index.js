import express from "express"

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: 'Wooden Table', price: 200 },
    { id: 2, name: 'Modern Chair', price: 120 },
    { id: 3, name: 'Comfort Sofa', price: 450 },
    { id: 4, name: 'Office Desk', price: 300 },
    { id: 5, name: 'Bookshelf', price: 180 }
  ];

  let result = products;

  if (req.query.search) {
    result = products.filter(prod =>
      prod.name.toLowerCase().includes(req.query.search.toLowerCase())
    );
  }

  setTimeout(() => {
    res.send(result);
  }, 3000);
});


app.get("/", (req,res) =>{
    res.send("Alive");
})
  
  
app.listen(port, () =>{
  console.log("Server running!!")
})