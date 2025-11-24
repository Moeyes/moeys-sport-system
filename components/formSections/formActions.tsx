interface FormActionsProps {
  handleReset: () => void
  isSubmitting?: boolean
}

export function FormActions({ handleReset, isSubmitting }: FormActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Registration'}
      </button>
      <button
        type="reset"
        onClick={handleReset}
        className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition"
      >
        Reset Form
      </button>
    </div>
  )
}
