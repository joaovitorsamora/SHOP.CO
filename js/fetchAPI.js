async function fetchProducts() {
    try {
        const response = await fetch("https://shop-co-server-three.vercel.app/products");
        if (!response.ok) throw new Error("Erro ao carregar produtos");
        return await response.json();
    } catch (error) {
        console.error("Erro:", error);
        return null;
    }
}