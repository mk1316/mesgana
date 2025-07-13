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

export const categories = [
  'Favorites',
  'Praise',
  'Consecration', 
  'Salvation',
  'Nature',
  'Trust'
];

export const hymnsData: Hymn[] = [
  {
    id: '1',
    title: {
      amharic: 'አስማሚ ጸጋ',
      english: 'Amazing Grace'
    },
    author: {
      amharic: 'ጆን ኒውተን',
      english: 'John Newton'
    },
    verses: [
      {
        type: 'verse',
        amharic: 'አስማሚ ጸጋ፣ ምን ያህል ደስ ይላል\nየሚ ያድን እንደኔ አሳዛኝ\nአንድ ጊዜ ጠፋሁ፣ አሁን ግን ተገኝቻለሁ\nዓይነ ስውር ነበርኩ፣ አሁን ግን እያየሁ ነው።',
        english: 'Amazing grace! How sweet the sound\nThat saved a wretch like me!\nI once was lost, but now am found;\nWas blind, but now I see.'
      },
      {
        type: 'chorus',
        amharic: 'አስማሚ ጸጋ፣ ምን ያህል ደስ ይላል\nየሚ ያድን እንደኔ አሳዛኝ',
        english: 'Amazing grace! How sweet the sound\nThat saved a wretch like me!'
      },
      {
        type: 'verse',
        amharic: 'የጸጋው ፍቅር ከፍርሃት አላቆየኝ\nጸጋው ሰላምን ለወደ አመጣ\nጸጋ ከመጀመሪያው ሰዓት ለእኔ ደስ ያለ\nተፈጭቻለሁ እስከሚያምን ድረስ።',
        english: "'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed!"
      }
    ],
    tags: ['Salvation', 'Praise']
  },
  {
    id: '2',
    title: {
      amharic: 'እንዴት ታላቅ ነህ',
      english: 'How Great Thou Art'
    },
    author: {
      amharic: 'ካርል ቦበርግ',
      english: 'Carl Boberg'
    },
    verses: [
      {
        type: 'verse',
        amharic: 'ኦ ጌታ እግዚአብሄር፣ ምድርን ሲያስተምሩ\nየኮከቦችን አላማ ሰማይ ሲያዩ\nነጎድጓድ ሲያወሩ፣ ኃይሉን ሲያሳዩ',
        english: 'O Lord my God, when I in awesome wonder\nConsider all the worlds Thy hands have made\nI see the stars, I hear the rolling thunder\nThy power throughout the universe displayed'
      },
      {
        type: 'chorus',
        amharic: 'ጌታ፣ ጌታ፣ እንዴት ታላቅ ነህ\nጌታ፣ ጌታ፣ እንዴት ታላቅ ነህ',
        english: 'Then sings my soul, my Saviour God, to Thee\nHow great Thou art, how great Thou art!'
      }
    ],
    tags: ['Praise', 'Nature']
  },
  {
    id: '3',
    title: {
      amharic: 'ኣምላከ ያመሰግን ከሁሉም ፍሬዎች',
      english: 'Praise God, From Whom All Blessings Flow'
    },
    author: {
      amharic: 'ቶማስ ኬን',
      english: 'Thomas Ken'
    },
    verses: [
      {
        type: 'verse',
        amharic: 'ሁሉም በረከቶች የሚፈሱበትን እግዚአብሄርን አመሰግኑ\nእዚህ ከታች ያሉትን ሁሉንም ፍጥረታት አመሰግኑ\nከላይ፣ የኣርድኦት አዕላዊ አስተዳዳሪዎች፣ አመሰግኑት\nአባት፣ ልጅ እና ቅዱስ መንፈስን አመሰግኑ።',
        english: 'Praise God, from whom all blessings flow;\nPraise Him, all creatures here below;\nPraise Him above, ye heavenly host;\nPraise Father, Son, and Holy Ghost.'
      }
    ],
    tags: ['Praise', 'Trust']
  },
  {
    id: '4',
    title: {
      amharic: 'ቅዱስ፣ ቅዱስ፣ ቅዱስ',
      english: 'Holy, Holy, Holy'
    },
    author: {
      amharic: 'ሬጂናልድ ሄበር',
      english: 'Reginald Heber'
    },
    verses: [
      {
        type: 'verse',
        amharic: 'ቅዱስ፣ ቅዱስ፣ ቅዱስ! ጌታ እግዚአብሄር ኣልማውቲ\nጥዋት ላይ ሙዛችንን ወደ አንተ ኣንሳለን\nቅዱስ፣ ቅዱስ፣ ቅዱስ! ምጣኔ እና ሐይል\nፍጹም በቅዱሳንታ፣ ታላቅ በፍቅር።',
        english: 'Holy, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to Thee;\nHoly, holy, holy! Merciful and mighty!\nGod in three persons, blessed Trinity!'
      }
    ],
    tags: ['Consecration', 'Praise']
  },
  {
    id: '5',
    title: {
      amharic: 'ይህ ቀን ነው',
      english: 'This is the Day'
    },
    author: {
      amharic: 'አይታወቅም',
      english: 'Unknown'
    },
    verses: [
      {
        type: 'verse',
        amharic: 'ይህ ቀን፣ ይህ ቀን\nጌታ የሠራው ቀን ነው፣ ጌታ የሠራው ቀን ነው\nንደሳለህ እና ንደዋሃለን፣ ንደሳለህ እና ንደዋሃለን\nይህ ቀን ጌታ የሠራው ቀን ነው።',
        english: 'This is the day, this is the day\nThat the Lord has made, that the Lord has made\nWe will rejoice, we will rejoice\nAnd be glad in it, and be glad in it\nThis is the day that the Lord has made\nWe will rejoice and be glad in it\nThis is the day, this is the day\nThat the Lord has made.'
      }
    ],
    tags: ['Praise']
  },
  {
    id: '6',
    title: {
      amharic: 'የእግዚአብሄር ፍቅር',
      english: 'God\'s Love'
    },
    author: {
      amharic: 'አይታወቅም',
      english: 'Unknown'
    },
    verses: [
      {
        type: 'verse',
        amharic: 'የእግዚአብሄር ፍቅር ታላቅ ነው\nለዘላለም ይቆያል\nበሁሉም ጊዜ ከእኛ ጋር ነው\nእንዲህ ያለ ፍቅር የለም።',
        english: 'God\'s love is so great\nIt lasts forever\nIt\'s with us all the time\nThere is no love like this.'
      },
      {
        type: 'chorus',
        amharic: 'ፍቅሩ፣ ፍቅሩ፣ የእግዚአብሄር ፍቅር\nለዘላለም ይቆያል',
        english: 'His love, His love, God\'s love\nLasts forever'
      }
    ],
    tags: ['Praise', 'Trust']
  }
];