import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from '../shared/information/information.component';
import { WorkerListComponent } from '../ui/worker-list/worker-list.component';
import { ChangeFormComponent } from '../ui/forms/change-form/change-form.component';
import { AddFormComponent } from '../ui/forms/add-form/add-form.component';
 
 
const routes: Routes = [
    { path: '', redirectTo: '/Information', pathMatch: 'full' },
    { path: 'Information', component: InformationComponent },
    { path: 'Worker list', component: WorkerListComponent },
    { path: 'addForm', component: AddFormComponent },
    { path: 'ChangeForm', component: ChangeFormComponent }
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }
