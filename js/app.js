// Access DOM elements

const confirmBtn = document.getElementById('confirmBtn')
const totalDisplay = document.getElementById('total')
const cartSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

// set subtotal and tax
let subtotal = 0
let tax = .07

//grab the menu types
const menuTypes = [
    'appetizers', 
    'entrees', 
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
        imgUrl: 'Carbonara_Arancini.jpg',
        price: 6.99,
        qty: 0
    }, {
        id: 2,
        type: 'appetizers',
        item: 'Bruschetta of Spring Vegetables',
        description: 'a crusty baguette topped with a medley of fresh vegetables such as cherry tomatoes, asparagus, and peas',
        imgUrl: 'Bruschetta.jpg',
        price: 7.45,
        qty: 0
    }, {
        id: 3,
        type: 'appetizers',
        item: 'Autumn Fritto Misto',
        description: 'apples, mushrooms, and zucchini, fried in a batter made extra-light and crisp by adding sparkling wine and whipped egg white',
        imgUrl: 'Autumn.jpg',
        price: 10.50,
        qty: 0
    }, {
        id: 4,
        type: 'appetizers',
        item: 'Potato Focaccia Rolls',
        description: 'a flat bread similar to pizza dough that can be either sweet or savory',
        imgUrl: 'Potato_Focaccia_Rolls.jpg',
        price: 8.36,
        qty: 0
    }, {
        id: 5,
        type: 'entrees',
        item: 'Manicotti',
        description: 'an Italian-American dish of large, tube-shaped pasta thats stuffed and baked with various fillings and topped with sauce',
        imgUrl: 'M.jpg',
        price: 12.99,
        qty: 0
    }, {
        id: 6,
        type: 'entrees',
        item: 'Lasagne alla Bolognese',
        description: 'Delicate layers of fresh pasta coated in a luxurious mix of hearty Bolognese sauce and creamy béchamel sauce',
        imgUrl: 'Lasagne.jpg',
        price: 12.65,
        qty: 0
    }, {
        id: 7,
        type: 'entrees',
        item: 'Pollo alla Cacciatora',
        description: 'The chicken is jointed into pieces and quickly pan-fried, then slowly stewed in a tasty tomato sauce',
        imgUrl: 'Pollo.jpg',
        price: 10.98,
        qty: 0
    }, {
        id: 8,
        type: 'entrees',
        item: 'Gnocchi di Patate',
        description: 'a traditional Italian dish of potato dumplings made from mashed potatoes, flour, and eggs',
        imgUrl: 'Gnocchi.jpg',
        price: 10.98,
        qty: 0
    }, {
        id: 9,
        type: 'drinks',
        item: 'Coke & Lemon',
        description: 'coca cola and lemon juice',
        imgUrl: 'coke_lemon.jpg',
        price: 1.13,
        qty: 0
    }, {
        id: 10,
        type: 'drinks',
        item: 'Mountain Dew',
        description: 'soft drink',
        imgUrl: 'Mountain_Dew.jpg',
        price: 1.12,
        qty: 0
    }, {
        id: 11,
        type: 'drinks',
        item: 'Dr. Pepper',
        description: 'soft drink',
        imgUrl: 'Dr._Pepper.jpg',
        price: 1.12,
        qty: 0
    }, {
        id: 12,
        type: 'drinks',
        item: 'water',
        description: 'water',
        imgUrl: 'W.jpg',
        price: 0.00,
        qty: 0
    }, {
        id: 13,
        type: 'desserts',
        item: 'Tiramisu',
        description: 'delicate ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and cocoa powder',
        imgUrl: 'T.jpg',
        price: 5.00,
        qty: 0
    }, {
        id: 14,
        type: 'desserts',
        item: 'cannoli',
        description: 'a tube-shaped Italian dessert that consists of fried pastry dough stuffed with a sweet, creamy cheese filling',
        imgUrl: 'cannoli.jpg',
        price: 4.36,
        qty: 0
    }, {
        id: 15,
        type: 'desserts',
        item: 'panna cotta',
        description: 'a pudding consisting of good quality cream with possibly some milk, a minimal amount of gelatine and some sugar',
        imgUrl: 'panna_cotta.jpg',
        price: 6.25,
        qty: 0
    }, {
        id: 16,
        type: 'desserts',
        item: 'Zuppa Inglese',
        description: 'The classic recipe for Zuppa Inglese includes a layer of sponge cake or ladyfingers soaked in a liqueur of cocoa cream with another layer of sponge cake or ladyfingers and liqueur',
        imgUrl: 'Zuppa_Inglese.jpg',
        price: 7.96,
        qty: 0
    }, {
        id: 17,
        type: 'sides',
        item: 'Insalata Pantesca',
        description: ' Insalata Pantesca is a beautiful, fresh salad made with potatoes, capers, olives and tomatoes, oregano and a simple zingy dressing',
        imgUrl: 'Insalata_Pantesca.jpg',
        price: 2.85,
        qty: 0
    }, {
        id: 18,
        type: 'sides',
        item: 'Ciambotta',
        description: 'a hearty Italian vegetable stew thats made with fresh summer vegetables, herbs, and olive oil',
        imgUrl: 'Ciambotta.jpg',
        price: 2.52,
        qty: 0
    }, {
        id: 19,
        type: 'sides',
        item: 'Ricotta Chicken Croquettes',
        description: 'a dish of chicken and ricotta cheese formed into croquettes, which are balls or rolls of meat, fish, or vegetables that are fried',
        imgUrl: 'RCC2.jpg',
        price: 2.74,
        qty: 0
    }, {
        id: 20,
        type: 'sides',
        item: 'Sicilian Fennel and Orange Salad',
        description: 'a classic dish that combines the flavors of fennel, orange, and olive oi',
        imgUrl: 'Sicilian_Fennel_and_Orange_Salad.jpg',
        price: 2.52,
        qty: 0
    }
]

// confirm button 
confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    // console.log('click')
    getTotal()
})



// getTotal()
const getTotal =()=> {

        console.log(cartSubtotal);
        
    const subtotal = parseFloat(cartSubtotal.innerText)
    const tipAmt = parseFloat(document.getElementById('tipAmt').value)
    const otherAmt = parseFloat(document.getElementById('otherAmt').value)
    const yourTip = document.getElementById('yourTip')
    const theSubtotal = document.getElementById('theSubtotal')
    const taxDisplay = document.getElementById('tax')

    let taxTotal = subtotal * tax

    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt)

    let total = isNaN(tipAmt) ? subtotal + otherAmt + taxTotal : receiptTip + subtotal + taxTotal

    theSubtotal.innerText = subtotal
    taxDisplay.innerText = taxTotal.toFixed(2)
    yourTip.innerText = receiptTip.toFixed(2)
    totalDisplay.innerText = total.toFixed(2)
}

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

const appsRow = document.getElementById('appetizersRow')
const entreesRow = document.getElementById('entreesRow')
const drinksRow = document.getElementById('drinksRow')
const dessertsRow = document.getElementById('dessertsRow')
const sidesRow = document.getElementById('sidesRow')

// build cols and cards

menuItems.forEach(item => {
    // do stuff
    const column = document.createElement('div')
    column.classList.add('col-sm-3')

    const card = document.createElement('div')
    card.classList.add('card', 'h-100')

    card.innerHTML = `
        <img src="images/${item.imgUrl}" alt="${item.description}" class="img-fluid menu-image card-image-top" />
        <div class="card-body">
            <h4 class="card-title text-capitalize item-item">${item.item}</h4>
            <p class="card-text text-uppercase item-desc">${item.description}</p>
        </div>
        <footer class="card-footer">
            <p class="card-text item-price">$${item.price}</p>
            <div class="buttons-div d-flex justify-content-around">
                <button
                    class="btn btn-danger cart-btn text-capitalize"
                    id="Btn${item.id}"
                    data-id="${item.id}"
                    data-price="${item.price}"
                    data-qty="${item.qty}"
                    data-item="${item.item}"
                >add to cart</button>
                <div class="qty-div">
                    <button 
                        class="btn btn-primary btn-subtract" 
                        id="btnSubtract${item.id}" 
                        data-id="${item.id}"
                        data-qty="${item.qty}"
                        > - </button>
                        <span class="quantity" id="quantity${item.id}">${item.qty}</span>
                        <button 
                        class="btn btn-primary btn-add"
                        id="btnAdd${item.id}"
                        data-id="${item.id}"
                        data-qty="${item.qty}"
                    > + </button>
                </div>
            </div>
        </footer>   
    `


    column.appendChild(card)

    // switch (menuItems.type)
    switch (item.type) {
        case 'appetizers': 
            appsRow.appendChild(column)
            break
        case 'entrees': 
            entreesRow.appendChild(column)
            break
        case 'drinks': 
            drinksRow.appendChild(column)
            break
        case 'desserts': 
            dessertsRow.appendChild(column)
            break
        case 'sides': 
            sidesRow.appendChild(column)
            break
        default:
            console.log('Error: menu type not listed');
            break
    }
})

// cart buttons
const cartButtons = document.querySelectorAll('.cart-btn')

//console.log(cartButtons);

cartButtons.forEach(button => {

    const price = parseFloat(button.getAttribute('data-price'))
    const item = button.getAttribute('data-item')
    const id = parseFloat(button.getAttribute('data-id'))

    button.addEventListener('click', ()=> {
        let qty 
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].id === id ? qty = menuItems[i].qty : null
        }

        //console.log(button.getAttribute('data-qty'));
        

        if (button.getAttribute('data-qty') > 0 ) {
            addItems(price, qty, item, id)
        }
    })
})

// addItems()
let receiptArray = []

const addItems =(price, qty, item, id)=> {

    let itemObj = {
        // id,
        //item,
        //qty,
        //can also do it like that when its the same^^^^^
        id: id,
        item: item,
        qty: qty,
        price: price,
        itemTotal: qty * price
    }

    console.log(itemObj);
    

    receiptArray = [...receiptArray, itemObj]

    // makeReceipt
    makeReceipt(itemObj, receipt)

    subtotal+= itemObj.itemTotal
    cartSubtotal.innerText = subtotal.toFixed(2)
}

// makeReceipt()
const makeReceipt =(obj, el)=> {
    const tableRow = document.createElement('tr')
    tableRow.classList.add('receipt-item')

    const receiptChoice = document.createElement('td')
    receiptChoice.classList.add('receipt-choice', 'text-center')
    receiptChoice.innerText = obj.item

    const receiptQty = document.createElement('td')
    receiptQty.classList.add('receipt-qty', 'text-center')
    receiptQty.setAttribute('id', `qty${obj.id}`)
    receiptQty.innerText = obj.qty

    const receiptPrice = document.createElement('td')
    receiptPrice.classList.add('receipt-price', 'text-center')
    receiptPrice.innerText = obj.price

    const itemSubtotal = document.createElement('td')
    itemSubtotal.classList.add('item-subtotal', 'text-center')
    itemSubtotal.setAttribute('id', `subTotal${obj.id}`)
    itemSubtotal.innerText = obj.itemTotal.toFixed(2)

    tableRow.appendChild(receiptChoice)
    tableRow.appendChild(receiptQty)
    tableRow.appendChild(receiptPrice)
    tableRow.appendChild(itemSubtotal)

    el.appendChild(tableRow)
}

const btnSubtract = document.querySelectorAll('.btn-subtract')
const btnAdd = document.querySelectorAll('.btn-add')

btnSubtract.forEach(button => {
    button.addEventListener('click', ()=> {
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for (let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].id === btnId && menuItems[i].qty > 0) {
                menuItems[i].qty-= 1
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})

btnAdd.forEach(button => {
    button.addEventListener('click', ()=> {
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].id === btnId
                && menuItems[i].qty < 20
                && cartButtons[i].dataset.id == btnId
            ) {
                menuItems[i].qty+=1
                cartButtons[i].setAttribute('data-qty', menuItems[i].qty)
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})

