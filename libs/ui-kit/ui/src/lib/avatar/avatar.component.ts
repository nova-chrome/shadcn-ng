/* eslint-disable @angular-eslint/no-host-metadata-property */
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ContentChild,
  input,
} from '@angular/core';
import { cn } from '@shadcn-ng/ui-kit/util';
import { ClassValue } from 'clsx';

import { AvatarImageDirective } from './avatar-image/avatar-image.directive';

@Component({
  standalone: true,
  selector: 'shadcn-ng-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (image?.hasLoaded()) {
    <ng-content select="img[shadcnNgAvatarImage]" />
    } @else {
    <ng-content select="[shadcnNgAvatarFallback]" />
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
