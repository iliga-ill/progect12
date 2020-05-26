import { Pipe, PipeTransform } from '@angular/core';
import { MyWorker } from '../worker.model';
import { AgeService } from '../age.service';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  res:number = 1;

  transform(workerList, searchStr1,filterID,filterAge){
      let res=this.sort(workerList);
      let searchStr=this.sort(searchStr1)

    	if (searchStr.id != null&&searchStr.id != ""){
        res = res.filter(
          function (element){
            return element.id.toString().indexOf(searchStr.id.toString())==0;
          }); 
      }

      if (searchStr.name != null&&searchStr.name != ""){
        res = res.filter(
          function (element){
            return element.name.indexOf(searchStr.name)==0;
          }); 
      }

      if (searchStr.surname != null&&searchStr.surname != ""){
        res = res.filter(
          function (element){
            return element.surname.indexOf(searchStr.surname)==0;
          }); 
      }

      if (searchStr.patronimic != null&&searchStr.patronimic != ""){
        res = res.filter(
          function (element){
            return element.patronimic.indexOf(searchStr.patronimic)==0;
          }); 
      }

      let data=new Date();
      if (searchStr.date != null&&searchStr.date != ""){
        res = res.filter(
          function (element){
            let age=new AgeService();
            return age.age(element.date)==searchStr.date;
          }); 
      }

      if (searchStr.email != null&&searchStr.email != ""){
        res = res.filter(
          function (element){
            return element.email.indexOf(searchStr.email)==0;
          }); 
      }

      if (searchStr.telephone != null&&searchStr.telephone != ""){
        res = res.filter(
          function (element){
            return element.telephone.indexOf(searchStr.telephone)==0;
          }); 
      }

      res=this.filterID(res,filterID);
      res=this.filterAge(res,filterAge);
      
      return res;
  }

  sort(searchStr){
    if ((searchStr.name!=null)&&(searchStr.name.search(" ")!=-1)){
      let bufer=searchStr.name.slice(searchStr.name.search(" ")+1,searchStr.name.length);
      searchStr.name=searchStr.name.slice(0,searchStr.name.search(" "))
      searchStr.surname=bufer;
    }
  return searchStr
  }

  filterID(workerList,filterID){
  let res=workerList
  if (filterID == 1) {
    res.sort(function(a,b){
      return a.id - b.id
    })
  }
  if (filterID == 2){
    res.sort(function(a,b){
      return b.id - a.id
    })
  }
  return res;
  }

  filterAge(workerList,filterAge){
  let res: MyWorker[]=workerList;
  if (filterAge == 1) {
    res.sort(function(a,b){
      let age=new AgeService();
      return age.age(a.date)-age.age(b.date);
    })
  }
  if (filterAge == 2) {
    res.sort(function(a,b){
      let age=new AgeService();
      return age.age(b.date)-age.age(a.date);
    })
  }
  return res;
  }



}
