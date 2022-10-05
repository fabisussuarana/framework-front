import { Tracing } from "trace_events";

export interface Paciente {
    id: number;
    nome: string;
    email: Tracing;
    telefone: string;
    dataNascimento: string;
    grupoSanguineo: string;
    sexo: string;
    cep: string;
    endereco: string;
    cidade: string;
    estado: string;
}
