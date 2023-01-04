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
                        <li className='m-10'><Link to={PATH.API}>Demo Api</Link></li>
                    </ul>
            }

        </header>
    )
}

export default Header




/* <-------  
To Router:

 - 1 path -> đường dẫn đến element bên dưới
 - 2 Elements -> Nội dung mình sẽ show ra trong cái đường dẫn bên trên


 - Notes:   Tag link chỉ đưa mình tới đường dẫn mình muốn . Hết

-------> */
