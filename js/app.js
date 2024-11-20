// Access DOM elements

const confirmBtn = document.getElementById('confirmBtn')
const totalDisplay = document.getElementById('total')
const cartSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('menu-div')
const receipt = document.getElementById('receipt')

// set subtotal and tax
let subtotal = 0
let tax = .07

//grab the menu types
const menuTypes = [
    'appetizers', 
    'etrees', 
    'drinks', 
    'desserts', 
    'sides'
]

// create menu items; array of objects
const menuItems = [
    {
        id: 1,
        type: 'appetizers',
        item: 'Carbonara Arancini',
        description: 'breaded and fried balls of risotto with a stuffed center',
        imgUrl: 'images/Carbonara_Arancini.jpg',
        price: 6.99,
        qty: 0
    }, {
        id: 2,
        type: 'appetizers',
        item: 'Bruschetta of Spring Vegetables',
        description: 'a crusty baguette topped with a medley of fresh vegetables such as cherry tomatoes, asparagus, and peas',
        imgUrl: 'images/Bruschetta.jpg',
        price: 7.45,
        qty: 0
    }, {
        id: 3,
        type: 'appetizers',
        item: 'Autumn Fritto Misto',
        description: 'apples, mushrooms, and zucchini, fried in a batter made extra-light and crisp by adding sparkling wine and whipped egg white',
        imgUrl: 'images/Autumn.jpg',
        price: 10.50,
        qty: 0
    }, {
        id: 4,
        type: 'appetizers',
        item: 'Potato Focaccia Rolls',
        description: 'a flat bread similar to pizza dough that can be either sweet or savory',
        imgUrl: 'images/Potato_Focaccia_Rolls.jpg',
        price: 8.36,
        qty: 0
    }, {
        id: 5,
        type: 'entrees',
        item: 'Manicotti',
        description: 'an Italian-American dish of large, tube-shaped pasta thats stuffed and baked with various fillings and topped with sauce',
        imgUrl: 'images/Manicotti.jpg',
        price: 12.99,
        qty: 0
    }, {
        id: 6,
        type: 'entrees',
        item: 'Lasagne alla Bolognese',
        description: 'Delicate layers of fresh pasta coated in a luxurious mix of hearty Bolognese sauce and creamy béchamel sauce',
        imgUrl: 'images/Lasagne.jpg',
        price: 12.65,
        qty: 0
    }, {
        id: 7,
        type: 'entrees',
        item: 'Pollo alla Cacciatora',
        description: 'The chicken is jointed into pieces and quickly pan-fried, then slowly stewed in a tasty tomato sauce',
        imgUrl: 'images/Pollo.jpg',
        price: 10.98,
        qty: 0
    }, {
        id: 8,
        type: 'entrees',
        item: 'Gnocchi di Patate',
        description: 'a traditional Italian dish of potato dumplings made from mashed potatoes, flour, and eggs',
        imgUrl: 'images/Gnocchi.jpg',
        price: 10.98,
        qty: 0
    }, {
        id: 9,
        type: 'drinks',
        item: 'Coke & Lemon',
        description: 'coca cola and lemon juice',
        imgUrl: 'images/coke_lemon.jpg',
        price: 1.12,
        qty: 0
    }, {
        id: 10,
        type: 'drinks',
        item: 'Mountain Dew',
        description: 'soft drink',
        imgUrl: 'images/Mountain_Dew.jpg',
        price: 1.12,
        qty: 0
    }, {
        id: 11,
        type: 'drinks',
        item: 'Dr. Pepper',
        description: 'soft drink',
        imgUrl: 'images/Dr._Pepper.jpg',
        price: 1.12,
        qty: 0
    }, {
        id: 12,
        type: 'drinks',
        item: 'water',
        description: 'water',
        imgUrl: 'images/water.jpg',
        price: 0.00,
        qty: 0
    }, {
        id: 13,
        type: 'desserts',
        item: 'Tiramisu',
        description: 'delicate ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and cocoa powder',
        imgUrl: 'images/Tiramisu.jpg',
        price: 5.00,
        qty: 0
    }, {
        id: 14,
        type: 'desserts',
        item: 'cannoli',
        description: 'a tube-shaped Italian dessert that consists of fried pastry dough stuffed with a sweet, creamy cheese filling',
        imgUrl: 'images/cannoli.jpg',
        price: 4.36,
        qty: 0
    }, {
        id: 15,
        type: 'desserts',
        item: 'panna cotta',
        description: 'a pudding consisting of good quality cream with possibly some milk, a minimal amount of gelatine and some sugar',
        imgUrl: 'images/panna_cotta.jpg',
        price: 6.25,
        qty: 0
    }, {
        id: 16,
        type: 'desserts',
        item: 'Zuppa Inglese',
        description: 'The classic recipe for Zuppa Inglese includes a layer of sponge cake or ladyfingers soaked in a liqueur of cocoa cream with another layer of sponge cake or ladyfingers and liqueur',
        imgUrl: 'images/Zuppa_Inglese.jpg',
        price: 7.96,
        qty: 0
    }, {
        id: 17,
        type: 'sides',
        item: 'Insalata Pantesca',
        description: ' Insalata Pantesca is a beautiful, fresh salad made with potatoes, capers, olives and tomatoes, oregano and a simple zingy dressing',
        imgUrl: 'images/Insalata_Pantesca.jpg',
        price: 2.85,
        qty: 0
    }, {
        id: 18,
        type: 'sides',
        item: 'Ciambotta',
        description: 'a hearty Italian vegetable stew thats made with fresh summer vegetables, herbs, and olive oil',
        imgUrl: 'images/Ciambotta.jpg',
        price: 2.52,
        qty: 0
    }, {
        id: 19,
        type: 'sides',
        item: 'Ricotta Chicken Croquettes',
        description: 'a dish of chicken and ricotta cheese formed into croquettes, which are balls or rolls of meat, fish, or vegetables that are fried',
        imgUrl: 'images/Ricotta_Chicken_Croquettes.jpg',
        price: 1.50,
        qty: 0
    }, {
        id: 20,
        type: 'sides',
        item: 'Sicilian Fennel and Orange Salad',
        description: 'a classic dish that combines the flavors of fennel, orange, and olive oi',
        imgUrl: 'images/Sicilian_Fennel_and_Orange_Salad.jpg',
        price: 1.50,
        qty: 0
    }
]

// confirm button 
confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    console.log('click')
})

// load the menu items
// make rows
menuDivs.forEach(div => {
    const menuSubheading = document.createElement('h3')
    menuSubheading.classList.add('menu-subheading', 'text-capitalize')
    const row = document.createElement('div')
    row.classList.add('row')
    div.appendChild(menuSubheading)
    div.appendChild(row)
})
for (let i = 0; i < menuTypes.length; i++) {
    menuDivs[i].children[0].innerText = menuTypes[i]
    menuDivs[i].children[1].setAttribute('id', `${menuTypes[i]}Row`)
    console.log(menuDivs[i])
}
// grab the appRow

const appRow = document.getElementById('appetizersRow')
const entreesRow = document.getElementById('entreesRow')
const drinksRow = document.getElementById('drinksRow')
const dessertsRow = document.getElementById('dessertsRow')
const sidesRow = document.getElementById('sidesRow')

// build cols and cards

menuItems.forEach(item => {
    //  do stuff
    const column = document.createElement('div')
    column.classList.add('col-sm-3')
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image-top" />
        <div class="card-body">
            <h4 class="card-title text-capitalize item-item">${item.item}</h4>
            <p class="card-text text-uppercase item-desc">${item.desc}</p>
        </div>
    `
})