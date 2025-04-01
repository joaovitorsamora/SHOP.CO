async function fetchProducts() {
    try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) throw new Error("Erro ao carregar produtos");
        return await response.json();
    } catch (error) {
        console.error("Erro:", error);
        return null;
    }
}