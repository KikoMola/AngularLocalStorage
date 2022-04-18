import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponentComponent } from './componentes/navigation-component/navigation-component.component';
import { TaskFormComponentComponent } from './componentes/task-form-component/task-form-component.component';
import { TaskComponentComponent } from './componentes/task-component/task-component.component';
import { TaskListComponentComponent } from './componentes/task-list-component/task-list-component.component';

import { TaskService } from './servicios/task-service.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponentComponent,
    TaskFormComponentComponent,
    TaskComponentComponent,
    TaskListComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, ToastrModule.forRoot()],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
