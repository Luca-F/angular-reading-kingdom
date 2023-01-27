import { Component } from '@angular/core';
import { FLIPCARDS } from '../mocks/mock-flipcards';


@Component({
  selector: 'app-propos',
  templateUrl: './propos.component.html',
  styleUrls: ['./propos.component.css']
})
export class ProposComponent {
  flipcards = FLIPCARDS;
}