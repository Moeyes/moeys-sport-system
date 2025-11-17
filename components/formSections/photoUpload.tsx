'use client'

import { useState } from 'react'
import { FormData, FormErrors, OnFieldChange } from '@/types'
import { SectionHeader } from '@/components/common'

interface PhotoUploadSectionProps {
  formData: FormData
  handleChange: OnFieldChange
  errors: FormErrors
}

export function PhotoUploadSection({ formData, handleChange, errors }: PhotoUploadSectionProps) {
  const [isDragActive, setIsDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true)
    } else if (e.type === 'dragleave') {
      setIsDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)
    const files = e.dataTransfer.files
    if (files && files[0]) {
      handleChange('photoUpload', files[0])
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleChange('photoUpload', e.target.files[0])
    }
  }

  return (
    <section className="pb-6 border-b border-border">
      <SectionHeader title="Photo Upload" description="Add a profile photo (optional)" />

      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition ${
          isDragActive ? 'border-primary bg-primary/5' : 'border-border bg-muted/30 hover:border-primary/50'
        }`}
      >
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-3xl">📸</span>
          </div>
        </div>
        <p className="text-foreground font-medium mb-1">Drag and drop your photo here, or click to select</p>
        <p className="text-sm text-muted-foreground mb-4">Supported formats: JPG, PNG, GIF (max 5MB)</p>
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          id="photo-upload"
          onChange={handleFileSelect}
        />
        <label
          htmlFor="photo-upload"
          className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium cursor-pointer hover:opacity-90 transition"
        >
          Choose File
        </label>
        {formData.photoUpload && (
          <p className="text-sm text-green-600 mt-2">✓ {formData.photoUpload.name}</p>
        )}
        {errors.photoUpload && <p className="text-xs text-destructive mt-2">{errors.photoUpload}</p>}
      </div>
    </section>
  )
}
