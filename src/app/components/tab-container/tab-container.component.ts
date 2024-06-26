import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { CareersComponent } from '../careers/careers.component';

@Component({
  selector: 'app-tab-container',
  standalone: true,
  imports: [
    MatTabsModule,
    HomeComponent,
    AboutusComponent,
    CareersComponent
  ],
  templateUrl: './tab-container.component.html',
  styleUrl: './tab-container.component.css'
})
export class TabContainerComponent {

}
