// size selector 
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("size-selector")) {
        let node = e.target;
        let sizeSelectors = document.querySelectorAll(".size-selector");

        for (let selector of sizeSelectors) {
            selector.classList.remove("size-selector-selected");
        }

        node.classList.add("size-selector-selected");
    }
});

// quantity 

// Get the elements
let minusButton = document.querySelector('.quantity-selector-minus');
let plusButton = document.querySelector('.quantity-selector-plus');
let quantitySpan = document.querySelector('.quantity');

let quantity = 1;
function updateQuantity() {
    quantitySpan.value = quantity;
}

minusButton.addEventListener('click', function () {
    if (quantity > 1) {
        quantity--; 
        updateQuantity();
    }
});

plusButton.addEventListener('click', function () {   
    quantity++; 
    updateQuantity();
});

updateQuantity();
