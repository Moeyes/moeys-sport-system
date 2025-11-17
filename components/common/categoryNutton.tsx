import { cn } from '@/lib/utils'

interface CategoryButtonProps {
  // icon: string
  name: string
  isSelected: boolean
  onClick: () => void
}

export function CategoryButton({  name, isSelected, onClick }: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'relative p-4 rounded-lg border-2 transition',
        isSelected ? 'border-primary bg-primary/5' : 'border-border bg-background hover:border-primary/50'
      )}
    >
      {/* <div className="text-2xl mb-2">{icon}</div> */}
      <p className="text-xs font-medium text-foreground whitespace-pre-line leading-tight">{name}</p>
    </button>
  )
}
