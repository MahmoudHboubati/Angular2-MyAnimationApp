import { provideRouter, RouterConfig } from '@angular/router';
import {AnimatedImagesComponent} from '../images/animated-images.component';
import {FireBaseComponent} from '../firebase/firebase.component';
import {PageNotFoundComponent} from './notFound.component';
import {ExpensesComponent} from '../expenses/expenses.component';
import {PlannedExpensesComponent} from '../plannedExpenses/plannedExpenses.component';
import {ExpensesVSPlannedComponent} from '../dashboard/expensesVSplanned.component';
import {IncomeComponent} from "../income/income.component";

// import {AccelaComponent} from '../accela/accela.component';

const routes: RouterConfig = [
  { path: 'animation', component: AnimatedImagesComponent },
  { path: 'firebase', component: FireBaseComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'plannedExpenses', component: PlannedExpensesComponent },
  { path: 'expensesVSplanned', component: ExpensesVSPlannedComponent },
  { path: 'income', component: IncomeComponent },

  // { path: 'accela', component: AccelaComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
