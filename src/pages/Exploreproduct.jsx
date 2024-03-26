import React, { useEffect, useState } from 'react'
import './products.css'
import ProductCard from './productCard'
import { Link } from 'react-router-dom'
import './exploreproduct.css'
const Exploreproduct = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures this effect runs only once

    const fetchProducts = async () => {
        console.log('initiating get')
        const res = await fetch('http://localhost/shallwe/product.php')
        res.json()
            .then((res) => {
                const three = res.data.slice(0, 3)
                setProducts(three);
            })
            .catch((err) => {
                console.log("error happned in getting all products", err)
            })
    };
    return (
        <>
            <div className='exploreproducts'>
                <div className='exploreproducts-header'>
                    <h1 style={{ marginTop: "23px" }}>Explore our Products</h1>
                    <p > Discover Our Intimacy Essentials and Self Care Products to Elevate Your Connection.</p>
                </div>

                <div className='productgrid'>
                    {products ? (
                        products.map((product) => {
                            return (
                                <div key={product.id} className='eachcard'>
                                    <Link to={`/products/${product.id}`}>
                                        <ProductCard product={product} />
                                    </Link>
                                </div>
                            )
                        }

                        )
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
                <Link to={'/products'} >
                    <button className='explore-btn'>View all products</button>
                </Link>
            </div>
        </>
    )
}

export default Exploreproduct