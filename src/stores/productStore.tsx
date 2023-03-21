import { create } from 'zustand';

export interface ISellerDetails {
    seller_id: string;
}

export interface IProductDetails {
    id: string;
    name: string;
    price: number;
}

export interface IProductStore {
    sellerDetails: ISellerDetails;
    setSellerDetails: (sellerDetails: ISellerDetails) => void;
    getSellerDetails: () => ISellerDetails;
    productDetails: IProductDetails[];
    setProductDetails: (productDetails: IProductDetails[]) => void;
    getProductDetails: () => IProductDetails[];
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
    }
}));

export default useProductStore;