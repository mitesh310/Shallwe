import React from 'react'
import './home.css'
import Slider from './Slider'
import Exploreproduct from '../Exploreproduct';
import Pleasure from './Pleasure';
import ProductVideo from './ProductVideo';
import Whyshallwe from '../../components/Whyshallwe';

export default function Home() {

    return (
        <>
        <div style={{overflowx:"hidden"}}>

            <Slider/>
            <Exploreproduct />
            < Pleasure />
            <ProductVideo />
            <Whyshallwe/>
        </div>
          
        </>
    )
}
