import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MastercardService {
  pay(amount: number): string {
    return `Paying with Mastercard ${amount}$`;
  }
}
