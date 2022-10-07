import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profissional } from '../model/profissional';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService implements ICrudService<Profissional>{

  constructor() { }
  apiUrl: string = '';
  get(termoBusca?: string): Observable<Profissional[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Observable<Profissional> {
    throw new Error('Method not implemented.');
  }
  insert(objeto: Profissional): Observable<Profissional> {
    throw new Error('Method not implemented.');
  }
  update(objeto: Profissional): Observable<Profissional> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
