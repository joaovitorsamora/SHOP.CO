function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

async function fetchProductDetails(productId) {
    try {
        const response = await fetch(`http://localhost:3000/products/${productId}`);
        if (!response.ok) throw new Error("Erro ao carregar detalhes do produto");
        return await response.json();
    } catch (error) {
        console.error("Erro:", error);
        return null;
    }
}
function showProductDetail(product) {
    const productDetails = document.getElementById("data-product-details");
    const imagePath = `../${product.imagem[0]}`;
    const startsReviewImage = `../${product.startsReviewImage}`;

    if (productDetails) {

        productDetails.innerHTML += `
            <div class="featured__new-arrivals-product-images">
                <img class="featured__new-arrivals-product-image featured__product1" src="${imagePath}" alt="product1">
            </div>
            <div class="featured__new-arrivals-product-details">
                <h4 class="featured__new-arrivals-product-title">${product.title}</h4>
                <div class="featured__new-arrivals-product-review" role="img" aria-label="Avaliação: ${product.review} de 5 estrelas">
                    <img src="${startsReviewImage}" alt="Stars1" aria-hidden="true"> 
                    <p class="featured__new-arrivals-product-reviewstars">${product.review}/5</p>
                </div>
                <div class="featured__new-arrivals-product-price-wrapper">
                    <p class="featured__new-arrivals-product-price">$${product.price}</p>
                    <p class="featured__new-arrivals-product-price-promotion">$${product.oldPrice}</p>
                    <p class="featured__new-arrivals-product-price-discount">${product.discount}</p>
                </div> 
                <p class="featured__new-arrivals-product-description">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>   
                <div class="horizontal__line"></div>
                <section class="selected__color">
                    <h3 class="selected__color-title">Select Colors</h3>
                    <div class="selected__color-wrapper">
                        ${product.colors.map(color => `<div class="elipse" style="background-color: ${color};"></div>`).join('')}
                    </div>
                </section>
                <div class="horizontal__line"></div>
                <section class="selected__size">
                    <h3 class="selected__size-title">Choose Size</h3>
                    <div class="selected__size-wrapper">
                        <button class="selected__size-button">Small</button>
                        <button class="selected__size-button">Medium</button>
                        <button class="selected__size-button">Large</button>
                        <button class="selected__size-button">X-Large</button>
                    </div>
                </section>
                <div class="horizontal__line"></div>
                <section class="selected__quantity">
                    <div class="selected__quantity-wrapper">
                        <div class="selected__quantity-buttons">
                            <button class="selected__quantity-button"><img src="../assets/menos.png"></button>
                            <input type="text" class="selected__quantity-input" value="1">
                            <button class="selected__quantity-button"><img src="../assets/mais.png"></button>
                        </div>
                        <button class="selected__quantity-add-to-cart">Add to Cart</button>
                    </div>
                </section>
            </div> 
        `;
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    const productId = getProductIdFromURL();
    if (productId) {
        const product = await fetchProductDetails(productId);
        if (product) {
            showProductDetail(product);
        }
    }
});