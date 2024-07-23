import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import JasonPlaceHolderModel from '../models/jsonPlaceHolder.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {

  constructor(private http: HttpClient) {}

  obtenerDatos():Observable<JasonPlaceHolderModel[]> {
    return this.http.get<JasonPlaceHolderModel[]>('https://jsonplaceholder.typicode.com/posts');
    
  }
}
