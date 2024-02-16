/* eslint-disable @angular-eslint/no-host-metadata-property */
import { computed, Directive, input } from '@angular/core';
import { cn } from '@sng/ui-kit/util';
import { ClassValue } from 'clsx';

@Directive({
  standalone: true,
  selector: '[sngAvatarFallback]',
  host: { '[class]': 'computedClass()' },
})
export class AvatarFallbackDirective {
  class = input<ClassValue>();

  protected computedClass = computed(() =>
    cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      this.class()
    )
  );
}
