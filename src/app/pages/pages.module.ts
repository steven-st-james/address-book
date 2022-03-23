import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DetailsComponent } from './details/details.component';
import { PagesRoutingModule} from './pages-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    PagesComponent,
    DetailsComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
    
  ],
  exports: [ CommonModule]
})
export class PagesModule { }
