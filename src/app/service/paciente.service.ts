import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class PacienteService implements ICrudService<Paciente>{

  constructor() { }
  apiUrl: string = '';
  get(termoBusca?: string): Observable<Paciente[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Observable<Paciente> {
    throw new Error('Method not implemented.');
  }
  insert(objeto: Paciente): Observable<Paciente> {
    throw new Error('Method not implemented.');
  }
  update(objeto: Paciente): Observable<Paciente> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
