// 1) Use npm to install ejs in the terminal


// 2) create a views and a public folder



// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 




// 4) Now in your views folder create your EJS file and add your HTML code from your planning document



const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 
const recipes = [
  {
    id: 1,
    title: "Fluffy Pancakes",
    category: "Breakfast",
    description: "Soft and fluffy pancakes perfect for a quick morning meal.",
    ingredients: [
      "1 cup flour",
      "1 cup milk",
      "1 egg",
      "2 tbsp sugar",
      "1 tsp baking powder"
    ],
    instructions: [
      "Mix dry ingredients together.",
      "Add milk and egg.",
      "Whisk until smooth.",
      "Pour onto hot pan and cook until golden."
    ],
    image: "images/pancakes.jpg",
    prepTime: "20 minutes",
    difficulty: "Easy"
  },
  {
    id: 2,
    title: "Avocado Toast",
    category: "Breakfast",
    description: "Crispy toast topped with creamy mashed avocado.",
    ingredients: [
      "2 slices bread",
      "1 ripe avocado",
      "Salt",
      "Pepper",
      "Lemon juice"
    ],
    instructions: [
      "Toast the bread.",
      "Mash avocado with salt, pepper, and lemon.",
      "Spread mixture on toast.",
      "Serve immediately."
    ],
    image: "images/avocado-toast.jpg",
    prepTime: "10 minutes",
    difficulty: "Easy"
  },
  {
    id: 3,
    title: "Grilled Chicken Salad",
    category: "Lunch",
    description: "Fresh salad topped with juicy grilled chicken.",
    ingredients: [
      "2 chicken breasts",
      "Mixed greens",
      "Cherry tomatoes",
      "Cucumber",
      "Salad dressing"
    ],
    instructions: [
      "Season and grill chicken.",
      "Chop vegetables.",
      "Slice chicken.",
      "Combine everything in a bowl and add dressing."
    ],
    image: "images/chicken-salad.jpg",
    prepTime: "30 minutes",
    difficulty: "Medium"
  },
  {
    id: 4,
    title: "Spaghetti Bolognese",
    category: "Dinner",
    description: "Classic pasta with rich meat sauce.",
    ingredients: [
      "Spaghetti",
      "Ground beef",
      "Tomato sauce",
      "Onion",
      "Garlic"
    ],
    instructions: [
      "Cook spaghetti according to package.",
      "Brown beef with onion and garlic.",
      "Add tomato sauce and simmer.",
      "Serve sauce over pasta."
    ],
    image: "images/spaghetti.jpg",
    prepTime: "40 minutes",
    difficulty: "Medium"
  },
  {
    id: 5,
    title: "Vegetable Stir Fry",
    category: "Dinner",
    description: "Quick and healthy vegetable stir fry.",
    ingredients: [
      "Broccoli",
      "Carrots",
      "Bell peppers",
      "Soy sauce",
      "Garlic"
    ],
    instructions: [
      "Heat oil in pan.",
      "Add vegetables and cook until tender.",
      "Add soy sauce and garlic.",
      "Stir and serve hot."
    ],
    image: "images/stir-fry.jpg",
    prepTime: "25 minutes",
    difficulty: "Easy"
  }
];


// 6) Add static file middleware here
app.use(express.static(__dirname + "/public"))

// 7) Set the view engine to ejs here
app.set("view engine", "ejs")

// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it
app.get("/", (req,res)=>{
res.sendFile(__dirname + "/public/index.html")

})


// 9) Create a route handler to your overview route from your planning document
// Pass in your data array
app.get("/overview", (req,res)=>{
    res.render("overview",{recipes:recipes})
})



// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})