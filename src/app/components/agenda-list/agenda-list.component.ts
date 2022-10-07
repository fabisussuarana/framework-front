import { Component, OnInit } from '@angular/core';
import { Atendimento } from 'src/app/model/atendimento';
import { AtendimentoService } from 'src/app/service/atendimento.service';
import { IList } from '../i-list';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styles: [
  ]
})
export class AgendaListComponent implements OnInit, IList<Atendimento> {

  constructor(
    private servico: AtendimentoService
  ) { }

  registros: Atendimento[] = Array<Atendimento>();

  get(termoBusca?: string | undefined): void {
    this.servico.get(termoBusca).subscribe({
      next: (resposta: Atendimento[]) => {
        this.registros = resposta;
      }
    })
  }
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.get();
  }

}
