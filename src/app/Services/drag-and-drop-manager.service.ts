import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DragAndDropManagerService {
  private list = new BehaviorSubject<string[]>([]);

  public onListChange = (): Observable<string[]> => this.list.asObservable();

  constructor() {}

  public register = (id: string) => {
    if (!id || this.list.value.includes(id)) {
      return;
    }
    this.list.next([...this.list.value, id]);
    console.log(this.list)
  };

  public unregister = (id: string) => {
    this.list.next(this.list.value.filter(x => x !== id));
    console.log(this.list)
  };
}
