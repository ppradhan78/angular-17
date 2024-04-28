import { Component } from '@angular/core';

@Component({
  selector: 'app-for-example',
  standalone: true,
  imports: [],
  templateUrl: './for-example.component.html',
  styleUrl: './for-example.component.css'
})
export class ForExampleComponent {
  isUserLoggedIn: boolean = true;
  users = new Array<Iuser>();// string[] = null;
  constructor() {
    if (this.isUserLoggedIn) {
      this.users = [{ id: 1, name: "user1" }, { id: 2, name: "user2" }, { id: 3, name: "user3" }]
    }
  }
}
export interface  Iuser {
  id: number;
  name: string;
}
