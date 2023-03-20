import http from '../../api';
import { SignInState, SignUpState } from './types';

const registerBuyer = (data: SignUpState) => {
    return http.post('/seller/create', data);
};

const loginBuyer = (data: SignInState) => {
    return http.post('/seller/login', data);
};

const SellerService = {
    registerBuyer,
    loginBuyer
};
  
export default SellerService;