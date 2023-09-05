const express = require('express');	// Import the express library
const app = express();	// Create an instance of the express application
const PORT = process.env.PORT || 3000;	// Set the port number
const fruits = require('./models/fruits');	// Import the fruits module
const vegetables = require('./models/vegetables');// Import the vegetables module

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
app.get('/fruits', (req, res) => {
  console.log('Index controller');
  res.render('fruits/Index', { fruits });
});

// New
app.get('/fruits/new', (req, res) => {
  console.log('New controller');
  res.render('fruits/New');
});

// Delete

// Update

// Create
app.post('/fruits', (req, res) => {
  // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
  //   req.body.readyToEat = true; //do some data correction
  // } else { //if not checked, req.body.readyToEat is undefined
  //   req.body.readyToEat = false; //do some data correction
  // }
  req.body.readyToEat = req.body.readyToEat === 'on';

  fruits.push(req.body);
  console.log(fruits);

  res.send('data received');
});

// Edit

// Show
app.get('/fruits/:id', (req, res) => {
  //second param of the render method must be an object
  res.render('fruits/Show', {
    //there will be a variable available inside the jsx file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    fruit: fruits[req.params.id],
  });
});

//part 2 vegetables new/ create added 
// Index Route
app.get('/vegetables', (req, res) => {
  res.render('vegetables/IndexV', { vegetables });
});

// New
app.get('/vegetables/newV', (req, res) => {
  console.log('New controller');
  res.render('vegetables/NewV');
});

// Delete

// Update

// Create
app.post('/vegetables', (req, res) => {
  
  req.body.readyToEat = req.body.readyToEat === 'on';

  vegetables.push(req.body);
  console.log(vegetables);

  res.send('data received');
});


//Show Route
app.get('/vegetables/:id', (req, res) => {
  //second param of the render method must be an object
  res.render('vegetables/ShowV', {
    //there will be a variable available inside the jsx file called vegetables
    vegetable: vegetables[req.params.id],
  });
});



//app is listening
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});





