import { Component, signal } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../shared/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  _userServ : UserService ;
  users = signal<User[]>([]);


  constructor(private userService: UserService){
    this._userServ = userService;
    userService.getUsers().subscribe({
      next: (products) => {
        this.users.set(products);
      }
    })
  }
}
