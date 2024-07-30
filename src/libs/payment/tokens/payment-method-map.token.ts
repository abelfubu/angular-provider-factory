import { InjectionToken, Type } from '@angular/core';
import { AmericanExpressService } from '../american-express.service';
import { MastercardService } from '../mastercard.service';
import { PaymentHandler } from '../models/payment-handler.interface';
import { PaymentMethodType } from '../models/payment-methods.type';
import { PaypalService } from '../paypal.service';
import { VisaService } from '../visa.service';

export const PAYMENT_METHODS_MAP = new InjectionToken<
  Record<PaymentMethodType, Type<PaymentHandler>>
>('PAYMENT_METHODS_MAP', {
  providedIn: 'root',
  factory: () => ({
    1: VisaService,
    2: MastercardService,
    3: AmericanExpressService,
    4: PaypalService,
  }),
});
