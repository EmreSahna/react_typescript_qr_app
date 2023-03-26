import http from '../../api';
import { SellerWalletState, SignInState, SignUpState } from './types';

const registerSeller = (data: SignUpState) => {
    return http.post('/seller/create', data);
};

const getSellerWallet = (id: string) => {
    return http.get<SellerWalletState>('/customer-wallet/get-balance/' + id );
}

const loginSeller = (data: SignInState) => {
    return http.post('/seller/login', data);
};

const SellerService = {
    registerSeller,
    loginSeller,
    getSellerWallet
};
  
export default SellerService;