import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {

  constructor(){
    render(
      {
        id: "#myPaypalButtons",
        currency: "LPS",
        value: "300.00",
        onApprove: (details) => {
          alert("Transaction Successfull")
        }
      }
    )
  }
}
