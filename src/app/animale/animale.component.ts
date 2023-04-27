import { Component, Input } from '@angular/core';
import { Animale } from './animale.model';

@Component({
  selector: 'app-animale',
  templateUrl: './animale.component.html',
  styleUrls: ['./animale.component.css']
}) 
export class animaleComponent {
  @Input()  animale: Animale;


  ngInit() {
    
  }
}