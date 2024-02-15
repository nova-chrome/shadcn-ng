/* eslint-disable @angular-eslint/no-host-metadata-property */
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { cn } from '@shadcn-ng/ui-kit/util';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

@Component({
  standalone: true,
  selector: 'shadcn-ng-badge',
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'computedClass()' },
})
export class BadgeComponent {
  class = input<ClassValue>();
  variant = input<BadgeVariants['variant']>('default');

  protected computedClass = computed(() =>
    cn(
      badgeVariants({
        variant: this.variant(),
      }),
      this.class()
    )
  );
}

export type BadgeVariants = VariantProps<typeof badgeVariants>;

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
