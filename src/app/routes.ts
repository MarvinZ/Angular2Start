import { Routes } from '@angular/router'
import { Test1Component } from './test1/test1.component'
import { Test2Component } from './test2/test2.component'
import { GenericReportComponent } from './generic-report/generic-report.component'
import { GenericReport2Component } from './generic-report2/generic-report2.component'
import { ThingDetailComponent } from './thing-detail/thing-detail.component'


import { Error404Component } from './errors/404.component'


export const appRoutes: Routes = [
    { path:'test1', component: Test1Component },
    { path:'test2', component: Test2Component },
    { path:'genericReport', component: GenericReportComponent },
    { path:'genericReport2', component: GenericReport2Component },
    { path:'', redirectTo: '/test1', pathMatch:'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
    { path: '404', component: Error404Component },
    { path: 'thing/:id',/*canActivate: [ ProductDetailGuard],*/component: ThingDetailComponent }


]