import { Component, OnInit } from '@angular/core';
import { 
  MyWorker,
  MyWorkerType
} from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkerService } from 'src/app/shared/worker.service';


interface searchStr {
  id: number;
  name: string;
  surname: string;
  patronimic:string;
  date:number;
  email:string;
  telephone: string;
  type: number;
}

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent {

  title = 'Список сотрудников';
  workers: MyWorker[]=[];
  myWorkerType = MyWorkerType;
  searchStr: FormGroup;
  workerType1=true;
  workerType2=true;
  workerType3=true;
  workerType4=true;
  searchMode=true;
  workerType6=1;
  workerType7=0;


  constructor(public worker:WorkerService){
    this.searchStr = new FormGroup({
      id: new FormControl(null,[Validators.required]),
      name: new FormControl(null,[Validators.required]),
      surname: new FormControl(null,[Validators.required]),
      patronimic: new FormControl(null,[Validators.required]),
      date: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required]),
      telephone: new FormControl(null,[Validators.required]),
    });
    this.getData();  
  }

  onButton(id){
    if      (id==1){this.workerType1=!this.workerType1}
    else if (id==2){this.workerType2=!this.workerType2}
    else if (id==3){this.workerType3=!this.workerType3}
    else if (id==4){this.workerType4=!this.workerType4}
    else if (id==5){
      this.searchStr.reset();
      this.searchMode =!this.searchMode
     }
    else if (id==6){
      this.workerType7=0;
      if(this.workerType6<2){this.workerType6++}
      else{this.workerType6=1}
    }
    else if (id==7){
      this.workerType6=0;
      if(this.workerType7<2){this.workerType7++}
      else{this.workerType7=0
           this.workerType6=1}
    }
  }

  ButtonController(id){
    if      (id==1){return this.workerType1}
    else if (id==2){return this.workerType2}
    else if (id==3){return this.workerType3}
    else if (id==4){return this.workerType4}
    else if (id==5){return this.searchMode}
    else if (id==6){return this.workerType6}
    else if (id==7){return this.workerType7}
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

  getList(){
    let res=this.workers;
    if (this.workerType1!=true){res=res.filter((worker) => worker.type != 0);}
    if (this.workerType2!=true){res=res.filter((worker) => worker.type != 1);}
    if (this.workerType3!=true){res=res.filter((worker) => worker.type != 2);}
    if (this.workerType4!=true){res=res.filter((worker) => worker.type != 3);}
    return res;
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
