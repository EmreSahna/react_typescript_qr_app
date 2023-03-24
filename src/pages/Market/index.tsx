import { useEffect, useState } from "react";
import useProductStore, { IProductDetails } from "../../stores/productStore";
import { Link } from "react-router-dom";

const Market = () => {
    const store = useProductStore((state) => state);
    const [products, setProducts] = useState(store.getProductDetails());
    const [totalPrice, setTotalPrice] = useState<number>(store.getTotalPrice());

    useEffect(() => {
        setProducts(store.getProductDetails());
        store.setTotalPrice(store.getProductDetails().reduce((acc, curr) => acc + (curr.price* curr.quantity), 0));
    }, [store.getProductDetails()]);

    useEffect(() => {
        setTotalPrice(store.getTotalPrice());
    }, [store.getTotalPrice()]);

    const addToCard = (id: string ,name: string, price: number) => {
        if(store.getProductDetails().find((product) => product.id === id)) {
            return store.setProductDetails(store.getProductDetails().map((product) => {
                if(product.id === id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product;
            }));
        }
        const product: IProductDetails = {
            id,
            name,
            price,
            quantity: 1
        }
        store.setProductDetails([...store.getProductDetails(), product]);
    }

    const decreaseQuantity = (id: string) => {
        if(store.getProductDetails().find((product) => product.id === id)?.quantity === 1) {
            return removeProduct(id);
        }
        store.setProductDetails(store.getProductDetails().map((product) => {
            if(product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity - 1
                }
            }
            return product;
        }));
    }

    const removeProduct = (id: string) => {
        store.setProductDetails(store.getProductDetails().filter((product) => product.id !== id));
    }

    const increaseQuantity = (id: string) => {
        store.setProductDetails(store.getProductDetails().map((product) => {
            if(product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity + 1
                }
            }
            return product;
        }));
    }


    return (
        <div className="bg-gradient-to-b from-main-500 via-[#424ef3] to-main-500">
            <div className="w-full py-40">
                <div className="container mx-auto flex">
                    <div className="w-[80%]">
                        <h1 className="text-center font-semibold font-domine text-white text-[28px]">Products</h1>
                        <div className="grid grid-cols-3">
                            <div className="p-4">
                                <div className="bg-main-400 p-2 rounded-md">
                                    <h1 className="text-white font-semibold font-domine text-[22px] text-center">Product 1</h1>
                                    <hr />
                                    <h1 className="text-white font-semibold font-domine text-[22px] text-center">Price: 100</h1>
                                    <div className="flex justify-center">
                                        <button className="bg-main-300 text-white font-semibold font-domine text-[22px] rounded-md p-2 m-2" onClick={() => addToCard("1", "Product 1", 100)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="bg-main-400 p-2 rounded-md">
                                    <h1 className="text-white font-semibold font-domine text-[22px] text-center">Product 2</h1>
                                    <hr />
                                    <h1 className="text-white font-semibold font-domine text-[22px] text-center">Price: 50</h1>
                                    <div className="flex justify-center">
                                        <button className="bg-main-300 text-white font-semibold font-domine text-[22px] rounded-md p-2 m-2" onClick={() => addToCard("2", "Product 2", 50)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="bg-main-400 p-2 rounded-md">
                                    <h1 className="text-white font-semibold font-domine text-[22px] text-center">Product 3</h1>
                                    <hr />
                                    <h1 className="text-white font-semibold font-domine text-[22px] text-center">Price: 75</h1>
                                    <div className="flex justify-center">
                                        <button className="bg-main-300 text-white font-semibold font-domine text-[22px] rounded-md p-2 m-2" onClick={() => addToCard("3", "Product 3", 75)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="bg-main-400 p-2 rounded-md">
                                    <h1 className="text-white font-semibold font-domine text-[22px] text-center">Product 4</h1>
                                    <hr />
                                    <h1 className="text-white font-semibold font-domine text-[22px] text-center">Price: 15</h1>
                                    <div className="flex justify-center">
                                        <button className="bg-main-300 text-white font-semibold font-domine text-[22px] rounded-md p-2 m-2" onClick={() => addToCard("4", "Product 4", 15)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="bg-main-400 p-2 rounded-md">
                                    <h1 className="text-white font-semibold font-domine text-[22px] text-center">Product 5</h1>
                                    <hr />
                                    <h1 className="text-white font-semibold font-domine text-[22px] text-center">Price: 45</h1>
                                    <div className="flex justify-center">
                                        <button className="bg-main-300 text-white font-semibold font-domine text-[22px] rounded-md p-2 m-2" onClick={() => addToCard("5", "Product 5", 45)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[20%] p-4">
                        <div className="bg-main-200 p-2 rounded-md">
                            <h1 className="text-white font-semibold font-domine text-[22px] text-center">Card</h1>
                            <hr />
                            {!products ? (
                                <div className="flex justify-center">
                                    <h1 className="text-white font-semibold font-domine text-[22px] text-center">No products in cart</h1>
                                </div>
                                ) : (
                                <div className="flex justify-center flex-wrap gap-[10px] my-[10px]">
                                    {products.map((product) => (
                                        <div className="flex w-full bg-main-400 rounded-md text-left p-1 text-white font-semibold font-domine">
                                            <div className="w-[80%]">
                                                <h1 className="text-[20px]">Name: {product.name}</h1>
                                                <h1 className="text-[18px]">Price: {product.price}TL</h1>
                                                <h1 className="text-[16px] flex items-center">Quantity: {product.quantity}</h1>
                                            </div>
                                            <div className="w-[20%] font-sans flex flex-col items-center justify-between">
                                                <button onClick={() => increaseQuantity(product.id)} className="bg-main-300 rounded-[100%] p-1 flex items-center">
                                                    <span className="material-icons text-[28px]">
                                                        add
                                                    </span>
                                                </button>
                                                <button onClick={() => decreaseQuantity(product.id)} className="bg-main-300 rounded-[100%] p-1 flex items-center">
                                                    <span className="material-icons text-[28px]">
                                                        remove
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <h3 className="flex justify-center font-domine text-white w-full">Total Price: {totalPrice}</h3>
                                    <Link to={'/checkout'} className="bg-main-300 text-white font-semibold font-domine text-[22px] rounded-md p-2 m-2">
                                        Checkout
                                    </Link>
                                </div>  
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Market;