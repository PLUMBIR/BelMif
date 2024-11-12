import { TraditionsPageComponent } from './body/traditions-page/traditions-page.component';
import { Routes } from '@angular/router';
import { MainPageComponent } from './body/main-page/main-page.component';
import { MythologyPageComponent } from './body/mythology-page/mythology-page.component';
import { HolidaysPageComponent } from './body/holidays-page/holidays-page.component';
import { DancesPageComponent } from './body/dances-page/dances-page.component';

export const routes: Routes = [
    { 
        path: '',
        pathMatch: 'full',
        component: MainPageComponent
    },
    { 
        path: 'traditions',
        pathMatch: 'full',
        component: TraditionsPageComponent
    },
    { 
        path: 'mythology',
        pathMatch: 'full',
        component: MythologyPageComponent
    },
    { 
        path: 'holidays',
        pathMatch: 'full',
        component: HolidaysPageComponent
    },
    { 
        path: 'dances',
        pathMatch: 'full',
        component: DancesPageComponent
    },
];
