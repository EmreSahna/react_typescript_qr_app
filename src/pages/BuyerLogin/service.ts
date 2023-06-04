import http from '../../api';
import { BuyerWalletState, SignInState, SignUpState } from './types';

const registerBuyer = (data: SignUpState) => {
    return http.post('/customer/register', data);
};

const getBuyerWallet = (id: string) => {
    return http.get<BuyerWalletState>('/customer-wallet/get-balance/' + id );
}

const loginBuyer = (data: SignInState) => {
    return http.post('/customer/login', data);
};

const BuyerService = {
    registerBuyer,
    loginBuyer,
    getBuyerWallet
};
  
export default BuyerService;