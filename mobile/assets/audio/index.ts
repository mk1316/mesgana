// Static mapping from three-digit hymn ID to bundled audio asset
// Note: React Native requires static require paths; do not build these dynamically.

export const AUDIO_BY_PADDED_ID: Record<string, any> = {
  '001': require('./001 – Praise God, From Whom All Blessings Flow.mp3'),
  '002': require('./002 – Holy, Holy, Holy.mp3'),
  '007': require('./007 - Majestic Sweetness Sits Enthroned.mp3'),
  '009': require('./009 - My Redeemer.mp3'),
  '010': require('./010 – My Maker and My King.mp3'),
  '016': require('./016 – Praise to the Lord.mp3'),
  '018': require('./018 - Count Your Blessings.mp3'),
  '019': require('./019 - Revive Us Again.mp3'),
  '020': require('./020 – O Thou in Whose Presence.mp3'),
  '021': require('./021 - I Will Sing the Wondrous Story.mp3'),
  '023': require('./023 - Christ Receiveth Sinful Men.mp3'),
  '031': require('./031 – Ye Watchers and Ye Holy Ones.mp3'),
  '037': require('./037 – Abide With Me.mp3'),
  '038': require('./038 – Day Is Dying in the West.mp3'),
  '040': require('./040 – O Worship the King.mp3'),
  '041': require('./041 – How Great Thou Art.mp3'),
  '054': require("./054 - Brightly Beams Our Father's Mercy.mp3"),
  '056': require('./056 - Though Your Sins Be as Scarlet.mp3'),
  '060': require('./060 - The Beautiful Garden of Prayer.mp3'),
  '065': require('./065 – Amazing Grace.mp3'),
  '067': require("./067 - I Am Thine, O Lord.mp3"),
  '070': require('./070 - Speak to My Soul.mp3'),
  '075': require('./075 - Majestic Sweetness Sits Enthroned.mp3'),
  '085': require("./085 - Safe in the Arms of Jesus.mp3"),
  '092': require('./092 - The Savior With Me.mp3'),
  '095': require('./095 - It Pays to Serve Jesus.mp3'),
  '099': require('./099 - Hold the Fort.mp3'),
  '102': require('./102 - I Belong to the King.mp3'),
  '106': require('./106 - Living for Jesus.mp3'),
  '109': require('./109 - Tell It to Jesus.mp3'),
  '113': require('./113 – Like a River Glorious.mp3'),
  '116': require('./116 - Heavenly Sunlight.mp3'),
  '147': require('./147 – Joyful, Joyful, We Adore Thee.mp3'),
  '266': require('./266 – I Sing the Mighty Power of God.mp3'),
  '278': require('./278 – Away in a Manger.mp3'),
  '281': require('./281 – O Little Town of Bethlehem.mp3'),
  '283': require('./283 – O Come, All Ye Faithful.mp3'),
  '285': require("./285 – Hark! the Herald Angels Sing.mp3"),
  '288': require('./288 – Joy to the World.mp3'),
  '290': require('./290 – As With Gladness Men of Old.mp3'),
  '291': require('./291 – It Came Upon the Midnight Clear.mp3'),
  '322': require('./322 – God Be With You.mp3'),
};

export function getAudioAssetForHymnId(id: string): any | undefined {
  const padded = id.padStart(3, '0');
  return AUDIO_BY_PADDED_ID[padded];
}


