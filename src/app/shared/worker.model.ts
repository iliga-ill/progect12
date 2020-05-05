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