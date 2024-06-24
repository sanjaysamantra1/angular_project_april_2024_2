import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './my-card.component.html',
  styleUrl: './my-card.component.css'
})
export class MyCardComponent {

}
