import { Component } from '@angular/core';
import { Dessert } from "./dessert/dessert";

@Component({
  selector: 'app-root',
  imports: [Dessert],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'intern-app';
    desserts: Card[] = [
    {
      name: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake with a creamy frosting.',
      price: 4.99,
      imageUrl: 'assets/images/chocolate-cake.jpg'
    },
    {
      name: 'Cheesecake',
      description: 'Creamy cheesecake with a graham cracker crust.',
      price: 5.49,
      imageUrl: 'assets/images/cheesecake.jpg'
    },
    {
      name: 'Apple Pie',
      description: 'Classic apple pie with a flaky crust and cinnamon filling.',
      price: 3.99,
      imageUrl: 'assets/images/apple-pie.jpg'
    },
    {
      name: 'Brownie',
      description: 'Fudgy brownie topped with chocolate ganache.',
      price: 2.99,
      imageUrl: 'assets/images/brownie.jpg'
    },
    {
      name: 'Ice Cream Sundae',
      description: 'Vanilla ice cream topped with chocolate sauce and nuts.',
      price: 3.49,
      imageUrl: 'assets/images/ice-cream-sundae.jpg'
    }
  ];

}
interface Card {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}
