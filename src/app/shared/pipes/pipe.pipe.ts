import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  res:number = 1;

  transform(workerList, searchStr){
      let res=workerList;
      //console.log(workerList);
      //console.log(workerList[0].id);
    	if (searchStr.id != null&&searchStr.id != ""){
        res = res.filter(
          function (element){
            return element.id == searchStr.id;
          }); 
      }

      if (searchStr.name != null&&searchStr.name != ""){
        res = res.filter(
          function (element){
            return element.name == searchStr.name;
          }); 
      }

      if (searchStr.surname != null&&searchStr.surname != ""){
        res = res.filter(
          function (element){
            return element.surname == searchStr.surname;
          }); 
      }

      if (searchStr.telephone != null&&searchStr.telephone != ""){
        res = res.filter(
          function (element){
            return element.telephone == searchStr.telephone;
          }); 
      }

      return res;
  }


}
