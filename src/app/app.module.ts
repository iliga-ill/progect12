import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipePipe } from './shared/pipes/pipe.pipe';
import { InformationComponent } from './shared/information/information.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WorkerListComponent } from './ui/worker-list/worker-list.component';
import { AddFormComponent } from './ui/forms/add-form/add-form.component';
import { ChangeFormComponent } from './ui/forms/change-form/change-form.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>)=null;

@NgModule({
  declarations: [AppComponent, TableWorkersComponent, AddformWorkerComponent, PipePipe, InformationComponent, WorkerListComponent, AddFormComponent, ChangeFormComponent],
  imports: [
    NgxMaskModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
