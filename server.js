require("dotenv").config()//needs to be there to work
const express = require('express');	// Import the express library
const app = express();	// Create an instance of the express application
const PORT = process.env.PORT || 3000;	// Set the port number
const Fruit = require('./models/fruit');	// Import the fruits module
const Vegetable = require('./models/vegetable');// Import the vegetables module
const mongoose = require("mongoose");
//console.dir(Fruit) to see all the data
//console.log(process.env.ENVVAR);//my .env file 


//database conection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});
mongoose.connection.once("open", () => {
console.log("connected to mongo");
})

const jsxViewEngine = require('jsx-view-engine');	// Import the jsx-view-engine library

app.set('view engine', 'jsx');// Set the view engine to use JSX
app.set('views', './views');	// Set the views directory
app.engine('jsx', jsxViewEngine());// Set the engine to use jsxViewEngine

// Middleware 
app.use((req, res, next) => {
  console.log('Middleware: I run for all routes, 1');
  next();
});
// By implementing the line below, we now have access to the req.body. Which is the parsed formData from the form request.
app.use(express.urlencoded({ extended: false }));

// const middleware = (req, res, next) => {
//   console.log('Middleware: I run for all routes, 1');
//   next();
// };

// Index
app.get('/fruits', async (req, res) => {
 try{
const foundFruits = await Fruit.find({})
console.log(foundFruits)
res.status(200).render('fruits/Index',{
  fruits: foundFruits,
})
 } catch (err){

 }
  //res.render('fruits/Index', { Fruits });
});

// New
app.get('/fruits/new', (req, res) => {
  console.log('New controller');
  res.render('fruits/New');
});

// Delete

// Update

// Create
app.post('/fruits', async (req, res) => {
  try{
   req.body.readyToEat = req.body.readyToEat === 'on';
   const createdFruit = await Fruit.create(req.body)
//res.status(201).send(createdFruit);
res.status(201).redirect('/fruits');
  }catch (error){
res.status(400).send(err)
  }
 });

// Edit


// Show
app.get('/fruits/:id', async (req, res) => {
  try {
    const foundFruit = await Fruit.findById(req.params.id);

    //second param of the render method must be an object
    res.render('fruits/Show', {
      //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
      fruit: foundFruit,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});


//part 2 vegetables 
// Add Model for vegetable 
// Rewrite Index Route to use Mongodb
// Rewrite Index View to work with Index Route
// Rewrite Show Route to MongoDB
// Rewrite Create Route to work with MongoDB 
// Index Route
app.get('/vegetables', async (req, res) => {
  try{
 const foundVegetables = await Vegetable.find({})
 console.log(foundVegetables)
 res.status(200).render('vegetables/IndexV',{
   vegetables: foundVegetables,
 })
  } catch (err){
 
  }

 });
 


// New
app.get('/vegetables/newV', (req, res) => {
  console.log('New controller');
  res.render('vegetables/NewV');
});

// Delete

// Update

// Create
app.post('/vegetables', async (req, res) => {
  try{
   req.body.readyToEat = req.body.readyToEat === 'on';
   const createdVegetable = await Vegetable.create(req.body)
//res.status(201).send(createdVegetable);
res.status(201).redirect('/vegetables');
  }catch (error){
res.status(400).send(err)
  }
 });

//Show Route
app.get('/vegetables/:id', async (req, res) => {
  try {
    const foundVegetable = await Vegetable.findById(req.params.id);

    //second param of the render method must be an object
    res.render('vegetables/ShowV', {
      //there will be a variable available inside the jsx file called vegetable, its value is vegetables
      vegetable: foundVegetable,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});



//app is listening
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});





