import React, { useState } from 'react';
import { CharacterCounterProps, TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 5,
}) => {
  const [text, setText] = useState('');

  const calculateStats = (input: string): TextStats => {
    const words = input.trim().split(/\s+/).filter(Boolean);
    return {
      characterCount: input.length,
      wordCount: words.length,
      readingTime: words.length / 200, // avg 200 wpm
    };
  };

  const stats = calculateStats(text);

  return (
    <div className="p-4 max-w-xl mx-auto">