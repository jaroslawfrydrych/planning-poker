import { Subject } from 'rxjs';

const destroyMethodName = 'ngOnDestroy';

export function TakeUntilDestroy(): any {
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
