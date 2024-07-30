import { PaymentMethodType } from './payment-methods.type';

export interface PaymentMethod {
  id: PaymentMethodType;
  name: string;
}
