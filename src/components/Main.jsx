import { useState } from 'react'
import OneProduct from './OneProduct';
import SearchProduct from './SearchProduct';

const Main = () => {
    const [productsFromApi, setProductsFromApi] = useState([]);

    const setResults = (products) => {
        setProductsFromApi(products)
    }
    console.log(productsFromApi)
    return (
        <div>
            <SearchProduct setResults={setResults} /> 
            <OneProduct productsFromApi={productsFromApi} />
        </div>
    )
}

export default Main