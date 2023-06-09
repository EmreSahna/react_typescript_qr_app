export interface SignUpState {
    email: string;
    password: string;
    phone: string;
    customer_name: string;
    bank_details: string;
}

export interface SignInState {
    email: string;
    password: string;
}

export interface SellerWalletState {
    id: string;
    balance: number;
    sellerId: string;
}