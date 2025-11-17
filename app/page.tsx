'use client'

import { useState } from 'react'
import Header from '@/components/header'
import RegistrationForm from '@/components/registrationForm'
import { RegistrationType } from '@/types'

export default function Home() {
  const [registrationType, setRegistrationType] = useState<RegistrationType>('player')

  return (
    <div className="min-h-screen bg-background">
      <Header
        onRegistrationTypeChange={setRegistrationType}
        currentType={registrationType}
      />
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <RegistrationForm registrationType={registrationType} />
      </main>
    </div>
  )
}
