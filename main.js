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
// Task 4: Handle Errors Gracefully
            // Display friendly error message
            errorMessage.textContent = 'Failed to load products. Please try again later.';
            console.error('Fetch error:', error);
        });
});


