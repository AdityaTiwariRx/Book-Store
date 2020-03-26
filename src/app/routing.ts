import {Routes,RouterModule,PreloadAllModules,NoPreloading} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const APP_LAZY_ROUTES: Routes = [
  { path: "", component: BookComponent },
  { path: "add", component: AddBookComponent },
  { path: "edit/:id", component: EditBookComponent },
];

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(
  APP_LAZY_ROUTES,
  {
    preloadingStrategy: NoPreloading
  }
);
