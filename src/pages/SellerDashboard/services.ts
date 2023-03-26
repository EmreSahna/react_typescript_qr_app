import http from '../../api';
import { SellerDetails, SellerTransactions } from './types';

const getSellerTransactions = (id: string) => {
    return http.get<SellerTransactions[]>('/seller-transaction/get-transaction/' + id);
}

const getSellerDetails = (id: string) => {
    return http.get<SellerDetails>('/seller/get-seller/' + id);
}

const generateQrCode = (id: string) => {
    return http.get('/seller-wallet/generate-qr-code/' + id, { responseType: 'arraybuffer' });
}

const SellerDashboardService = {
    getSellerTransactions,
    getSellerDetails,
    generateQrCode
}

export default SellerDashboardService;