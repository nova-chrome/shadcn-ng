import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '@sng/ui-kit/util';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

@Component({
  standalone: true,
  selector: 'sng-alert',
  template: `
    <ng-content select="ng-icon" />
    <ng-content select="sng-alert-title" />
    <ng-content select="sng-alert-description" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'computedClass()' },
})
export class AlertComponent {
  class = input<ClassValue>();
  variant = input<AlertVariants['variant']>('default');

  protected computedClass = computed(() =>
    cn(
      alertVariants({
        variant: this.variant(),
      }),
      this.class()
    )
  );
}

type AlertVariants = VariantProps<typeof alertVariants>;

const alertVariants = cva(
  'relative flex flex-col w-full rounded-lg border p-4 [&>ng-icon]:absolute [&>ng-icon]:text-foreground [&>ng-icon]:left-4 [&>ng-icon]:top-4 [&>ng-icon+div]:translate-y-[-3px] [&:has(ng-icon)]:pl-11',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>ng-icon]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
