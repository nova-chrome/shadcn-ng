import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '@sng/ui-kit/util';
import { ClassValue } from 'clsx';

@Component({
  standalone: true,
  selector: 'sng-alert-description',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'computedClass()' },
})
export class AlertDescriptionComponent {
  class = input<ClassValue>();

  protected computedClass = computed(() =>
    cn('text-sm [&_p]:leading-relaxed', this.class())
  );
}
