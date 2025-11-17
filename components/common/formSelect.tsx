import { FormSelectProps } from '@/types'
import { cn } from '@/lib/utils'

export function FormSelect({
  label,
  value,
  onChange,
  options,
  required,
  error,
  disabled,
}: FormSelectProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-foreground mb-2">
        {label}
        {required && <span className="text-accent">*</span>}
      </label>
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value === '' ? null : e.target.value)}
        disabled={disabled}
        className={cn(
          'w-full px-4 py-3 rounded-lg border bg-background text-foreground transition',
          'focus:ring-2 focus:ring-primary focus:border-primary',
          error ? 'border-destructive focus:ring-destructive' : 'border-border',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  )
}
