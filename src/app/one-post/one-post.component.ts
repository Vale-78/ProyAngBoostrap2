import { Component } from '@angular/core';
import { JsonPlaceholderService } from '../apiServices/json-placeholder.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

//ActivateRote y ParamMap son librerías para obtener el 1, el 2... lo que va luegp del post... los id

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})

export class OnePostComponent {
   // creo variables que usaré en one-post.component.html
  public post:any;
  public comments:any;

  // A continuación inicializo el servicio que creé y también la ruta
  constructor(private JsonPlaceholderService: JsonPlaceholderService, private ruta: ActivatedRoute){
    // this.id = this.ruta.snapshot.params['id'];
    // console.log(this.id);


    //el objeto ruta usa el método propio:ParamMap al cual debo suscribirme (ya que es observable)
    //creo variable params (que mapea los parámetros) y la llamo para que mapee y traiga cada id
    this.ruta.paramMap.subscribe((params: ParamMap) => {
      this.onePost(params.get('id'));
    });
  }

  onePost(id:any) {    
    this.JsonPlaceholderService.onePost(id).subscribe(data =>{
      this.post = data;
      // console.log(data);
    });

    this.JsonPlaceholderService.commentsPost(id).subscribe(data =>{
      this.comments = data;
    });
  }
}
