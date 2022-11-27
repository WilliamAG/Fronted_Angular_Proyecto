import { Component } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(){
    render(
      {
        id: "#myPaypalButtons",
        currency: "LPS",
        value: "100.00",
        onApprove: (details) => {
          alert("Transaction Successfull")
        }
      }
    )
  }


}
