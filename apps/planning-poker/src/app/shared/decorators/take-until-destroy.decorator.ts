import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface OnDestroy {
  readonly destroyed$?: Observable<boolean>;

  ngOnDestroy(): void;
}

export function TakeUntilDestroy(destroyMethodName = 'ngOnDestroy') {
  return <T extends new (...args: any[]) => {}>(constructor: T) => {

    const originalDestroy = constructor.prototype[destroyMethodName];

    constructor.prototype[destroyMethodName] = function () {
      this.takeUntilDestroy$.next(true);
      this.takeUntilDestroy$.complete();

      if (originalDestroy) {
        originalDestroy.apply(this, arguments);
      }
    };

    return class extends constructor {
      takeUntilDestroy$: Subject<boolean> = new Subject();

      get destroyed$() {
        this.takeUntilDestroy$ = this.takeUntilDestroy$ || new Subject();
        return this.takeUntilDestroy$.asObservable();
      }
    };
  };
}

export const untilDestroyed = that => <T>(source: Observable<T>) => {
  if (!('destroyed$' in that)) {
    console.warn(`'destroyed$' property does not exist on ${that.constructor.name}`);
    return source;
  }
  return source.pipe(takeUntil<T>(that.destroyed$));
};
