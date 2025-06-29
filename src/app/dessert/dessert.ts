import { Component} from '@angular/core';
import { Order } from '../order/order';
@Component({
  selector: 'app-dessert',
  imports: [Order],
  templateUrl: './dessert.html',
  styleUrl: './dessert.css'
})
export class Dessert {
    selectedDessert: any[] = [];
    count: number = 0;
    showConfirmModal: boolean = false;
    desserts: item[] = [
    {
      name: 'Waffle with Berries',
      category: 'Waffle',
      price: 6.50,
      count: 0,
      imageUrl: '/images/image-waffle-desktop.jpg'
    },
    {
      name: 'Vanilla Bean Crème Brûlée',
      category: 'Crème Brûlée',
      price: 7.00,
      count: 0,
      imageUrl: '/images/image-creme-brulee-desktop.jpg'
    },
    {
      name: 'Macaron Mix of Five',
      category: 'Macaron',
      price: 8.00,
      count: 0,
      imageUrl: '/images/image-macaron-desktop.jpg'
    },
    {
      name: 'Classic Tiramisu',
      category: 'Tiramisu',
      price: 5.50,
      count: 0,
      imageUrl: '/images/image-tiramisu-desktop.jpg'
    },
    {
      name: 'Pistachio Baklava',
      category: 'Baklava',
      price: 4.00,
      count: 0,
      imageUrl: '/images/image-baklava-desktop.jpg'
    },
    {
      name: 'Lemon Meringue Pie',
      category: 'Pie',
      price: 5.00,
      count: 0,
      imageUrl: '/images/image-meringue-desktop.jpg'
    },
    {
      name: 'Red Velvet Cake',
      category: 'Cake',
      price: 4.50,
      count: 0,
      imageUrl: '/images/image-cake-desktop.jpg'
    },
    {
      name: 'Salted Caramel Brownie',
      category: 'Brownie',
      price: 4.50,
      count: 0,
      imageUrl: '/images/image-brownie-desktop.jpg'
    },
    {
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50,
        count: 0,
        imageUrl: "/images/image-panna-cotta-desktop.jpg"
    }

  ];
  selectDessert(dessert: item) {
    const existingItem = this.selectedDessert.find(item => item.name === dessert.name);
    if (existingItem) {
      existingItem.count++;
    } else {
      this.selectedDessert.push({
        ...dessert,
        count: 1
      });
    }

    // Update the count in the original desserts array
    const originalDessert = this.desserts.find(item => item.name === dessert.name);
    if (originalDessert) {
      originalDessert.count = (originalDessert.count || 0) + 1;
    }

    this.count++;
    console.log('Selected dessert name:', this.selectedDessert);
  }

  decreaseQuantity(dessert: item) {
    const existingItem = this.selectedDessert.find(item => item.name === dessert.name);
    if (existingItem) {
      if (existingItem.count > 1) {
        existingItem.count--;
      } else {
        // Remove item if count becomes 0
        const index = this.selectedDessert.findIndex(item => item.name === dessert.name);
        if (index !== -1) {
          this.selectedDessert.splice(index, 1);
        }
      }
    }

    // Update the count in the original desserts array
    const originalDessert = this.desserts.find(item => item.name === dessert.name);
    if (originalDessert) {
      if ((originalDessert.count || 0) > 1) {
        originalDessert.count = (originalDessert.count || 0) - 1;
      } else {
        originalDessert.count = 0;
      }
    }
  }

  onConfirmOrder(orders: any[]): void {
    this.showConfirmModal = true;
  }

  onCloseModal(): void {
    this.showConfirmModal = false;
  }
}
interface item {
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  count?: number; // Optional property to track quantity
}

