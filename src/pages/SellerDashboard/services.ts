import http from '../../api';
import { SellerDetails, SellerTransactions, SellerWallet, WithdrawSellerBalanceState } from './types';

const getSellerTransactions = (id: string) => {
    return http.get<SellerTransactions[]>('/seller-transaction/get-transaction/' + id);
}

const getSellerDetails = (id: string) => {
    return http.get<SellerDetails>('/seller/get-seller/' + id);
}

const generateQrCode = (id: string) => {
    return http.get('/seller-wallet/generate-qr-code/' + id, { responseType: 'arraybuffer' });
}

const getSellerWalletBalance = (id: string) => {
    return http.get<SellerWallet>('/seller-wallet/' + id);
}

const createSellerWallet = (id: string) => {
    return http.post<SellerWallet>('/seller-wallet/create', { seller_id: id});
}

const withdrawSellerBalance = (data: WithdrawSellerBalanceState) => {
    return http.post('/seller-wallet/withdraw', data);
}

const SellerDashboardService = {
    getSellerTransactions,
    getSellerDetails,
    generateQrCode,
    getSellerWalletBalance,
    createSellerWallet,
    withdrawSellerBalance
}

export default SellerDashboardService;