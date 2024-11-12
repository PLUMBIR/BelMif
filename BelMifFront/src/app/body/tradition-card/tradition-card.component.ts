import { Component, input } from '@angular/core';
import { TraditionModel } from '../../models/traditionModel';

@Component({
  selector: 'app-tradition-card',
  standalone: true,
  imports: [],
  templateUrl: './tradition-card.component.html',
  styleUrl: './tradition-card.component.scss'
})

export class TraditionCardComponent {
  card = input.required<TraditionModel>();
}
