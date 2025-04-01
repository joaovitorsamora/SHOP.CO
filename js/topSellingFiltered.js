
function filterTopSellingProducts(filteredProducts) {
    const listOfProductsTopSelling = document.getElementById("products-top-selling");
    const topSellingProducts = filteredProducts.filter(product => product.review > 4.0);

    topSellingProducts.forEach(product => {
        const discountTopSellingHTML = product.discount ? `<p class="featured__top-selling-product-price-discount">${product.discount}</p>` : '';
        const oldPriceTopSellingHTML = product.oldPrice ? `<p class="featured__top-selling-product-price-promotion">$${product.oldPrice}</p>` : '';
        listOfProductsTopSelling.innerHTML += `
            <article class="featured__top-selling-product" data-top-selling-product-id="${product.id}">
                    <img class="featured__top-selling-product-image" src="${product.imagem[0]}" alt="${product.title}">
                    <h4 class="featured__top-selling-product-title">${product.title}</h4>
                    <div class="featured__top-selling-product-review" role="img" aria-label="Avaliação: 5.0 de 5 estrelas">
                        <img src="${product.startsReviewImage}" alt="Stars3" aria-hidden="true"> 
                        <p class="featured__top-selling-product-reviewstars">${product.review}/5</p>
                    </div>
                    <div class="featured__top-selling-product-price-wrapper">
                        <p class="featured__top-selling-product-price">$${product.price}</p>
                        ${oldPriceTopSellingHTML}
                        ${discountTopSellingHTML}
                    </div> 
                </article>
            `;
    });
}


function redirectToProductDetails(productId) {
    window.location.href = `./pages/product-details.html?id=${productId}`;
}

function addClickEventToProducts() {
    const products = document.querySelectorAll(".featured__top-selling-product");
    products.forEach(product => {
        product.addEventListener("click", () => {
            const productId = product.getAttribute("data-top-selling-product-id");
            if (productId) {
                redirectToProductDetails(productId);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    const products = await fetchProducts();
    if (products) {
        filterTopSellingProducts(products);
        addClickEventToProducts();
    }
});