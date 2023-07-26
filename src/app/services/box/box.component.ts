import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() delay:string='';
  @Input() titulo:string='';
  @Input() text:string='';
  @Input() icono:string='';
  @Input() color:string='';

  constructor(){
  }
}
