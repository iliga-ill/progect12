import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


interface ChangeForm {
  name:string;
  surname:string;
  telephone:string;
  type:string;
}


@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})

export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;

  type=0;

  ChangeForm: FormGroup;
  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {
    this.ChangeForm = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    surname: new FormControl(null,[Validators.required]),
    telephone: new FormControl(null,[Validators.required])
  });}

  ngOnInit(): void {}

  onAddWorker() {
    //если попробовать отправить пустой текст со старта программы, то приходит undefined,
    //а если что-то написать и удалить, то просто пустой текст "";
    if (this.ChangeForm.value.name==undefined||this.ChangeForm.value.name==""||this.ChangeForm.value.surname==undefined||this.ChangeForm.value.surname==""){
      alert("Заполните все поля");
    }else{
      let push=this.ChangeForm.value;
      push.type=this.type;
      this.addWorker.emit(push);
      this.ChangeForm.reset();
    }
  }
}
