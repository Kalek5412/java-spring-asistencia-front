import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroAsistenciaComponent } from './registro-asistencia/registro-asistencia.component';
import { RegistroSalidaComponent } from './registro-salida/registro-salida.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  {path:'registro-asistencia',component:RegistroAsistenciaComponent},
  {path:'registro-salida',component:RegistroSalidaComponent},
  {path:'reporte',component:ReporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
