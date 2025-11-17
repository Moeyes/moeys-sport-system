export const PROVINCES = [
  { value: 'Phnom Penh', label: 'Phnom Penh' },
  { value: 'Banteay Meanchey', label: 'Banteay Meanchey' },
  { value: 'Battambang', label: 'Battambang' },
  { value: 'Kampong Cham', label: 'Kampong Cham' },
  { value: 'Kampong Chhnang', label: 'Kampong Chhnang' },
  { value: 'Kampong Speu', label: 'Kampong Speu' },
  { value: 'Kampong Thom', label: 'Kampong Thom' },
  { value: 'Kampot', label: 'Kampot' },
  { value: 'Kandal', label: 'Kandal' },
  { value: 'Kep', label: 'Kep' },
  { value: 'Koh Kong', label: 'Koh Kong' },
  { value: 'Kratie', label: 'Kratie' },
  { value: 'Mondulkiri', label: 'Mondulkiri' },
  { value: 'Oddar Meanchey', label: 'Oddar Meanchey' },
  { value: 'Pailin', label: 'Pailin' },
  { value: 'Preah Vihear', label: 'Preah Vihear' },
  { value: 'Prey Veng', label: 'Prey Veng' },
  { value: 'Pursat', label: 'Pursat' },
  { value: 'Ratanakiri', label: 'Ratanakiri' },
  { value: 'Siem Reap', label: 'Siem Reap' },
  { value: 'Preah Sihanouk', label: 'Preah Sihanouk' },
  { value: 'Stung Treng', label: 'Stung Treng' },
  { value: 'Svay Rieng', label: 'Svay Rieng' },
  { value: 'Takeo', label: 'Takeo' },
  { value: 'Tbong Khmum', label: 'Tbong Khmum' }
]

export const DEPARTMENTS = [
  { value: 'Department 1', label: 'Department 1' },
  { value: 'Department 2', label: 'Department 2' },
  { value: 'Department 3', label: 'Department 3' },
]

export const EVENT_TYPES = [
  { value: 'Event Type 1', label: 'Event Type 1' },
  { value: 'Event Type 2', label: 'Event Type 2' },
  { value: 'Event Type 3', label: 'Event Type 3' },
]

export const POSITIONS = [
  { value: 'player', label: 'Player' },
  { value: 'coach', label: 'Coach' },
  { value: 'manager', label: 'Manager' },
  { value: 'referee', label: 'Referee' },
]

export const SPORT_CATEGORIES = [
  { id: 'traditional', name: 'Traditional Cambodian Sports & Games' },
  { id: 'ball', name: 'Ball Games' },
  { id: 'martial', name: 'Martial Arts & Combat Sports' },
  { id: 'athletics', name: 'Athletics & Outdoor Sports' },
  { id: 'indoor', name: 'Indoor & Recreational Sports' },
]

export const SPORTS = [
  // Traditional Cambodian Sports & Games
  { value: 'chol-chhoung', label: 'Chol Chhoung', category: 'Traditional Cambodian Sports & Games' },
  { value: 'leak-kanseng', label: 'Leak Kanseng', category: 'Traditional Cambodian Sports & Games' },
  { value: 'teanh-prot', label: 'Teanh Prot', category: 'Traditional Cambodian Sports & Games' },
  { value: 'bos-angkunh', label: 'Bos Angkunh', category: 'Traditional Cambodian Sports & Games' },
  { value: 'bay-khom', label: 'Bay Khom', category: 'Traditional Cambodian Sports & Games' },
  { value: 'ouk-chatrang', label: 'Ouk Chatrang (Khmer Chess)', category: 'Traditional Cambodian Sports & Games' },
  { value: 'klah-klok', label: 'Klah Klok', category: 'Traditional Cambodian Sports & Games' },

  // Ball Games
  { value: 'football', label: 'Football', category: 'Ball Games' },
  { value: 'volleyball', label: 'Volleyball', category: 'Ball Games' },
  { value: 'basketball', label: 'Basketball', category: 'Ball Games' },
  { value: 'petanque', label: 'Petanque', category: 'Ball Games' },
  { value: 'sepak-takraw', label: 'Sepak Takraw', category: 'Ball Games' },
  { value: 'table-tennis-ball', label: 'Table Tennis', category: 'Ball Games' },
  { value: 'handball', label: 'Handball', category: 'Ball Games' },

  // Martial Arts & Combat Sports
  { value: 'bokator', label: 'Bokator', category: 'Martial Arts & Combat Sports' },
  { value: 'kun-khmer', label: 'Kun Khmer', category: 'Martial Arts & Combat Sports' },
  { value: 'taekwondo', label: 'Taekwondo', category: 'Martial Arts & Combat Sports' },
  { value: 'karate', label: 'Karate', category: 'Martial Arts & Combat Sports' },
  { value: 'judo', label: 'Judo', category: 'Martial Arts & Combat Sports' },
  { value: 'wrestling', label: 'Wrestling', category: 'Martial Arts & Combat Sports' },

  // Athletics & Outdoor Sports
  { value: 'running', label: 'Running', category: 'Athletics & Outdoor Sports' },
  { value: 'cycling', label: 'Cycling', category: 'Athletics & Outdoor Sports' },
  { value: 'swimming', label: 'Swimming', category: 'Athletics & Outdoor Sports' },
  { value: 'badminton-outdoor', label: 'Badminton (Outdoor)', category: 'Athletics & Outdoor Sports' },
  { value: 'hiking', label: 'Hiking', category: 'Athletics & Outdoor Sports' },
  { value: 'archery', label: 'Archery', category: 'Athletics & Outdoor Sports' },
  { value: 'boat-racing', label: 'Boat Racing', category: 'Athletics & Outdoor Sports' },
  { value: 'tennis', label: 'Tennis', category: 'Athletics & Outdoor Sports' },
  { value: 'golf', label: 'Golf', category: 'Athletics & Outdoor Sports' },

  // Indoor & Recreational Sports
  { value: 'badminton-indoor', label: 'Badminton (Indoor)', category: 'Indoor & Recreational Sports' },
  { value: 'table-tennis-indoor', label: 'Table Tennis', category: 'Indoor & Recreational Sports' },
  { value: 'bowling', label: 'Bowling', category: 'Indoor & Recreational Sports' },
  { value: 'chess', label: 'Chess', category: 'Indoor & Recreational Sports' },
  { value: 'billiards', label: 'Billiards', category: 'Indoor & Recreational Sports' },
  { value: 'e-sports', label: 'E-sports', category: 'Indoor & Recreational Sports' },
  { value: 'gym-fitness', label: 'Gym & Fitness', category: 'Indoor & Recreational Sports' },
  { value: 'yoga', label: 'Yoga', category: 'Indoor & Recreational Sports' },
  { value: 'dance-fitness', label: 'Dance Fitness', category: 'Indoor & Recreational Sports' },
  { value: 'indoor-climbing', label: 'Indoor Climbing', category: 'Indoor & Recreational Sports' },
]

// Note: sportsByCategory is now deprecated, use SPORTS array with category property instead
export const sportsByCategory: Record<string, string[]> = {
  'Traditional Cambodian Sports & Games': ['Chol Chhoung', 'Leak Kanseng', 'Teanh Prot', 'Bos Angkunh', 'Bay Khom', 'Ouk Chatrang (Khmer Chess)', 'Klah Klok'],
  'Ball Games': ['Football', 'Volleyball', 'Basketball', 'Petanque', 'Sepak Takraw', 'Table Tennis', 'Handball'],
  'Martial Arts & Combat Sports': ['Bokator', 'Kun Khmer', 'Taekwondo', 'Karate', 'Judo', 'Wrestling', 'Muay Thai'],
  'Athletics & Outdoor Sports': ['Running', 'Cycling', 'Swimming', 'Badminton (Outdoor)', 'Hiking', 'Archery', 'Boat Racing', 'Tennis', 'Golf'],
  'Indoor & Recreational Sports': ['Badminton (Indoor)', 'Table Tennis', 'Bowling', 'Chess', 'Billiards', 'E-sports', 'Gym & Fitness', 'Yoga', 'Dance Fitness', 'Indoor Climbing'],
}

export const HEADER_BUTTONS = [
  { id: 'leader', label: 'Register as Leader', variant: 'outline' as const },
  { id: 'player', label: 'Register as Player', variant: 'primary' as const },
]

export const LANGUAGES = [
  { code: 'kh', label: 'ភាសាខ្មែរ' },
  { code: 'en', label: 'English' },
]
