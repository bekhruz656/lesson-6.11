async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function createProductCards(products) {
    const container = document.getElementById('product-container');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <p>${product.description}</p>
        `;

        container.appendChild(card);
    });
}

fetchProducts().then(products => {
    createProductCards(products);
});