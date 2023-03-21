import { create } from 'zustand';

export interface IUserDetails {
    id: string;
    customerName: string;
    password: string;
    phone: string;
    email: string;
    bank_details: string;
    createdAt: string;
}

export interface IUserStore {
    userDetails: IUserDetails;
    setUserDetails: (userDetails: IUserDetails) => void;
    getUserDetails: () => IUserDetails;
}

const useUserStore = create<IUserStore>((set,get): IUserStore => ({
    userDetails: {
        id: '',
        customerName: '',
        password: '',
        phone: '',
        email: '',
        bank_details: '',
        createdAt: ''
    },
    setUserDetails: (userDetails: IUserDetails) => {
        console.log(userDetails);
        set((state) => ({
            ...state,
            userDetails
        }));
    },
    getUserDetails: () => {
        return get().userDetails;
    }
}));

export default useUserStore;