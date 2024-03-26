import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './products.css'
import ProductCard from './productCard'
import Whyshallwe from '../components/Whyshallwe'
const Products = () => {
    const [products, setProducts] = useState()


    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures this effect runs only once

    const fetchProducts = async () => {
        // console.log('initiating get')
        // http://localhost/shallwe/[variable]
        const res = await fetch('http://localhost/shallwe/product.php')
        res.json()
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log("error happned in getting all products", err)
            })
    };
    return (
        <>

            <div className='products'style={{ border: "2px solid green" }}>
                <h1 style={{ marginTop: "23px" }}>Intimacy Essentials</h1>
                <div className='sub-heading'> Discover Our Intimacy Essentials and Self Care Products to Elevate Your Connection.</div>

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
            </div>
            <Whyshallwe />
        </>
    )
}

export default Products