import http from '../../api';
import { PayState } from './types';

const pay = (data: PayState) => {
    return http.post('/customer-transaction/pay', data);
};

const PaymentService = {
    pay,
};
  
export default PaymentService;