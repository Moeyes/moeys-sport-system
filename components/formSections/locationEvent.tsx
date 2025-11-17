import { FormData, FormErrors, OnFieldChange } from '@/types'
import { FormSelect, SectionHeader } from '@/components/common'
import { PROVINCES, DEPARTMENTS, EVENT_TYPES } from '@/lib/constants'

interface LocationEventSectionProps {
  formData: FormData
  handleChange: OnFieldChange
  errors: FormErrors
}

export function LocationEventSection({ formData, handleChange, errors }: LocationEventSectionProps) {
  return (
    <section>
      <SectionHeader
        title="Location & Event"
        description="Select your location and the event you are registering for"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormSelect
          label="Province"
          value={formData.province || ''}
          onChange={(value) => {
            handleChange('province', value)
            if (value) handleChange('department', null) // Clear department when province is selected
          }}
          options={PROVINCES}
          required
          error={errors.province}
          disabled={!!formData.department} // Disable if department is selected
        />
        <FormSelect
          label="Department"
          value={formData.department || ''}
          onChange={(value) => {
            handleChange('department', value)
            if (value) handleChange('province', null) // Clear province when department is selected
          }}
          options={DEPARTMENTS}
          required
          error={errors.department}
          disabled={!!formData.province} // Disable if province is selected
        />
        <FormSelect
          label="Event Type"
          value={formData.eventType || ''}
          onChange={(value) => handleChange('eventType', value)}
          options={EVENT_TYPES}
          required
          error={errors.eventType}
        />
      </div>
    </section>
  )
}
