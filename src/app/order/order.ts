import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order',
  imports: [CommonModule],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order {
  @Input() Orders:any = [];
  @Output() confirmOrder = new EventEmitter<any[]>();
  totalPrice: number = 0;
  isOpen: boolean = false;
  orders: any[] = [];

  getTotalPrice(): number {
    console.log('Calculating total price for orders:', this.Orders);
    return this.Orders.reduce((total: number, item: any) => total + (item.price * item.count), 0);
  }

  removeItem(item: any): void {
    const index = this.Orders.findIndex((order: any) => order.name === item.name);
    if (index !== -1) {
      this.Orders.splice(index, 1);
    }
  }

  onConfirmOrder(): void {
    this.orders = [...this.Orders];
    this.isOpen = true;
  }

  onCloseModal(): void {
    this.isOpen = false;
  }

  onConfirmOrderFinal(): void {
    this.confirmOrder.emit(this.Orders);
    this.isOpen = false;
  }
}
