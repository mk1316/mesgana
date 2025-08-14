// Imports
import { Hymn } from './types';

import { hymns1 } from './hymns1';
import { hymns2 } from './hymns2';
import { hymns3 } from './hymns3';
import { hymns4 } from './hymns4';
import { hymns5 } from './hymns5';
import { hymns6 } from './hymns6';
import { hymns7 } from './hymns7';

// All hymns
export const allHymns: Hymn[] = [
  ...hymns1,
  ...hymns2,
  ...hymns3,
  ...hymns4,
  ...hymns5,
  ...hymns6,
  ...hymns7,
];

// Re-exports
export * from './hymns1';
export * from './hymns2';
export * from './hymns3';
export * from './hymns4';
export * from './hymns5';
export * from './hymns6';
export * from './hymns7';

export type { Hymn } from './types';

// Categories for filtering
export const categories = [
  'Favorites',
  'Praise',
  'Worship',
  'Revival',
  'Repentance',
  'Prayer',
  'Christian Living',
  'Consecration',
  'Work',
  'People',
  'Hope',
  'Happiness',
  'Peace',
  'Love',
  'Salvation',
  'Cross',
  'Sabbath',
  'God\'s Word',
  'Christian Warfare',
  'Judgment',
  'Second Coming',
  'Heavenly Home',
  'Young People',
  'Nature',
  'Children\'s Songs',
  'Wedding',
  'Christmas',
  'Trust',
  'Ordinances',
  'Resurrection',
  'Farewell',
];