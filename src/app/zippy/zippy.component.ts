import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  constructor() { }

  @Input('show-details') showDetails: boolean;
  @Input('title') title: string;
  @Input('content') content: string;

  @Output('shipping-clicked') shippingClick = new EventEmitter();
  @Output('billing-clicked') billingClick = new EventEmitter();


  ngOnInit(): void {
  }

  shippingClicked(){
    
    this.shippingClick.emit();
  }

  billingClicked(){
    
    this.billingClick.emit();
  }

}
