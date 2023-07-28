import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-about',
  templateUrl: './box-about.component.html',
  styleUrls: ['./box-about.component.css']
})
export class BoxAboutComponent {
  @Input() titulo:string='';
  @Input() texto:string='';

  constructor(){
  }
}
