import {
  computed,
  Directive,
  HostListener,
  input,
  signal,
} from '@angular/core';
import { cn } from '@sng/ui-kit/util';
import { ClassValue } from 'clsx';

@Directive({
  standalone: true,
  selector: 'img[sngAvatarImage]',
  host: { '[class]': 'computedClass()' },
})
export class AvatarImageDirective {
  private readonly error = signal(false);
  private readonly loaded = signal(false);

  @HostListener('error')
  private onError() {
    this.error.set(true);
  }

  @HostListener('load')
  private onLoad() {
    this.loaded.set(true);
  }

  class = input<ClassValue>();
  hasLoaded = computed(() => this.loaded() && !this.error());

  protected computedClass = computed(() =>
    cn('aspect-square h-full w-full', this.class())
  );
}
