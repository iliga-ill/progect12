import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker } from 'src/app/shared/worker.model';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css'],
})
export class TableWorkersComponent implements OnInit {
  @Input() title: string;
  @Input() workers: MyWorker[] = [];
  numb=0;
  lastId;
  ChangeName;
  ChangeSurname;

  @Output() deleteWorker = new EventEmitter<number>();
  @Output() changeWorker = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  /**
   * при нажатии на кнопку "редактировать", id которой не соответствует id предыдущей нажатой кнопки,
   * меняет переменную lastId, в зависимости от которой меняется отображение имени и фамилии строчки  
   * с данным id на input, после чего, при повторном нажатии данной кнопки введенные данные emit-ом 
   * передаются в корневой компонент, где присваиваются эл-ту массива.
   */
// 
  onChangeWorker(id: number) {
    if (id!=this.lastId){
      this.numb=0;
      this.lastId=id;
    }

    if (this.numb==0){
      this.ChangeName = this.workers[this.workers.findIndex((worker) => worker.id === id)].name 
      this.ChangeSurname = this.workers[this.workers.findIndex((worker)=> worker.id === id)].surname
      this.numb+=1;
    }else if(this.numb==1){
      this.changeWorker.emit([id,this.ChangeName,this.ChangeSurname]);
      this.lastId=null;
      this.ChangeName=null;
      this.ChangeSurname=null;
    }
  }
}
