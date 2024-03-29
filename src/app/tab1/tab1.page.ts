import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';
import { Animation } from '@ionic/core';
import { Observable } from 'rxjs';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit, AfterViewInit {

  products: Observable<any[]>;
  @ViewChild('myfab', { read: ElementRef }) cartBtn: ElementRef;
  cartAnimation: Animation;
  cart = {};
  
  constructor(private productService: ProductService, private animationCtlr: AnimationController, private modalCtrl: ModalController) {}
  
  ngOnInit():void {
    this.products = this.productService.getProducts();
    
    this.productService.cart.subscribe(value => {
      console.log('MY CART NOW: ', value);
      this.cart = value;
    });
  }
  
  ngAfterViewInit() {
    this.cartAnimation = this.animationCtlr.create('cart-animation');
    this.cartAnimation
    .addElement(this.cartBtn.nativeElement)
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 0.8, transform: 'scale(0.9)' },
      { offset: 1, transform: 'scale(1)' }
    ])
    .duration(300)
    .easing('ease-out');
  }
  
  addToCart(event, product) {
    event.stopPropagation();
    this.productService.addToCart(product.id);
    this.cartAnimation.play();
  }
  
  removeFromCart(event, product) {
    event.stopPropagation();
    this.productService.removeFromCart(product.id);
    this.cartAnimation.play();
  }
  
  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartModalPage
    });
    await modal.present();
  }
  
}