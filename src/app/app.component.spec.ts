import { TestBed } from '@angular/core/testing';
import { PaymentFactoryService } from '../libs/payment/payment-factory.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: PaymentFactoryService,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  function setup() {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    fixture.componentRef.setInput('paymentMethods', 1);
    fixture.detectChanges();

    return { fixture, component };
  }

  it('should create the app', () => {
    const { component } = setup();

    expect(component).toBeTruthy();
  });

  it(`should have the 'factory' title`, () => {
    const { component } = setup();

    expect(component.selectedMethod()).toEqual(1);
  });

  it('should render title', () => {
    const { fixture } = setup();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, factory',
    );
  });
});
