import { Component, OnInit } from '@angular/core';
import { flipcards } from '../flipcards';

@Component({
  selector: 'app-flipcard-list',
  templateUrl: './flipcard-list.component.html',
  styleUrls: ['./flipcard-list.component.css']
})
export class FlipcardListComponent implements OnInit {

  flipcard = flipcards;
  constructor() { }

  ngOnInit() {
  }

}