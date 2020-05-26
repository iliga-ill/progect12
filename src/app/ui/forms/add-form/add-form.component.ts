import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgeService } from 'src/app/shared/age.service';
import { WorkerService } from 'src/app/shared/worker.service';

interface ChangeForm {
  name:string;
  surname:string;
  date:string;
  type?:string;
  patronimic:string;
  email:string;
  telephone:string;
}

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  workers: MyWorker[]=[];

  type=0;

  ChangeForm: FormGroup;

  constructor(public worker:WorkerService) {
    this.ChangeForm = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    surname: new FormControl(null,[Validators.required]),
    date: new FormControl(null,[Validators.required]),
    patronimic: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required]),
    telephone: new FormControl(null,[Validators.required]),
  }); 
  this.getData();
  }

  ngOnInit(): void {}

  onAddWorker() {
    let age=new AgeService();
    if (age.isCorrect(this.ChangeForm.value.date)){
      let push=this.ChangeForm.value;
      push.type=this.type;
      this.addWorker(push);
      this.ChangeForm.reset();
    }else{
      alert("Дата рождения заполнена неверно");
    }
  }


  async addWorker(worker) {
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

  async getData() {
    try {
      this.workers = await this.worker.getData();
    } catch (error) {
      console.log(error)
    }
  }

}
