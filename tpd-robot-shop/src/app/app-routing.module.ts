import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: "Home - The Pink Dev's Robot Shop",
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    title: "Catalog - The Pink Dev's Robot Shop",
  },
  {
    path: 'cart',
    component: CartComponent,
    title: "Cart - The Pink Dev's Robot Shop",
  },
  { path: 'sign-in', component: SignInComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
