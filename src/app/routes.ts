import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {CrytonLoaderComponent} from './cryton-loader/cryton-loader.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
    {
      path: 'cryton',
      component: CrytonLoaderComponent,
      title: 'Cryton Dashboard',
    },
  ];
  
export default routeConfig;
