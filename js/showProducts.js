function showProducts(products) {
    const productsContainer = document.getElementById("products-arrivals");

    products.forEach(product => {
        const discount = product.discount ? `<p class="featured__new-arrivals-product-price-discount">${product.discount}</p>` : '';
        const oldPrice = product.oldPrice ? `<p class="featured__new-arrivals-product-price-promotion">$${product.oldPrice}</p>` : '';
        
        productsContainer.innerHTML +=
        `<article class="featured__new-arrivals-product" data-product-id="${product.id}">
                    <img class="featured__new-arrivals-product-image" src="${product.imagem[0]}" alt="${product.title}">
                    <h4 class="featured__new-arrivals-product-title">${product.title}</h4>
                    <div class="featured__new-arrivals-product-review" role="img" aria-label="Avaliação: ${product.review} de 5 estrelas">
                        <img src="${product.startsReviewImage}" alt="Stars1" aria-hidden="true"> 
                        <p class="featured__new-arrivals-product-reviewstars">${product.review}/5</p>
                    </div>
                    <div class="featured__new-arrivals-product-price-wrapper">
                        <p class="featured__new-arrivals-product-price">$${product.price}</p>
                        ${oldPrice}
                        ${discount}
                    </div>
                </article>
        `
    })
}

function redirectToProductDetailsArrivals(productId) {
    window.location.href = `./pages/product-details.html?id=${productId}`;
}

function addClickEventToProductsArrivals() {
    const products = document.querySelectorAll(".featured__new-arrivals-product");
    products.forEach(product => {
        product.addEventListener("click", () => {
            const productId = product.getAttribute("data-product-id");
            if (productId) {
                redirectToProductDetailsArrivals(productId);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    const products = await fetchProducts();
    if (products) {
        showProducts(products);
        addClickEventToProductsArrivals();
    }
});