import { Asistencia } from "./asistencia";

export class Estudiante {
  id!: number;
  nombre!: string;
  apellido!: string;
  codigo!: string;
  asistencias!: Asistencia[];
}
