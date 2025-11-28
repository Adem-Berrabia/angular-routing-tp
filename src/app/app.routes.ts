import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { NotFoundComponent } from './not-found/not-found';
import { UserDetailComponent } from './user-detail/user-detail';
import { ProductDetailComponent } from './product-detail/product-detail';
import { SearchComponent } from './search/search';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'product/:id/:slug', component: ProductDetailComponent },
  { path: 'search', component: SearchComponent },
];
