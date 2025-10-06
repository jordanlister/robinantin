import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-240 ease-smooth disabled:pointer-events-none disabled:opacity-50 font-body touch-manipulation',
  {
    variants: {
      variant: {
        primary:
          'bg-white-warm text-black-deep hover:bg-champagne hover:text-black-deep active:bg-champagne active:text-black-deep border border-white-warm hover:border-champagne',
        subtle:
          'bg-transparent text-white-warm hover:bg-champagne hover:text-black-deep active:bg-champagne active:text-black-deep border border-white-warm/50 hover:border-champagne',
        inverse:
          'bg-black-deep text-white-warm hover:bg-black-soft hover:text-white-warm active:bg-black-soft active:text-white-warm border border-black-deep hover:border-black-soft',
        link: 'bg-transparent text-foreground hover:text-champagne active:text-champagne link-hover p-0 h-auto',
      },
      size: {
        sm: 'min-h-[44px] px-4 text-sm',
        md: 'min-h-[44px] px-6 text-base',
        lg: 'min-h-[48px] px-8 text-base md:text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
