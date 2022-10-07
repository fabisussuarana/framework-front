import { Component, OnInit } from '@angular/core';
import { Atendimento } from 'src/app/model/atendimento';
import { AtendimentoService } from 'src/app/service/atendimento.service';
import { IList } from '../i-list';

@Component({
  selector: 'app-atendimento-list',
  templateUrl: './atendimento-list.component.html',
  styles: [
  ]
})
export class AtendimentoListComponent implements OnInit, IList<Atendimento> {

  constructor(
    private servico: AtendimentoService
  ) { }

  registros: Atendimento[] = Array<Atendimento>();

  get(termoBusca?: string): void {
    console.log(termoBusca);
  }
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
