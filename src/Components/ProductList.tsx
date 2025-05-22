import { useCallback, useState } from "react"
import GetProductsButton from "./GetProductsButton"

type Product = {
    id: string,
    title: string,
    description: string
}


const ProductList = () => {
    // state
    const [products, setProducts] = useState<Product[]>([])
    // fn
    const fetchProducts = useCallback(async()=>{// To avoid re-rendering the button component, wrap your function in a useCallback
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        setProducts(data.products)
    },[])
    return (
        <div>
            <h1>Products List</h1>
            <GetProductsButton onFetch={fetchProducts}/>
            <ul>
                {products.map((product,i) => (
                    <li key={i}>
                        {product.title}-{product.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList