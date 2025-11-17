import { HeaderButtonProps } from '@/types'
import { cn } from '@/lib/utils'

export function HeaderButton({ variant = 'outline', onClick, children, className }: HeaderButtonProps) {
  const baseStyles = 'px-4 py-2 text-sm font-medium rounded-lg transition'

  const variantStyles = {
    outline: 'text-primary border border-primary hover:bg-primary/5',
    primary: 'text-white bg-primary hover:bg-primary/90',
  }

  return (
    <button className={cn(baseStyles, variantStyles[variant], className)} onClick={onClick}>
      {children}
    </button>
  )
}
