export interface BuyerWalletState {
    balance: number;
}

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