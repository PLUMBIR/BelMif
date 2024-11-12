import { Component, input } from '@angular/core';
import { MythologyModel } from '../../models/mythologyModel';

@Component({
  selector: 'app-mythology-card',
  standalone: true,
  imports: [],
  templateUrl: './mythology-card.component.html',
  styleUrl: './mythology-card.component.scss'
})

export class MythologyCardComponent {
  card = input.required<MythologyModel>();
}
