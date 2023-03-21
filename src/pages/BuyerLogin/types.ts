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

export interface BuyerWalletState {
    id: string;
    balance: number;
    customerId: string;
}