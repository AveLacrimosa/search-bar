import { useState, useEffect } from 'react'

import searchProduct from '../services/productsService'

const SearchProduct = ({ setResults }) => {
    const [searchWord, setSearchWord] = useState('');
    //1.Uzsettinti paieskos zodi i state
    const handleChange = (searchWord) => {
        setSearchWord(searchWord);
    }
    //2. Reikes funkcijos, kuri kreipiasi i API
    const getProducts = (searchWord) => {
        searchProduct(searchWord).then(res => {
            setResults(res);
        })
    }
    //3. useEffect'as, kuris stebi, kada kreiptis i API
    useEffect(() => {
        getProducts(searchWord);
    }, [searchWord])


    return (
        <div>
            <input
                type='text'
                value={searchWord}
                onChange={(e) => handleChange(e.target.value)} />
            <button onClick={() => {
                getProducs(searchWord)
            }}>Search</button>
        </div>
    )
}

export default SearchProduct