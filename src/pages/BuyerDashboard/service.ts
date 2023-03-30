import http from '../../api';
import { AddBuyerBalanceState, BuyerDetails, BuyerTransactionsState, BuyerWallet } from './types';

const addBuyerBalance = (data: AddBuyerBalanceState) => {
    return http.post('/customer-wallet/add-balance', data);
}

const getBuyerTransactions = (id: string) => {
    return http.get<BuyerTransactionsState[]>('/customer-transaction/get-transaction/' + id);
}

const getBuyerDetails = (id: string) => {
    return http.get<BuyerDetails>('/customer/get-customer/' + id);
}

const getBuyerWalletBalance = (id: string) => {
    return http.get<BuyerWallet>('/customer-wallet/' + id);
}

const createBuyerWallet = (id: string) => {
    return http.post<BuyerWallet>('/customer-wallet/create', { customer_id: id});
}

const BuyerDashboardService = {
    addBuyerBalance,
    getBuyerTransactions,
    getBuyerDetails,
    getBuyerWalletBalance,
    createBuyerWallet
}

export default BuyerDashboardService;