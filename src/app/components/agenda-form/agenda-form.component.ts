import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Atendimento } from 'src/app/model/atendimento';
import { Convenio } from 'src/app/model/convenio';
import { Paciente } from 'src/app/model/paciente';
import { Profissional } from 'src/app/model/profissional';
import { AtendimentoService } from 'src/app/service/atendimento.service';
import { ConvenioService } from 'src/app/service/convenio.service';
import { PacienteService } from 'src/app/service/paciente.service';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { IForm } from '../i-form';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styles: [
  ]
})
export class AgendaFormComponent implements OnInit, IForm<Atendimento> {

  constructor(
    private servico: AtendimentoService,
    private servicoConvenio: ConvenioService,
    private servicoPaciente: PacienteService,
    private servicoProfissional: ProfissionalService,
    private route: ActivatedRoute
  ) { }

  registro: Atendimento = <Atendimento>{};

  profissionais: Profissional[] = Array<Profissional>();
  convenios: Convenio[] = Array<Convenio>();
  pacientes: Paciente[] = Array<Paciente>();
 
  submit(form: NgForm): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.servicoConvenio.get().subscribe({
      next: (resposta: Convenio[]) => {
        this.convenios = resposta;
      }
    });

    this.servicoPaciente.get().subscribe({
      next: (resposta: Paciente[]) => {
        this.pacientes = resposta;
      }
    })

    this.servicoProfissional.get().subscribe({
      next: (resposta: Profissional[]) => {
        this.profissionais = resposta;
      }
    })

    // const id = this.route.snapshot.queryParamMap.get("id");
    // if(){
      
    // }
  }

}