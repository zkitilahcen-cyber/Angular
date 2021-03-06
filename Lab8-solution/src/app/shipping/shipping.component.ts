import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  /**
   * constructor of ShippingComponent
   * @param cartService 
   */
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices(); 
  }

}
