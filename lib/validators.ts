import type { FormData, FormErrors } from '@/types'
import { PROVINCES, DEPARTMENTS, EVENT_TYPES, POSITIONS, SPORTS } from './constants'

const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/
const numericRegex = /^[0-9]+$/

export function validateForm(
  data: FormData,
  registrationType?: 'leader' | 'player'
): FormErrors {
  const errors: FormErrors = {}

  // Event Type validation
  if (!data.eventType) {
    errors.eventType = 'Please select the event type.'
  } else if (!EVENT_TYPES.some(et => et.value === data.eventType)) {
    errors.eventType = 'Please select a valid event type.'
  }

  // First & Last Name validation
  if (!data.firstName.trim()) {
    errors.firstName = 'First name is required.'
  }
  if (!data.lastName.trim()) {
    errors.lastName = 'Last name is required.'
  }

  // Position validation based on registration type
  if (registrationType === 'player') {
    if (data.position !== 'player') {
      errors.position = 'Position must be set to Player.'
    }
  } else {
    if (!data.position) {
      errors.position = 'Please choose your position level.'
    } else if (data.position === 'player') {
      errors.position = 'Coaches and leaders cannot select Player as position.'
    } else if (!POSITIONS.some(pos => pos.value === data.position)) {
      errors.position = 'Please select a valid position.'
    }
  }

  // Province & Department validation: only one allowed, at least one required
  if (!data.province && !data.department) {
    errors.province = 'Please select a province or department.'
    errors.department = 'Please select a province or department.'
  } else if (data.province && data.department) {
    errors.province = 'You can only choose one.'
    errors.department = 'You can only choose one.'
  } else if (data.province && !PROVINCES.some(p => p.value === data.province)) {
    errors.province = 'Please select a valid province.'
  } else if (data.department && !DEPARTMENTS.some(d => d.value === data.department)) {
    errors.department = 'Please select a valid department.'
  }

  // National ID: numeric, reasonable length
  if (!data.nationalID.trim()) {
    errors.nationalID = 'National ID is required.'
  } else if (!numericRegex.test(data.nationalID)) {
    errors.nationalID = 'National ID should contain digits only.'
  } else if (data.nationalID.length < 6 || data.nationalID.length > 20) {
    errors.nationalID = 'National ID must be between 6 and 20 digits.'
  }

  // Phone validation
  if (!data.phoneNumber.trim()) {
    errors.phoneNumber = 'Phone number is required.'
  } else if (!phoneRegex.test(data.phoneNumber)) {
    errors.phoneNumber = 'Enter a valid phone number (7–15 digits).'
  }

  // Date of Birth validation
  if (!data.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required.'
  } else {
    const today = new Date()
    const dobDate = new Date(data.dateOfBirth)
    if (isNaN(dobDate.getTime())) {
      errors.dateOfBirth = 'Enter a valid date.'
    } else if (dobDate > today) {
      errors.dateOfBirth = 'Date of birth cannot be in the future.'
    }
  }

  // Sports selection validation
  if (!data.typeOfSport) {
    errors.typeOfSport = 'Please select a sport category.'
  }
  if (data.typeOfSport && (!data.selectedSport || data.selectedSport.trim() === '')) {
    errors.selectedSport = 'Please select a sport.'
  }
  if (
    data.typeOfSport &&
    data.selectedSport &&
    data.selectedSport.trim() !== '' &&
    !SPORTS.some(sport => sport.value === data.selectedSport && sport.category === data.typeOfSport)
  ) {
    errors.selectedSport = 'Selected sport does not match the chosen category.'
  }

  // Photo upload: optional, but if present must be an image and <= 2MB
  if (data.photoUpload) {
    const file = data.photoUpload
    const isImage = file.type.startsWith('image/')
    const maxSize = 2 * 1024 * 1024 // 2MB
    if (!isImage) {
      errors.photoUpload = 'Only image files are allowed (JPG, PNG, etc.).'
    } else if (file.size > maxSize) {
      errors.photoUpload = 'Image must be 2MB or smaller.'
    }
  }

  return errors
}
