'use client'

import { useState } from 'react'
import { HeaderButton } from './headerButton'
import { RegistrationType } from '@/types'

interface BurgerMenuProps {
  className?: string
  onRegistrationTypeChange: (type: RegistrationType) => void
  currentType: RegistrationType
}

export function BurgerMenu({ className, onRegistrationTypeChange, currentType }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Burger Icon */}
      <button
        onClick={toggleMenu}
        className={`md:hidden p-2 rounded-lg hover:bg-muted transition-colors ${className}`}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={toggleMenu}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-card border-l border-border shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Menu Items */}
              <div className="mt-12 space-y-4">
                <div className="space-y-3">
                  <HeaderButton
                    variant={currentType === 'leader' ? 'primary' : 'outline'}
                    className="w-full justify-center"
                    onClick={() => {
                      onRegistrationTypeChange('leader')
                      setIsOpen(false)
                    }}
                  >
                    Register as Leader
                  </HeaderButton>
                  <HeaderButton
                    variant={currentType === 'player' ? 'primary' : 'outline'}
                    className="w-full justify-center"
                    onClick={() => {
                      onRegistrationTypeChange('player')
                      setIsOpen(false)
                    }}
                  >
                    Register as Player
                  </HeaderButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
