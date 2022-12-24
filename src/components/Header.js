import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PATH } from '../constant/approuter';


const Header = () => {

    const locate = useLocation();


    return (
        <header>
            {
                locate.pathname === PATH.ABOUT ?
                    <ul className='flex w-screen items-center justify-center bg-[#ddd]'>
                        <li className='m-10'><p>Here is about</p></li>
                        <li className='m-10'><Link to="/">Back Home</Link></li>
                    </ul> :
                    <ul className='flex w-screen items-center justify-center bg-[#ddd]'>
                        <li className='m-10'><Link to={PATH.CONTACT}>Contact</Link></li>
                        <li className='m-10'><Link to={PATH.ABOUT}>About</Link></li>
                        <li className='m-10'><Link to={PATH.INDEX}>Home</Link></li>
                        <li className='m-10'><Link to={PATH.PRODUCTS}>Products</Link></li>
                        <li className='m-10'><Link to={PATH.TODO}>To do List</Link></li>
                    </ul>
            }

        </header>
    )
}

export default Header