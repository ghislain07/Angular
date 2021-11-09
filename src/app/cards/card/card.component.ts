import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  TitreCard = "Card title";

  imageStyle = {
    width: '20rem',
  }


  ngOnInit(): void {
  }

}
