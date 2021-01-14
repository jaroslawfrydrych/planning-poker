import { Observable, Subject } from 'rxjs';

export class ModalBase<T> {
  public close$: Observable<boolean>
  public modalData: T;
  private closeSubject$: Subject<boolean>;

  constructor() {
    this.closeSubject$ = new Subject<boolean>();
    this.close$ = this.closeSubject$.asObservable();
  }

  public close(result?: boolean): void {
    this.closeSubject$.next(result);
  }
}
