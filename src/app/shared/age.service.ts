import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  constructor() { }

  age(Dr:String){
    let date=new Date;
    let year:number;
    let month:number;
    let day:number;
    let count=0;
    let i=-1;
    while (count!=2){
      i++;
      if (Dr.slice(i,i+1)=="/"){
        count++;
        if (count==1){day=parseInt(Dr.slice(0,i));}
        if (count==2){
          month=parseInt(Dr.slice(day.toString().length+1,i));
          year=parseInt(Dr.slice(i+1,i+5));
        }
      }
    }
    let age=date.getFullYear()-year;
    if (date.getMonth()+1<month){age--;}
    else if ((date.getMonth()+1==month)&&(date.getDate()<day)){age--;}
    return age
    }

  isCorrect(Dr){
    let date=new Date;
    let year:number;
    let month:number;
    let day:number;
    let count=0;
    let i=-1;
    while (count!=2){
      i++;
      if (Dr.slice(i,i+1)=="/"){
        count++;
        if (count==1){day=Dr.slice(0,i);}
        if (count==2){
          month=Dr.slice(day.toString().length+1,i);
          year=Dr.slice(i+1,i+5);
        }
      }
    }

    if ((year>=date.getFullYear())||(year<=date.getFullYear()-100)||(day>31||day<0)||(month>12||month<0)){
      return false
    } else {return true}

  }


}
