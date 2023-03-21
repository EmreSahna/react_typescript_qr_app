import http from '../../api';
import { AddBuyerBalanceState, BuyerTransactionsState, BuyerWalletState } from './types';

const getBuyerWallet = (id: string) => {
    return http.get<BuyerWalletState>('/customer-wallet/get-balance/' + id );
}

const addBuyerBalance = (data: AddBuyerBalanceState) => {
    return http.post('/customer-wallet/add-balance', data);
}

const getBuyerTransactions = (id: string) => {
    return http.get<BuyerTransactionsState[]>('/customer-transaction/get-transaction/' + id);
}

const BuyerDashboardService = {
    getBuyerWallet,
    addBuyerBalance,
    getBuyerTransactions
}

export default BuyerDashboardService;