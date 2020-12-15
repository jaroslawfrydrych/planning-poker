import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const untilDestroyed: any = (that: any) => <T>(source: Observable<T>) => {
  if (!('destroyed$' in that)) {
    console.warn(`'destroyed$' property does not exist on ${that.constructor.name}`);
    return source;
  }
  return source.pipe(takeUntil<T>(that.destroyed$));
};
