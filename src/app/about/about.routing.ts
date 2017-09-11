import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const ABOUT_ROUTES: Routes = [
  { path: '', component: AboutComponent }
];

export const aboutRouting = RouterModule.forChild(ABOUT_ROUTES);
