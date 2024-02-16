import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { cn } from '@sng/ui-kit/util';
import { ClassValue } from 'clsx';

@Component({
  standalone: true,
  selector: 'sng-aspect-ratio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="absolute w-full inset-0">
      <ng-content />
    </div>
  `,
  host: {
    '[class]': 'computedClass()',
    '[style.padding-bottom.%]': 'computedPaddingBottom()',
  },
})
export class AspectRatioComponent implements AfterViewInit {
  class = input<ClassValue>();
  ratio = input.required<number>();

  private readonly nativeElement: HTMLElement =
    inject(ElementRef).nativeElement;

  protected computedClass = computed(() =>
    cn(`block relative w-full`, this.class())
  );

  protected computedPaddingBottom = computed(() => 100 / this.ratio());

  ngAfterViewInit(): void {
    const absoluteDiv = this.nativeElement.firstElementChild; // account for the div in the template

    // add full width and height to div's first element child
    absoluteDiv?.firstElementChild?.classList.add('w-full', 'h-full');
  }
}
