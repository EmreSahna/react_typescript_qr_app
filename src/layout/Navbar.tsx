import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useUserStore, { IUserDetails } from '../store';

const Navbar = () => {
    const store = useUserStore((state) => state);
    const [userDetails, setUserDetails] = useState<IUserDetails>(store.getUserDetails());
    
    return (
        <nav className="bg-200-main px-2">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <span className="self-center text-[32px] font-semibold whitespace-nowrap text-100-main font-staatliches">QuickPayr</span>
                </a>
                {userDetails.customerName != '' ? (
                    <div className="flex order-2">
                        <Link to="/buyer/dashboard" className="flex items-center justify-center gap-[6px] text-200-main bg-100-main font-medium rounded-lg px-3 py-2 mr-3">
                            <span className="material-icons">
                                person
                            </span>
                            <span>{userDetails.customerName}</span>
                        </Link>
                    </div>
                ):(
                <div className="flex order-2">
                    <Link to="/buyer/login" className="flex items-center justify-center gap-[6px] text-200-main bg-100-main font-medium rounded-lg px-3 py-2 mr-3">
                        <span className="material-icons">
                            person 
                        </span>
                        <span>Buyer</span>
                    </Link>

                    <Link to="/seller/login" className="flex items-center justify-center gap-[6px] text-200-main bg-100-main font-medium rounded-lg px-3 py-2 mr-3">
                        <span className="material-icons">
                            store
                        </span>
                        <span>
                            Seller
                        </span>
                    </Link>
                </div>)
                }
                <div className="items-center justify-between flex w-auto order-1" id="navbar-cta">
                    <ul className="flex p-4 text-[18px] rounded-lg flex-row space-x-8 mt-0 font-semibold font-domine">
                        <li>
                            <Link to="/" className="block py-2 pl-3 pr-4 rounded text-100-main">Home</Link>
                        </li>
                        <li>
                            <Link to="/market" className="block py-2 pl-3 pr-4 rounded text-100-main">Market</Link>
                        </li>
                        <li>
                            <Link to="/about" className="block py-2 pl-3 pr-4 rounded text-100-main">About Us</Link>
                        </li>
                        <li>
                            <Link to="/faq" className="block py-2 pl-3 pr-4 rounded text-100-main">F.A.Q</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;