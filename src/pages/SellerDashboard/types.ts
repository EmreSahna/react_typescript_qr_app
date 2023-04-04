export interface SellerDetails {
    sellerName: string;
    email: string;
    phone: string;
    bankDetails: string;
    createdAt: string;
    taxId: string;
    accountNumber: string;
}

export interface SellerTransactions {
    id: string;
    buyerId: string;
    purchaseItemId: string;
    amount: number;
    createdAt: string;
}

export interface SellerWallet {
    seller_id: string;
    balance: number;
}

export interface WithdrawSellerBalanceState {
    id: string;
    amount: number;
}