export interface AddBuyerBalanceState {
    id: string;
    amount: number;
}

export interface BuyerTransactionsState {
    id: string;
    amount: number;
    createdAt: string;
    purchasedItemId: string;
    sellerId: string;
    status: string;
}

export interface BuyerDetails {
    name: string;
    email: string;
    phone: string;
    bankDetails: string;
    createdAt: string;
}