import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { dynamicEntityRoutes } from './dynamic-entity/dynamic-entity.routes'
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes.concat(dynamicEntityRoutes))],
  exports: [RouterModule]
})
export class AppRoutingModule {}
