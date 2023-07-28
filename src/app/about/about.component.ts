import { Component } from '@angular/core';
import { JsonPlaceholderService } from '../apiServices/json-placeholder.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
posts:any = [];

  constructor(private JsonPlaceholderService:JsonPlaceholderService){
    this.JsonPlaceholderService.allPost().subscribe(data => {
      this.posts = data;

    })
  }
}

