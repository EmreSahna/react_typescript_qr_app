import { useEffect, useState } from "react";
import useProductStore, { IProductDetails } from "../../stores/productStore";
import { Link } from "react-router-dom";

const Market = () => {
    const store = useProductStore((state) => state);
    const [products, setProducts] = useState<IProductDetails[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        products.map((product) => {
            store.setProductDetails([...store.getProductDetails(), product]);
            setTotalPrice(totalPrice + product.price);
        });
    }, [products]);

    return (
        <div className="flex my-[50px]">
            <div className="w-[80%]">
                <h1 className="text-center font-semibold font-domine text-[28px]">Products</h1>
                <div className="flex flex-wrap justify-center">
                    <div className="w-[30%] p-4">
                        <div className="bg-100-main p-2 rounded-md">
                            <h1 className="text-200-main font-semibold font-domine text-[22px] text-center">Product 1</h1>
                            <hr />
                            <h1 className="text-200-main font-semibold font-domine text-[22px] text-center">Price: 100</h1>
                            <div className="flex justify-center">
                                <button className="bg-200-main text-100-main font-semibold font-domine text-[22px] rounded-md p-2 m-2" onClick={() => setProducts([...products, {id: "1",name: "Product 1", price: 100}])}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] p-4">
                        <div className="bg-100-main p-2 rounded-md">
                            <h1 className="text-200-main font-semibold font-domine text-[22px] text-center">Product 2</h1>
                            <hr />
                            <h1 className="text-200-main font-semibold font-domine text-[22px] text-center">Price: 30</h1>
                            <div className="flex justify-center">
                                <button className="bg-200-main text-100-main font-semibold font-domine text-[22px] rounded-md p-2 m-2" onClick={() => setProducts([...products, {id: "2",name: "Product 2", price: 30}])}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[20%] p-4">
                <div className="bg-100-main p-2 rounded-md">
                    <h1 className="text-200-main font-semibold font-domine text-[22px] text-center">Card</h1>
                    <hr />
                    {products.length == 0 ? (
                        <div className="flex justify-center">
                            <h1 className="text-200-main font-semibold font-domine text-[22px] text-center">No products in cart</h1>
                        </div>
                        ) : (
                        <div className="flex justify-center flex-wrap gap-[10px] my-[10px]">
                            {products.map((product) => (
                                <div className="flex flex-col justify-center items-center w-full">
                                    <h1 className="text-200-main font-semibold font-domine text-[22px] text-center">{product.name}</h1>
                                    <h1 className="text-200-main font-semibold font-domine text-[22px] text-center">{product.price}TL</h1>
                                </div>
                            ))}
                            <h3 className="flex justify-center font-domine text-200-main w-full">Total Price: {totalPrice}</h3>
                            <Link to={'/checkout'} className="bg-200-main text-100-main font-semibold font-domine text-[22px] rounded-md p-2 m-2">
                                Checkout
                            </Link>
                        </div>  
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default Market;