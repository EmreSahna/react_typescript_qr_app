import http from '../../api';
import { AddBuyerBalanceState, BuyerDetails, BuyerTransactionsState } from './types';

const addBuyerBalance = (data: AddBuyerBalanceState) => {
    return http.post('/customer-wallet/add-balance', data);
}

const getBuyerTransactions = (id: string) => {
    return http.get<BuyerTransactionsState[]>('/customer-transaction/get-transaction/' + id);
}

const getBuyerDetails = (id: string) => {
    return http.get<BuyerDetails>('/customer/get-customer/' + id);
}

const BuyerDashboardService = {
    addBuyerBalance,
    getBuyerTransactions,
    getBuyerDetails
}

export default BuyerDashboardService;