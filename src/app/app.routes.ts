import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MembershipCardComponent } from './components/membership-card/membership-card.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'membresias', component: MembershipCardComponent }
];
