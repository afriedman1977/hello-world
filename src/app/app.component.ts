import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  shippingDetailsTitle = 'Shipping Details';
  billingDetailsTitle = 'Billing Details';
  shippingDetailContent = 'Shipping Details Content';
  billingDetailsContent = 'Billing Details Content';
  showShippingDetails = false;
  showBillingDetails = false;

  tweet = {
    body: 'Here is the body of the tweet...',
    isLiked: false,
    likesCount: 0
  }

  onLikeClicked(isLiked: boolean){
    this.tweet.isLiked = isLiked
    this.tweet.likesCount = isLiked? this.tweet.likesCount + 1 : this.tweet.likesCount -1;
   // alert('app component like is ' + this.tweet.isLiked)
  }

  onShippingClicked(){
    this.showShippingDetails = !this.showShippingDetails;
  }

  onBillingClicked(){
    this.showBillingDetails = !this.showBillingDetails;
  }
}
