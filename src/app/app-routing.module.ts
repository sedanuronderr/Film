import { AppComponent } from './app.component';
import { ProductAddComponent } from './cicek/product-add/product-add.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CicekComponent } from './cicek/cicek.component';
import { SepetekleComponent } from './sepetekle/sepetekle.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/cicek',
    pathMatch: 'full'

  },
 {path:'cicek',component:CicekComponent},
 {path:'product-add-1',component: ProductAddComponent},
  {path:'app',component:AppComponent},
  {path:'detail/:name/:image/:date/:yorum',component:DetailComponent},
  {path:'sepet',component:SepetekleComponent},
  {path:'cicek/:id',component:CicekComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
