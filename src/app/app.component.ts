import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ForExampleComponent } from './for-example/for-example.component';
import { IfExampleComponent } from './if-example/if-example.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ForExampleComponent, IfExampleComponent, SwitchExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'angular-17';
}
