import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-about',
  templateUrl: './box-about.component.html',
  styleUrls: ['./box-about.component.css']
})
export class BoxAboutComponent {
  @Input('titulo') titulo:string='';
  @Input('texto') texto:string='';
  @Input('delay') delay: string = '';
  @Input('icono') icono: string = '';
  @Input('id') id: number = 0;
  

  constructor(){
  }
}
