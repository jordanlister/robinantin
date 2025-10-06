import { cn } from '@/lib/utils'

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium uppercase tracking-wider',
        'bg-champagne/10 text-champagne border border-champagne/20',
        'transition-colors duration-180',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
