import { create } from 'zustand';

export interface IUserDetails {
    id: string;
    name: string;
    userType: string;
}

export interface IUserStore {
    userDetails: IUserDetails;
    setUserDetails: (userDetails: IUserDetails) => void;
    getUserDetails: () => IUserDetails;
}

const useUserStore = create<IUserStore>((set,get): IUserStore => ({
    userDetails: {
        id: '',
        name: '',
        userType: ''
    },
    setUserDetails: (userDetails: IUserDetails) => {
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