export const formUtils = {
  getFieldError: (errors: Record<string, string>, field: string): string | undefined => {
    return errors[field]
  },

  hasError: (errors: Record<string, string>, field: string): boolean => {
    return !!errors[field]
  },

  clearFieldError: (errors: Record<string, string>, field: string): Record<string, string> => {
    const newErrors = { ...errors }
    delete newErrors[field]
    return newErrors
  },

  validateForm: (formData: any, validationRules: Record<string, (value: any) => string | null>): Record<string, string> => {
    const errors: Record<string, string> = {}
    Object.entries(validationRules).forEach(([field, validator]) => {
      const error = validator(formData[field])
      if (error) errors[field] = error
    })
    return errors
  },
}
