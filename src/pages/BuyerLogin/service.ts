import http from '../../api';
import { SignInState, SignUpState } from './types';

const registerBuyer = (data: SignUpState) => {
    return http.post('/customer/create', data);
};

const loginBuyer = (data: SignInState) => {
    return http.post('/customer/login', data);
};

const BuyerService = {
    registerBuyer,
    loginBuyer
};
  
export default BuyerService;