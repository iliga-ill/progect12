import { Component } from '@angular/core';
import {
  MyWorker,
  MyWorkerType,
} from './shared/worker.model';
import { WorkerService } from './shared/worker.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';


interface searchStr {
  id:string;
  name:string;
  surname:string;
  telephone:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[]=[];
  myWorkerType = MyWorkerType;
  searchStr: FormGroup;

  /*
    { "id": 1, "name": "Иван", "surname": "Иванов","telephone": "+7(917) 448-2028", "type": 0 },
    { "id": 2, "name": "Петр", "surname": "Петров","telephone": "+7(917) 448-2028", "type": 1 },
    { "id": 3, "name": "Сидор", "surname": "Сидоров","telephone": "+7(917) 448-2028", "type": 2 },
    { "id": 4, "name": "Василий", "surname": "Васильев","telephone": "+7(917) 448-2028", "type": 3 }
  */

  constructor(public worker:WorkerService){
    this.searchStr = new FormGroup({
      id: new FormControl(null,[Validators.required]),
      name: new FormControl(null,[Validators.required]),
      surname: new FormControl(null,[Validators.required]),
      telephone: new FormControl(null,[Validators.required])
    });
    this.getData();
  }

  async getData() {
    try {
      this.workers = await this.worker.getData();
    } catch (error) {
      console.log(error)
    }
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  async onDeleteById(id: number) {
    try {
      await this.worker.onDeleteById(id);
      this.getData();
    } catch (error) {
      console.log(error);
    }
    
  }

  async onChangeById(worker){
    try {
      await this.worker.changeWorker(worker);
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }

  async onAddWorker(worker) {
    let id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    worker.id = id;
    try {
      await this.worker.onAddWorker(worker);
      this.getData();
    } catch (error) {
      console.log(error);
    }
  }
}
