import React, { useEffect, useState } from 'react'
import db from '../firebase';
import './PlansScreen.css'

function PlansScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // db.collection('products')
    }, [])

    return (
        <div className='plansScreen'>
            <h5>Next Renewal: 31-07-2023</h5>
            <div className="plansScreen__plan">
                <div className="plansScreen__planOne">
                    <div className="plansScreen__info">
                        <h5>Primium</h5>
                        <h6>4K+ HDR</h6>
                    </div>
                    <button>Subscripbe</button>
                </div>
                
                <div className="plansScreen__planTwo">
                    <div className="plansScreen__info">
                        <h5>Basic</h5>
                        <h6>720p</h6>
                    </div>
                    <button>Subscripbe</button>
                </div>
                
                <div className="plansScreen__planThree">
                    <div className="plansScreen__info">
                        <h5>Netflix Standard</h5>
                        <h6>1080p</h6>
                    </div>
                    <button>Current Plan</button>
                </div>
                
            </div>
        </div>
    )
}

export default PlansScreen