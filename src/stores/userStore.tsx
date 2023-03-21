import { create } from 'zustand';

export interface IUserDetails {
    id: string;
    name: string;
}

export interface IUserWallet {
    id: string;
    balance: number;
    user_id: string;
}

export interface IUserStore {
    userDetails: IUserDetails;
    setUserDetails: (userDetails: IUserDetails) => void;
    getUserDetails: () => IUserDetails;
    userWallet: IUserWallet;
    setUserWallet: (userWallet: IUserWallet) => void;
    getUserWallet: () => IUserWallet;
}

const useUserStore = create<IUserStore>((set,get): IUserStore => ({
    userDetails: {
        id: '',
        name: ''
    },
    setUserDetails: (userDetails: IUserDetails) => {
        set((state) => ({
            ...state,
            userDetails
        }));
    },
    getUserDetails: () => {
        return get().userDetails;
    },
    userWallet: {
        id: '',
        balance: 0,
        user_id: '',
    },
    setUserWallet: (userWallet: IUserWallet) => {
        set((state) => ({
            ...state,
            userWallet
        }));
    },
    getUserWallet: () => {
        return get().userWallet;
    }
}));

export default useUserStore;