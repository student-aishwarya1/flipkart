
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the products and search functionality
    const products = document.querySelectorAll('.product-card');
    const searchBox = document.querySelector('.search-box');
    
    // Function to filter products based on search input
    function filterProducts() {
        const searchText = searchBox.value.toLowerCase();
        
        // Loop through each product and hide/show based on search input
        products.forEach(product => {
            const productName = product.querySelector('h3').innerText.toLowerCase();
            if (productName.includes(searchText)) {
                product.style.display = 'block'; // Show product
            } else {
                product.style.display = 'none'; // Hide product
            }
        });

        // Sort products to move matched items to the top
        sortProducts();
    }

    // Function to sort products to move matched items to the top
    function sortProducts() {
        const productContainer = document.querySelector('.products');
        const visibleProducts = Array.from(products).filter(product => product.style.display !== 'none');
        const hiddenProducts = Array.from(products).filter(product => product.style.display === 'none');

        // Remove all products from the container
        productContainer.innerHTML = '';

        // Append visible products first
        visibleProducts.forEach(product => productContainer.appendChild(product));
        
        // Append hidden products
        hiddenProducts.forEach(product => productContainer.appendChild(product));
    }

    // Add event listener for search box input
    searchBox.addEventListener('input', filterProducts);

    // Initial sorting of products (if needed)
    sortProducts();
});


//////////////////////////////////////////////////////////////////////////////////////

//// cart  /////

