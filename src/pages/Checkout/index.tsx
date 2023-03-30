import { useEffect, useState } from "react";
import useProductStore from "../../stores/productStore";
import useUserStore from "../../stores/userStore";
import { Link } from "react-router-dom";
import CheckoutService from "./service";
import { BuyerWallet } from "./types";

const Checkout = () => {
    const userStore = useUserStore((state) => state);
    const productStore = useProductStore((state) => state); 
    const [totalPrice, setTotalPrice] = useState<number>(productStore.getTotalPrice());
    const [userDetails, setUserDetails] = useState(userStore.getUserDetails());
    const [userWallet, setUserWallet] = useState<BuyerWallet>({
        balance: 0,
        customer_id: "",
    });

    useEffect(() => {
        CheckoutService.getBuyerWalletBalance(userDetails.id).then((response) => {
            setUserWallet(response.data);
        }); 
    }, []);
    
    const removeItem = (id: string) => {
        const newProductDetails = productStore.getProductDetails().filter((product) => product.id !== id);
        productStore.setProductDetails(newProductDetails);

        const newTotalPrice = newProductDetails.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        productStore.setTotalPrice(newTotalPrice);
        setTotalPrice(newTotalPrice);
    }

    return (
        <div className="bg-gradient-to-b from-main-500 to-main-100">
            <div className="w-full py-40">
                <div className="mx-auto container">
                    <div className="flex flex-col">
                        <h1 className="font-domine text-[22px] text-white font-semibold text-center my-[10px] w-full">Checkout</h1>
                        <div className="bg-main-200 p-2 rounded-md w-fit mx-auto">
                            <h1 className="font-domine text-[22px] text-white font-semibold text-left">User Details</h1>
                            <div className="flex flex-col justify-center items-start">
                                <h1 className="font-domine text-[22px] text-white font-semibold text-center">Name: {userDetails.name}</h1>
                                <h1 className="font-domine text-[22px] text-white font-semibold text-center">Balance: {userWallet.balance}</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 w-[50%] mx-auto">
                            {productStore.getProductDetails().map((product) => (
                                <div className="p-2">
                                    <div className="bg-main-400 rounded-md p-2">
                                        <h1 className="font-domine text-[22px] text-white font-semibold text-left">Product Details</h1>
                                        <div className="flex flex-col justify-center items-start">
                                            <h1 className="font-domine text-[22px] text-white font-semibold text-center">Name: {product.name}</h1>
                                            <h1 className="font-domine text-[22px] text-white font-semibold text-center">Price: {product.price}</h1>
                                            <h1 className="font-domine text-[22px] text-white font-semibold text-center">Quantity: {product.quantity}</h1>
                                        </div>
                                        <button onClick={() => removeItem(product.id)} className="bg-main-300 p-2 mx-auto rounded-md w-full text-center font-domine font-semibold">Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h2 className="w-full text-[18px] font-domine text-center my-[10px] text-white">Total Price: {totalPrice}</h2>
                        {userWallet.balance < totalPrice ? (
                            <h1 className="font-domine text-[22px] text-white font-semibold text-center my-[10px] w-full">Insufficient Balance</h1>
                        ) : (
                            <>
                                <h1 className="font-domine text-[22px] text-white font-semibold text-center my-[10px] w-full">Sufficient Balance</h1>
                                <Link to="/pay" id="pay" className="bg-main-300 p-2 mx-auto rounded-md w-fit text-center text-white font-domine font-semibold">Pay</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Checkout;