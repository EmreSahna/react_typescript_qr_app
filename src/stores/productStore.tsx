import { create } from 'zustand';

export interface ISellerDetails {
    seller_id: string;
}

export interface IProductDetails {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface IProductStore {
    sellerDetails: ISellerDetails;
    setSellerDetails: (sellerDetails: ISellerDetails) => void;
    getSellerDetails: () => ISellerDetails;
    productDetails: IProductDetails[];
    setProductDetails: (productDetails: IProductDetails[]) => void;
    getProductDetails: () => IProductDetails[];
    totalPrice: number;
    setTotalPrice: (totalPrice: number) => void;
    getTotalPrice: () => number;
}

const useProductStore = create<IProductStore>((set,get): IProductStore => ({
    sellerDetails: {
        seller_id: ''
    },
    setSellerDetails: (sellerDetails: ISellerDetails) => {
        set((state) => ({
            ...state,
            sellerDetails
        }));
    },
    getSellerDetails: () => {
        return get().sellerDetails;
    },
    productDetails: [],
    setProductDetails: (productDetails: IProductDetails[]) => {
        set((state) => ({
            ...state,
            productDetails
        }));
    },
    getProductDetails: () => {
        return get().productDetails;
    },
    totalPrice: 0,
    setTotalPrice: (totalPrice: number) => {
        set((state) => ({
            ...state,
            totalPrice
        }));
    },
    getTotalPrice: () => {
        return get().totalPrice;
    }
}));

export default useProductStore;