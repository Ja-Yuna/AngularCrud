import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroContatoComponent } from './cadastro-contato/cadastro-contato.component';
import { ConsultaContatoComponent } from './consulta-contato/consulta-contato.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '',
    component: CadastroContatoComponent
  },
  {
    path: 'cadastrocontato',
    component: CadastroContatoComponent
  },
  {
    path: 'consultacontato',
    component: ConsultaContatoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
