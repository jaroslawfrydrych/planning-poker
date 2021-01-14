import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[haxitInsertionPoint]'
})
export class InsertionPointDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
