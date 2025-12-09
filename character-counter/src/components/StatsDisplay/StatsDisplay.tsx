import React from 'react';
import { StatsDisplayProps } from '../../types';

function formatReadingTime(minutes: number) {
  const m = Math.floor(minutes);
  const s = Math.round((minutes - m) * 60);
  const mm = String(m).padStart(1, '0');
  const ss = String(s).padStart(2, '0');
  return `${mm}:${ss}`;
}

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 5,
  showReadingTime = true
}) => {
  const progress = maxWords > 0 ? Math.min(100, Math.round((stats.wordCount / maxWords) * 100)) : 0;
  const withinRange = stats.wordCount >= minWords && stats.wordCount <= maxWords;

  return (
    <div className="mt-4 p-4 border rounded bg-gray-50">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">Characters</p>
          <p className="text-2xl font-semibold">{stats.characterCount}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Words</p>
          <p className="text-2xl font-semibold">{stats.wordCount}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-600">
        Min: {minWords} | Max: {maxWords} | Target Reading: {targetReadingTime} min
      </p>

      <div className="mt-3">
        <div className="w-full h-2 bg-gray-200 rounded">
          <div
            className={`h-2 rounded ${withinRange ? 'bg-green-500' : 'bg-blue-500'}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-gray-600">Progress: {progress}%</p>
      </div>

      {showReadingTime && (
        <div className="mt-3">
          <p className="text-sm text-gray-600">Reading Time</p>
          <p className="text-lg font-medium">{formatReadingTime(stats.readingTime)}</p>
        </div>
      )}

      <div className="mt-3 text-sm">
        {stats.wordCount === 0 ? (
          <span className="text-gray-500">Start typing your content here...</span>
        ) : (
          <span className={`${withinRange ? 'text-green-600' : 'text-orange-600'}`}>
            {withinRange ? 'Word count within target range.' : 'Adjust word count to meet the goal.'}
          </span>
        )}

        {stats.wordCount > maxWords && (
          <div className="mt-1 text-red-600">You have exceeded the maximum word limit.</div>
        )}
      </div>
    </div>
  );
};
