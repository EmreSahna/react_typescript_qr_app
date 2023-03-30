import http from '../../api';
import { BuyerWallet } from './types';

const getBuyerWalletBalance = (id: string) => {
    return http.get<BuyerWallet>('/customer-wallet/' + id);
}

const CheckoutService = {
    getBuyerWalletBalance
}

export default CheckoutService;