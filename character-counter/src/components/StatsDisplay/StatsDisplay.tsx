import React from 'react';
import { StatsDisplayProps } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime = true }) => {
  return (
    <div className="mt-4 space-y-2">
      <p>Characters: {stats.characterCount}</p>
      <p>Words: {stats.wordCount}</p>
      {showReadingTime && <p>Reading Time: {stats.readingTime.toFixed(2)} min</p>}
    </div>
  );
};
