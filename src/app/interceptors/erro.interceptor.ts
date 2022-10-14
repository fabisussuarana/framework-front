import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AlertaService } from '../service/alerta.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ETipoAlerta } from '../model/e-tipo-alerta';
import { LoginComponent } from '../components/login/login.component';
import { LoginService } from '../service/login.service';

@Injectable()
export class ErroInterceptor implements HttpInterceptor {

  constructor(
    private servicoAlerta: AlertaService,
    private servicoLogin: LoginService
  ) {}

  private readonly ERRO_HTTP: { [key: number]: string } = {
    401: "Acesso não autorizado: falha na autenticação!",
    403: "O acesso ao recurso foi negado!",
    404: "Recurso não encontrado!",
    500: "Erro interno do servidor!",
    0: "Erro desconhecido!"
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(
      (erro) => this.processaErro(erro) 
    ));
  }

  processaErro(erro: HttpErrorResponse): Observable<any> {
    let mensagemErro = this.ERRO_HTTP[erro.status] || erro.error?.Message || erro.statusText;

    if (erro.status === 401) {
      if (this.servicoLogin.isAutenticado()) {
        this.servicoLogin.logout();
      }
      
    }

    this.servicoAlerta.enviarAlerta({
      tipo: ETipoAlerta.ERRO,
      mensagem: mensagemErro
    })

    return throwError(() => erro);
  }

}
