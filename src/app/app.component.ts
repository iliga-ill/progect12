import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  onChangeById(worker){
    //если мы ничего не писали в поле при замене, то оно и не
    if (worker.name!=undefined&&worker.name!=""){
      this.workers[worker.id-1].name=worker.name;
    }
    if (worker.surname!=undefined&&worker.surname!=""){
      this.workers[worker.id-1].surname=worker.surname;
    }
    if (worker.telephone!=undefined&&worker.telephone!=""){
      this.workers[worker.id-1].telephone=worker.telephone;
    }

  }

  onAddWorker(worker) {
    let id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
    this.workers.push(worker);
  }
}
