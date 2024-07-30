import { inject, Injectable, Injector } from '@angular/core';
import { PaymentHandler } from './models/payment-handler.interface';
import { PaymentMethodType } from './models/payment-methods.type';
import { PAYMENT_METHODS_MAP } from './tokens/payment-method-map.token';

@Injectable({
  providedIn: 'root',
})
export class PaymentFactoryService {
  private readonly injector = inject(Injector);
  private readonly PaymentMethodMap = inject(PAYMENT_METHODS_MAP);

  createService(method: PaymentMethodType): PaymentHandler {
    const service = this.PaymentMethodMap[method];

    if (!service) {
      throw new Error('Payment Method not supported');
    }

    return this.injector.get(service);
  }
}
