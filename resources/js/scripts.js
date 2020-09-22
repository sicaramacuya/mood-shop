const itemsContainer = document.getElementById('items')
import data from './data.js'

// the length of our data determines how many times this loop goes around
for (let i=0; i < data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

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
    button.id = data[i].name

    // creates a custom attribute called data-price
    // that will hold the prie for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

    // put new div inside items container
    itemsContainer.appendChild(newDiv)
}