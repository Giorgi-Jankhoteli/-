async function fetchProducts() {
    try {
        const response = await fetch("https://restaurant.stepprojects.ge/api/Products/getAll");
        const products = await response.json();
        console.log("Products:", products);
        displayProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        document.getElementById("products").innerHTML = "<p>Error Loading Products</p>";
    }
}

function displayProducts(products) {
    const productContainer = document.getElementById("products");
    const productsHtml = products.map((product) => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: ${product.category}</p>
        </div>
    `).join("");
    productContainer.innerHTML = productsHtml;
}

window.addEventListener("load", fetchProducts)

fetchProducts();

