// Task 2: Fetch Products from the API Using Fetch and Promises

document.addEventListener('DOMContentLoaded', () => {

    // Get the HTML elements
    const productContainer = document.getElementById('productContainer');
    const errorMessage = document.getElementById('errorMessage');

    // Fetch data from the API
    fetch('https://www.course-api.com/javascript-store-products') // import API
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Convert response to JSON
            return response.json();
        })
        .then(data => {
            // Function to display products if fetch is successful
            displayProducts(data);
        })
        .catch(error => {
            // Display friendly error message
            errorMessage.textContent = 'Failed to load products. Please try again later.';
            console.error('Fetch error:', error);
        });
});

// Task 3: Display Product Details Dynamically

//Function to display product details dynamically

function displayProducts(products) {
    const productContainer = document.getElementById('productContainer');

    // Create and insert elements for each product
    products.forEach(product => {
        const { company, name, price } = product.fields;
        const imgUrl = product.fields.image[0].url;

        // Create div element for each product card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // HTML content for the product, with proper class names
        productCard.innerHTML = `
            <img src="${imgUrl}" alt="${name}">
            <h2 class="product-name">${name}</h2>
            <p class="company-name">Company: ${company}</p>
            <p class="product-price">Price: $${(price / 100).toFixed(2)}</p>
        `;

        // Add the product card to the container
        productContainer.appendChild(productCard);
    });

}


