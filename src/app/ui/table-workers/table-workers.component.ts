import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';
import { ElementFinder } from 'protractor';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { worker } from 'cluster';

//отключение кнопки при неправильном заполнении

interface ChangeForm {
  name:string;
  surname:string;
  telephone?:string[];
}

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})

export class TableWorkersComponent {
  @Input() title: string;
  @Input() workers: MyWorker[] = [];

  numb=0;
  lastId;
  ChangeName;
  ChangeSurname;
  CangeTelephone;

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() changeWorker = new EventEmitter();


  ChangeForm: FormGroup;
  users: ChangeForm[]=[];

  constructor() {
  this.ChangeForm = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    surname: new FormControl(null,[Validators.required]),
    telephone: new FormControl(null,[Validators.required])
  });
  }


  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  /**
   * при нажатии на кнопку "редактировать", id которой не соответствует id предыдущей нажатой кнопки,
   * меняет переменную lastId, в зависимости от которой меняется отображение имени и фамилии строчки  
   * с данным id на input, после чего, при повторном нажатии данной кнопки введенные данные emit-ом 
   * передаются в корневой компонент, где присваиваются эл-ту массива.
   */

  onChangeWorker(id: number,worker:any) {
    if (id!=this.lastId){
      this.numb=0;
      this.lastId=id;
    }

    if (this.numb==0){
      this.ChangeName=this.workers[this.workers.findIndex((worker) => worker.id === id)].name;
      this.ChangeSurname=this.workers[this.workers.findIndex((worker)=> worker.id === id)].surname;
      this.CangeTelephone=this.workers[this.workers.findIndex((worker)=> worker.id === id)].telephone
      this.numb+=1;
    }else if(this.numb==1){
      let push:MyWorker=this.ChangeForm.value;
      push.id=id;
      push.type=worker.type;
      this.changeWorker.emit(push);
      this.ChangeForm.reset();
      this.lastId=null;
      this.ChangeName=null;
      this.ChangeSurname=null;
    }
  }
}
