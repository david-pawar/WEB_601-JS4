import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface'
import {ContentListComponent} from '../content-list/content-list.component'

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})

export class ContentCardComponent implements OnInit{

  @Input() contentItem: Content | undefined;
constructor(){

}
ngOnInit() {

}
  }
