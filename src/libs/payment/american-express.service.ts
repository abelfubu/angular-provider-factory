import { Injectable } from '@angular/core';
import { PaymentHandler } from './models/payment-handler.interface';

@Injectable({
  providedIn: 'root',
})
export class AmericanExpressService implements PaymentHandler {
  pay(amount: number): string {
    return `Paying with American Express ${amount}$`;
  }
}
