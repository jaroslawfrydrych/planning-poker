import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'haxit-text-fixed-width',
  templateUrl: './text-fixed-width.component.html',
  styleUrls: ['./text-fixed-width.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFixedWidthComponent {

  @HostBinding('class.text-fixed-width') public textFixedWidthElementClass = true;
  public valueSubject$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public value$: Observable<string[]> = this.valueSubject$.asObservable();

  @Input()
  public set value(value: string) {
    this.valueSubject$.next(value.split(''));
  }
}
