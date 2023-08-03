import { Component } from '@angular/core';
import { JsonPlaceholderService } from '../apiServices/json-placeholder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent {
// creo variables que usaré en one-post.component.html
  post:any;
  comments:any;

    constructor(private JsonPlaceholderService: JsonPlaceholderService,
      private ruta: ActivatedRoute){}

    ngOnInit(): void{
      let id = this.ruta.snapshot.params['id'];
      
      this.JsonPlaceholderService.onePost(1).subscribe(data => {
        this.post = data;
      });

      this.JsonPlaceholderService.commentPost(1).subscribe(data => {
        this.comments = data;
      });
  }
}

