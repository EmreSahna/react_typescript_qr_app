import { useEffect, useState } from "react";
import useProductStore from "../../stores/productStore";
import useUserStore from "../../stores/userStore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const userStore = useUserStore((state) => state);
    const productStore = useProductStore((state) => state); 
    const [totalPrice, setTotalPrice] = useState<number>(0);
    useEffect(() => {
        productStore.getProductDetails().map((product) => {
            setTotalPrice(totalPrice + product.price);
        });
        console.log(userStore.getUserDetails());
        
    }, []);

    return (
        <div className="flex flex-wrap my-[50px]">
            <h1 className="font-domine text-[22px] text-100-main font-semibold text-center my-[10px] w-full">Checkout</h1>
            <h2 className="w-full text-[18px] font-domine text-center my-[10px]">Total Price: {totalPrice}</h2>
            <div className="bg-400-main p-2 m-2 rounded-md w-full">
                <h1 className="font-domine text-[22px] text-200-main font-semibold text-left">User Details</h1>
                <div className="flex flex-col justify-center items-start">
                    <h1 className="font-domine text-[22px] text-200-main font-semibold text-center">Name: {userStore.getUserDetails().customerName}</h1>
                    <h1 className="font-domine text-[22px] text-200-main font-semibold text-center">Email: {userStore.getUserDetails().email}</h1>
                </div>
            </div>
            <div className="flex flex-wrap w-[50%] mx-auto">
                {productStore.getProductDetails().map((product) => (
                    <div className="bg-100-main p-2 m-2 rounded-md w-full">
                        <h1 className="font-domine text-[22px] text-200-main font-semibold text-left">Product Details</h1>
                        <div className="flex flex-col justify-center items-start">
                            <h1 className="font-domine text-[22px] text-200-main font-semibold text-center">Name: {product.name}</h1>
                            <h1 className="font-domine text-[22px] text-200-main font-semibold text-center">Price: {product.price}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/pay" className="bg-200-main p-2 m-2 rounded-md w-full text-center font-domine font-semibold">Pay</Link>
        </div>
    )
};

export default Checkout;