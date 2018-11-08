import { Directive, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { LoadingComponent } from '../_components';

@Directive({
  selector: '[blogLoading], [ngIfWithLoading]'
})
export class LoadingDirective {
  @Input() set ngIf(val: any) {
    if (!val) {
      const factory =
        this.resolver.resolveComponentFactory(LoadingComponent);
      this.vcRef.createComponent(factory);
    }
  }

  constructor(
    private vcRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
  ) { }

}
