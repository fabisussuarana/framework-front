import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../model/convenio';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService implements ICrudService<Convenio>{

  constructor() { }
  apiUrl: string = '';
  get(termoBusca?: string): Observable<Convenio[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Observable<Convenio> {
    throw new Error('Method not implemented.');
  }
  insert(objeto: Convenio): Observable<Convenio> {
    throw new Error('Method not implemented.');
  }
  update(objeto: Convenio): Observable<Convenio> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
