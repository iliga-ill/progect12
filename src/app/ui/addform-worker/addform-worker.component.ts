import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})

export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {}

  onAddWorker() {
    //если попробовать отправить пустой текст со старта программы, то приходит undefined,
    //а если что-то написать и удалить, то просто пустой текст "" gfg;
    if (this.name==undefined||this.name==""||this.surname==undefined||this.surname==""){
      alert("Заполните все поля");
    }else{
      this.addWorker.emit({
        name: this.name,
       surname: this.surname,
        type: this.type,
     });
    }
  }
}
