// Props for TextInput component
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// Structure for text statistics
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

// Props for StatsDisplay component
export interface StatsDisplayProps {
  stats: TextStats;
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
  showReadingTime?: boolean;
}

// Props for CharacterCounter component
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}
