function showCategoryProducts(products) {
    const productsContainer = document.getElementById("category-product");

    products.forEach(product => {
        const discount = product.discount ? `<p class="featured__new-arrivals-product-price-discount">${product.discount}</p>` : '';
        const oldPrice = product.oldPrice ? `<p class="featured__new-arrivals-product-price-promotion">$${product.oldPrice}</p>` : '';
        
        const imagePath = `../${product.imagem[0]}`;
        const startsReviewImage = `../${product.startsReviewImage}`;

        productsContainer.innerHTML +=
        `<article class="featured__new-category-products" data-category-product-id="${product.id}">
                    <img class="featured__new-arrivals-category-product-image" src="${imagePath}" alt="${product.title}">
                    <h4 class="featured__new-arrivals-product-title">${product.title}</h4>
                    <div class="featured__new-arrivals-product-review" role="img" aria-label="Avaliação: ${product.review} de 5 estrelas">
                        <img src="${startsReviewImage}" alt="Stars1" aria-hidden="true"> 
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

function redirectToCategoryProductDetails(productId) {
    window.location.href = `./product-details.html?id=${productId}`;
}

function addClickEventToCategoryProducts() {
    const products = document.querySelectorAll(".featured__new-category-products");
    products.forEach(product => {
        product.addEventListener("click", () => {
            const productId = product.getAttribute("data-category-product-id");
            if (productId) {
                redirectToCategoryProductDetails(productId);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    const products = await fetchProducts();
    if (products) {
        showCategoryProducts(products);
        addClickEventToCategoryProducts();
    }
});