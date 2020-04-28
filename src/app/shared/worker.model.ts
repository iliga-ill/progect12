import { summaryForJitFileName } from '@angular/compiler/src/aot/util';

export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  telephone: string;
  type: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов',telephone: '+7(917) 448-2028', type: 0 },
  { id: 2, name: 'Петр', surname: 'Петров',telephone: '+7(917) 448-2028', type: 1 },
  { id: 3, name: 'Сидор', surname: 'Сидоров',telephone: '+7(917) 448-2028', type: 2 },
  { id: 4, name: 'Василий', surname: 'Васильев',telephone: '+7(917) 448-2028', type: 3 },
];