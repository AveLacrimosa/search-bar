import React from 'react'

const OneProduct = (props) => {
    console.log(props.productsFromApi.products)
    const items = props.productsFromApi.products;
  return (
    <div>
        {
            items && items.map(item => (
                <div key={item.id}>
                <h2>{item.title}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default OneProduct