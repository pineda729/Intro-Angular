import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import JasonPlaceHolderModel from 'src/app/models/jsonPlaceHolder.model';
import { JsonPlaceHolderService } from 'src/app/services/json-place-holder.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  posts : JasonPlaceHolderModel[] = [];

  loginForm: FormGroup

  constructor(
    private _jsonPlaceHolderService: JsonPlaceHolderService,
    private formBuilder: FormBuilder
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  login(){
    if(this.loginForm.valid){
      return alert('Ha hecho login correctamente');
    }
    alert('email o contraseña no cumplen con las validaciones');
  }

  ngOnInit(): void {
    this._jsonPlaceHolderService.obtenerDatos().subscribe(
      (data) =>{
        this.posts = data;
  }
  );
  }

}
