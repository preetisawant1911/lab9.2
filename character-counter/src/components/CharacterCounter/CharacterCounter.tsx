import React, { useCallback, useMemo, useState } from 'react';
import { CharacterCounterProps, TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 5
}) => {
  const [text, setText] = useState('');

  const handleTextChange = useCallback((value: string) => {
    setText(value);
  }, []);

  const stats: TextStats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed.length ? trimmed.split(/\s+/) : [];
    const wordCount = words.length;
    const characterCount = text.length;
    const readingTimeMinutes = wordCount / 200;

    return {
      characterCount,
      wordCount,
      readingTime: readingTimeMinutes
    };
  }, [text]);

  return (
    <div className="p-4">
      <TextInput onTextChange={handleTextChange} />
      <StatsDisplay
        stats={stats}
        minWords={minWords}
        maxWords={maxWords}
        targetReadingTime={targetReadingTime}
        showReadingTime
      />
    </div>
  );
};
