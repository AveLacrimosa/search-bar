const searchProduct = async (searchWord) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchWord}`);
    const products = await response.json();
    return products;
}

export default searchProduct