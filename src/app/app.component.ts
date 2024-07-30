import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PaymentMethod } from '../libs/payment/models/payment-method.model';
import { PaymentMethodType } from '../libs/payment/models/payment-methods.type';
import { PaymentFactoryService } from '../libs/payment/payment-factory.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `
    <select [(ngModel)]="selectedMethod">
      @for (method of paymentMethods; track method.id) {
        <option [value]="method.id">{{ method.name }}</option>
      }
    </select>

    <button (click)="pay()">PAY</button>

    <div>{{ message() }}</div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly paymentFactory = inject(PaymentFactoryService);
  readonly selectedMethod = signal<PaymentMethodType>(1);
  readonly message = signal<string>('');

  protected readonly paymentMethods: PaymentMethod[] = [
    { id: 1, name: 'Visa' },
    { id: 2, name: 'Mastercard' },
    { id: 3, name: 'American Express' },
    { id: 4, name: 'Paypal' },
  ];

  pay(): void {
    const service = this.paymentFactory.createService(this.selectedMethod());
    const message = service.pay(100);
    this.message.set(message);
  }
}
