import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useUserStore, { IUserDetails } from '../stores/userStore';

const Navbar = () => {
    const store = useUserStore((state) => state);
    const [userDetails, setUserDetails] = useState<IUserDetails>(store.getUserDetails());
    
    const logout = () => {
        store.setUserDetails({
            customerName: '',
            email: '',
            id: '',
            password: '',
            phone: '',
            bank_details: '',
            createdAt: ''
        });
        setUserDetails(store.getUserDetails());
    }

    return (
        <nav className="bg-main-500 px-2">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <span className="self-center text-[32px] font-semibold whitespace-nowrap text-main-300 font-staatliches">QuickPayr</span>
                </a>
                {userDetails.customerName != '' ? (
                    <div className="flex order-2">
                        <Link to="/buyer/dashboard" className="flex items-center justify-center gap-[6px] text-main-300 border-2 border-main-300 font-medium px-3 py-2 mr-3">
                            <span className="material-icons">
                                person
                            </span>
                            <span>{userDetails.customerName}</span>
                        </Link>
                        <button onClick={logout} className="flex items-center justify-center gap-[6px] text-white bg-gradient-to-r from-main-300 to-main-600 shadow-md font-medium px-3 py-2 mr-3">
                            <span className="material-icons">
                                logout
                            </span>
                            <span>Logout</span>
                        </button>
                    </div>
                ):(
                <div className="flex order-2">
                    <Link to="/buyer/login" className="flex items-center justify-center gap-[6px] text-white bg-gradient-to-r from-main-300 to-main-600 shadow-md font-medium px-3 py-2 mr-3">
                        <span className="material-icons">
                            person 
                        </span>
                        <span>Buyer</span>
                    </Link>

                    <Link to="/seller/login" className="flex items-center justify-center gap-[6px] text-main-300 border-2 border-main-300 font-medium px-3 py-2 mr-3">
                        <span className="material-icons">
                            store
                        </span>
                        <span>
                            Seller
                        </span>
                    </Link>
                </div>)
                }
                <div className="items-center justify-end flex w-[70%] order-1" id="navbar-cta">
                    <ul className="flex p-4 text-[20px] rounded-lg flex-row space-x-8 mt-0 font-semibold font-staatliches text-white">
                        <li>
                            <Link to="/" className="block py-2 pl-3 pr-4 rounded">Home</Link>
                        </li>
                        <li>
                            <Link to="/market" className="block py-2 pl-3 pr-4 rounded">Market</Link>
                        </li>
                        <li>
                            <Link to="/about" className="block py-2 pl-3 pr-4 rounded">About Us</Link>
                        </li>
                        <li>
                            <Link to="/faq" className="block py-2 pl-3 pr-4 rounded">F.A.Q</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;