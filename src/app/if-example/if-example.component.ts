import { Component } from '@angular/core';

@Component({
  selector: 'app-if-example',
  standalone: true,
  imports: [],
  templateUrl: './if-example.component.html',
  styleUrl: './if-example.component.css'
})
export class IfExampleComponent {
  isUserLoggedIn: boolean = true;
}
