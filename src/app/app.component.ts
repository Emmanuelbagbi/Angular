import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component'; 
import { PlantContentComponent } from './components/plant-content/plant-content.component';
import { IndoorCollectionComponent } from './components/indoor-collection/indoor-collection.component';
import { QualityPlantsComponent } from './components/quality-plants/quality-plants.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlantSectionComponentsComponent } from './components/plant-section-components/plant-section-components.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, HomeComponent, HeaderComponent, ContentComponent,PlantContentComponent
    ,IndoorCollectionComponent,QualityPlantsComponent,FaqComponent,FooterComponent,PlantSectionComponentsComponent
  ], 
  template: `
    <app-header></app-header> 
    <app-home></app-home>
    <app-content></app-content>  
    <app-plant-content></app-plant-content>
    <app-plant-section-components></app-plant-section-components>
    <app-indoor-collection></app-indoor-collection>
    <router-outlet></router-outlet>
    <app-quality-plants></app-quality-plants>
    <app-faq></app-faq>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = 'crop-prediction';
}
