/* eslint-disable @angular-eslint/no-host-metadata-property */
import { computed, Directive, input } from '@angular/core';
import { cn } from '@shadcn-ng/ui-kit/util';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

@Directive({
  standalone: true,
  selector: 'button[shadcnNgBtn],a[shadcnNgBtn]',
  host: { '[class]': 'computedClass()' },
})
export class ButtonDirective {
  class = input<ClassValue>();
  size = input<ButtonVariants['size']>('default');
  variant = input<ButtonVariants['variant']>('default');

  protected computedClass = computed(() =>
    cn(
      buttonVariants({
        size: this.size(),
        variant: this.variant(),
      }),
      this.class()
    )
  );
}

type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
