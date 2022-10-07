import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Atendimento } from '../model/atendimento';
import { ICrudService } from './i-crud-service';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService implements ICrudService<Atendimento>{

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/atendimento/';

  get(termoBusca?: string): Observable<Atendimento[]> {
    let url = this.apiUrl;
    if(termoBusca){
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Atendimento[]>(url);
  }
  getById(id: number): Observable<Atendimento> {
    throw new Error('Method not implemented.');
  }
  insert(objeto: Atendimento): Observable<Atendimento> {
    throw new Error('Method not implemented.');
  }
  update(objeto: Atendimento): Observable<Atendimento> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
