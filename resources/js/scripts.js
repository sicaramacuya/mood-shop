const itemsContainer = document.getElementById('items')
import data from './data.js'

// div elements and its childs -----------------------------------------------------------
// the length of our data determines how many times this loop goes around
for (let i=0; i < data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // create a new div element and give it a class name for the buttons
    let bottonDiv = document.createElement('div');
    bottonDiv.className = 'botton-div'

    // create an image element
    let img = document.createElement('img');
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300

    // Add the image to the div
    newDiv.appendChild(img)

    // create a paragraph element for the descrpition
    let desc = document.createElement('p');
    // getting the paragraph text from the data
    desc.innerText = data[i].desc
    // appending the paragraph to the div element
    newDiv.appendChild(desc)

    // create a paragraph element for the price
    let price = document.createElement('p');
    // getting the price from the data
    price.innerText = data[i].price
    // appending the paragraph to the div element
    newDiv.appendChild(price)

    // create a botton element and assing an id
    let button = document.createElement('button');
    // bottom.className = 'cart'
    button.id = data[i].name

    // creates a custom attribute called data-price
    // that will hold the price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    bottonDiv.appendChild(button)

    // add the botton element its own div
    newDiv.appendChild(bottonDiv)

    // put new div inside items container
    itemsContainer.appendChild(newDiv)
}

// shopping cart -------------------------------------------------------------------------
const cart = []

// add items to the list and in case is repeated just correct its quantity
function addItem(name, price) {
    // check if the item is already in the list
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            // stop running the addItem function
            return
        }
    }
    const item = {name, price, qty: 1}
    cart.push(item)
}

// log to the console the amount of items, a list and the total price in the cart
function showItems() {
    console.log(`You have ${getQty()} items in you cart`)

    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
    }

    console.log(`Total in cart: $${getTotal()}`)
}

// calculate and return the quantity of items in the cart
function getQty () {
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}

// calculate and return the total amount of the prices in the cart
function getTotal () {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
}

addItem('Apple', 0.99)
addItem('Orange', 1.29)
addItem('Opinion', 0.02)
addItem('Apple', 0.99)
addItem('Frisbee', 9.92)
addItem('Apple', 0.99)
addItem('Orange', 1.29)


showItems()