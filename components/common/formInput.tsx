import { FormInputProps } from '@/types'
import { cn } from '@/lib/utils'

export function FormInput({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
  error,
}: FormInputProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-foreground mb-2">
        {label}
        {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder-muted-foreground transition',
          'focus:ring-2 focus:ring-primary focus:border-primary',
          error ? 'border-destructive focus:ring-destructive' : 'border-border'
        )}
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  )
}
