import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../images/Treflo_Logo_DB@2x.png'
import Cart from '../container/Cart';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <div className='underline text-white'>
            <div className='flex justify-between p-5'>
                <div>
                    <img src={logo} alt="loading.." width={100} />
                </div>
                <div>
                    <h1 className='mt-4'>Welcome to our Shop</h1>
                </div>
                <div>
                    <Link to="/cart"><ShoppingCartIcon className='mt-5'/></Link>
                </div>
            </div>
        </div>
    )
}
