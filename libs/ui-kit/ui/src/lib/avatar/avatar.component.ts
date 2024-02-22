import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ContentChild,
  input,
} from '@angular/core';
import { cn } from '@sng/ui-kit/util';
import { ClassValue } from 'clsx';

import { AvatarImageDirective } from './avatar-image/avatar-image.directive';

@Component({
  standalone: true,
  selector: 'sng-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (image?.hasLoaded()) {
    <ng-content select="img[sngAvatarImage]" />
    } @else {
    <ng-content select="[sngAvatarFallback]" />
    }
  `,
  host: { '[class]': 'computedClass()' },
})
export class AvatarComponent {
  @ContentChild(AvatarImageDirective, { static: true })
  protected readonly image: AvatarImageDirective | null = null;

  class = input<ClassValue>();

  protected computedClass = computed(() =>
    cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      this.class()
    )
  );
}
