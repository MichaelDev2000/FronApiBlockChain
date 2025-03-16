import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MembershipCardComponent } from './components/membership-card/membership-card.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'membresias', component: MembershipCardComponent },
    { path: 'transacciones', component: TransactionsComponent }
];
