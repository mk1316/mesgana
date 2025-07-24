export interface Hymn {
      id: string;
      title: {
        amharic: string;
        english: string;
      };
      author: {
        amharic: string;
        english: string;
      };
      verses: Array<{
        type: 'verse' | 'chorus';
        amharic: string;
        english: string;
      }>;
      tags: string[];
    }

export type HymnType = Hymn;
