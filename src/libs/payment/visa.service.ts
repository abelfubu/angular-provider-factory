import { Injectable } from '@angular/core';
import { PaymentHandler } from './models/payment-handler.interface';

@Injectable({
  providedIn: 'root',
})
export class VisaService implements PaymentHandler {
  pay(amount: number): string {
    return `Paying with Visa ${amount}$`;
  }
}
