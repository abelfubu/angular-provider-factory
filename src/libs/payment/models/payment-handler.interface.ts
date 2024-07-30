export interface PaymentHandler {
  pay(amount: number): string;
}
