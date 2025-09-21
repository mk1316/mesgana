import { Hymn } from './types';
import { categories } from './index';

export const hymns1: Hymn[] = [
  {
    id: '1',
    title: { amharic: 'አምላካችን አመስግኑ', english: 'Praise God, From Whom All Blessings Flow' },
    author: { amharic: '', english: 'Thomas Ken\nLouis Bourgeois' },
    verses: [
      { type: 'verse', amharic: 'አምላካችን አመስግኑ በምድር ያላችሁ ሁሉ፡\nየሰማይ ሠራዊት ደግሞ ሥላሴንም አወድሱ አሜን።', english: '' }
    ],
    tags: ['Praise']
  },
  {
    id: '2',
    title: { amharic: 'ቅዱስ ቅዱስ ቅዱስ', english: 'Holy, Holy, Holy' },
    author: { amharic: '', english: 'John Philipp Neumann\nFranz Schubert' },
    verses: [
      { type: 'verse', amharic: 'ቅዱስ ቅዱስ ቅዱስ ጌታ ቅዱስ ነው፡\nቅዱስ ቅዱስ ቅዱስ አምላክ ቅዱስ ነው፡\nሁልጊዜ ይኖራል ሁልጊዜም ያው ነው፡\nቅዱስ ቅዱስ ቅዱስ አምላክ ቅዱስ ነው፡', english: '' },
      { type: 'verse', amharic: 'ቅዱስ ቅዱስ ቅዱስ ጌታ ቅዱስ ነው፡\nቅዱስ ቅዱስ ቅዱስ አምላክ ቅዱስ ነው፡\nክቡር ነው ፈቃር ነው እናወድሰው፡\nዓለምን ይገዛል ምስጋና ስጡት።', english: '' }
    ],
    tags: ['Praise', 'Worship']
  },
  {
    id: '3',
    title: { amharic: 'ቅዱስ ቅዱስ ቅዱስ', english: 'Holy, Holy, Holy' },
    author: { amharic: '', english: 'Reginald Heber\nJohn Dykes' },
    verses: [
      { type: 'verse', amharic: 'ቅዱስ ቅዱስ ቅዱስ ኃያል ጌታችን፡\nበየጧቱ ላንተ እንዘምራለን፡\nቅዱስ ቅዱስ ቅዱስ መኃሪና ኃያል፡\nእግዚአብሔር የዘለዓለም ገዥ።', english: '' },
      { type: 'verse', amharic: 'ቅዱስ ቅዱስ ቅዱስ መላእክት ያክብሩህ፡\nዘውዳቸውን በዙፋንህ ዙርያ ትተው፡\nአዕላፋት በሰማይ ይሰግዱልሃል፡\nአምላክ የነበርህ ያለህ የምትኖር።', english: '' },
      { type: 'verse', amharic: 'ቅዱስ ቅዱስ ቅዱስ ክብርህ ቢጋረድ፡\nግርማህን የሰው ዓይን ሊያየው ባይችል እንኳ፡\nብሩክ አምላክ ቅዱስ ነህ እንዳንት አይገኝም፡\nየተሞላህ በኃይል በፍቅር።', english: '' }
    ],
    tags: ['Praise', 'Worship']
  },
  {
    id: '4',
    title: { amharic: 'ይህች ቀን ናት', english: 'This is the Day' },
    author: { amharic: '', english: 'Les Garrett' },
    verses: [
      { type: 'verse', amharic: 'ይህች ቀን ናት ይህች ቀን ናት ጌታ ያዘጋጃት ጌታ\nያዘጋጃት። እናመስግን እናመስግን በርሷም\nደስ ይበለን። በርሷም ደስ ይበለን። ይህች ቀን ናት ጌታ\nያዘጋጃት እናመስግን በርሷም ደስ ይበለን።\nይህች ቀን ናት ይህች ቀን ናት ጌታ ያዘጋጃት።', english: '' }
    ],
    tags: ['Praise']
  },
  {
    id: '5',
    title: { amharic: 'ለየሱስ ስም እልል በሉ', english: 'All Hail the Power of Jesus Name' },
    author: { amharic: '', english: 'Edward Perronet\nOliver Holden' },
    verses: [
      { type: 'verse', amharic: 'ለየሱስ ስም እልል በሉ መላእክት፡\nስገዱ የመንግሥትን እክሊል አምጡ፡\nየሱስ ይቀዳጀው የመንግሥትን አክ\nሊል አምጡ የሱስ ይቀዳጀው።', english: '' },
      { type: 'verse', amharic: 'እላንት የእሥራኤል ወገን ብትደክሙም፡\nብታንሱም ላዳናችሁ እልል በሉ፡\nአክሊልም አምጡለት ላዳናችሁ እ\nልል በሉ አክሊልም አምጡለት።', english: '' },
      { type: 'verse', amharic: 'ወገን ነገድም ሁላችሁ በዓለም፡\nያላችሁ ለየሱስ ስም ክብር ስጡ፡\nአክሊልም አምጡለት ለየሱስ ስም ክብር ስጡ አክሊልም አምጡለት።', english: '' },
      { type: 'verse', amharic: 'ከቅዱሳን ጋራ ባንድ ላይ በግርጌው፡\nተቀምጠን ለዘላለም እንድንዘምር፡\nየሱስ ይንገሥልን ለዘላለም እንድንዘምር የሱስ ይንገሥልን።', english: '' }
    ],
    tags: ['Praise']
  },
  {
    id: '6',
    title: { amharic: 'ጌታችን አመስግኑት', english: 'Praise to Jesus' },
    author: { amharic: '', english: 'Cowper & Ceiuuck\nGesongbnch der Herzogi\nWirtemburgischen Katholischen Hofkapelle' },
    verses: [
      { type: 'verse', amharic: 'ጌታችን አመስግኑት በደስታ ዝማሬ፡\nሕፃናት ያመስግኑት የሱስ ጌታችንን፡\nታናሾችን ወደደ ወደርሱም ጠራቸው፡\nበክንዱም አቀፋቸው ነፍሱንም ሰጣቸው።', english: '' },
      { type: 'verse', amharic: 'ጎልማሶች ያመስግኑህ ቅኔም ይቀኙልህ፡\nንጹህ ያለ ኃጢአት በምድር የነበርህ፡\nመታዘዝ አስተምረን ክፉን እንድንሸሽ፡\nበሰማያዊ መቅደስ ካንተ ጋር እንድንሆን።', english: '' },
      { type: 'verse', amharic: 'ሴቶችም ያመስግኑህ አንተ የድንግል ልጅ፡\nጸጋና ትህትና ሕይወትህን የሞላ፡\nጸጋህን አልብሣቸው ሰላምህን ስጣቸው፡\nበፊትህ የሚያበራ እምነት ላክላቸው።', english: '' },
      { type: 'verse', amharic: 'በአንድነት ተባብረን ላንተ እንቀኝልህ፡\nብርሃን መሪ ሁንልን በልጅነታችን፡\nወደላይም ምራን በምድር ላይ ሣለን፡\nእንዳንተ እንድንሆን በጥበብህ አድገን።', english: '' }
    ],
    tags: ['Praise']
  },
  {
    id: '7',
    title: { amharic: 'ልዑላዊ ግሩም ክብሩ', english: 'Majestic Sweetness Sits Enthroned' },
    author: { amharic: '', english: 'Samuel Stennett\nThomas Hastings' },
    verses: [
      { type: 'verse', amharic: 'ልዑላዊ ግሩም ክብሩ በርሱ ተገለጠ የብርሃን አክሊልን ለብሷል ካፉም ፀጋ ሞልቷል፡\nካፉም ፀጋ ሞልቷል።', english: '' },
      { type: 'verse', amharic: 'ሟች ከሆኑ ከሰው ልጆች አይወዳደርም ከመልካሞችም፡\nመልካም ነው ሰማይን ያደምቃል፡\nሰማይን ያደምቃል።', english: '' },
      { type: 'verse', amharic: 'በችግር ውስጥ ሣለሁ አየኝ ከ\nጭንቄም አዳነኝ ያምላኬንም ክብር፡\nአያለሁ ደስታዬም ፍጹም ነው፡\nደስታዬም ፍጹም ነው።', english: '' },
      { type: 'verse', amharic: 'የመለኮታዊ ፍቅሩን ስ\nላረጋገጥሁ ከሰጠኝ እኔም፡\nደግሞ በፈቃዴ አምላክ ሆይ፡\nያንተ ነኝ አምላክ ሆይ ።', english: '' }
    ],
    tags: ['Praise']
  },
  {
    id: '8',
    title: { amharic: 'የጥንት ታሪክ ንገረኝ', english: 'Tell Me That Old, Old Story' },
    author: { amharic: '', english: 'Katherine Hankey\nWM.H. Doane' },
    verses: [
      { type: 'verse', amharic: 'የጥንት ታሪክ ንገረኝ ስላዲሷ አገር፡\nስለየሱስ ፍቅርና ስለየሱስ ክብር፡\nእንዲገባኝ አድርገህ ታሪኩን ንገረኝ፡\nኃጢአት ያረከሰኝ ነኝ ፍቅሩም የማይገባኝ።', english: '' },
      { type: 'verse', amharic: 'በቀስታ ንገረኝ በጣም እንዲገባኝ፡\nአስደናቂውን መዳን አምላክ የሰጠኝን፡\nብዙ ጊዜም ንገረኝ የማለዳ ጤዛ፡\nፈጥኖ እንደሚጠፋ እኔም እንዳይጠፋኝ።', english: '' },
      { type: 'verse', amharic: 'አለስልሰህ ንገረኝ ድምፅህን አጣፍጠህ፡\nየሱስ እኔን ሊያድን እንደመጣ አውቀህ፡\nደጋግምና ንገረኝ የየሱስን ታሪክ፡\nደሙን ስላፈሰሰልኝ ስሙን እንዳከብር።', english: '' },
      { type: 'chorus', amharic: 'ያንን ታሪክ ንገረኝ ያንን ታሪክ ንገረኝ፡\nያንን ታሪክ ንገረኝ ስለየሱስ ፍቅር።', english: '' }
    ],
    tags: ['Praise']
  },
  {
    id: '9',
    title: { amharic: 'ላዳኜ እዘምራለሁ', english: 'My Redeemer' },
    author: { amharic: '', english: 'PP Bhss\nJames Mcgranahan' },
    verses: [
      { type: 'verse', amharic: 'እዘምራለሁ ላዳኜ ላስደናቂው ፍቅሩ ስል፡\nተሰቃየልኝ በመስቀል ከመርገም እኔን ሊያድን።', english: '' },
      { type: 'verse', amharic: 'ድንቁን ታሪክ እነግራለሁ ከጥፋቴ እንዳዳነኝ፡\nሰፊ በሆነው ምሕረቱ በትርፍ ሁሉን ለሰጠኝ።', english: '' },
      { type: 'verse', amharic: 'ውድ አዳኜን ላመስግነው ድል ነሺ ኃይሉን ልንገር፡\nበሞትና በሲኦል ላይ አሸናፊ ላረገኝ።', english: '' },
      { type: 'verse', amharic: 'እዘምራለሁ ላዳኜ ለሰማያዊ ፍቅሩ፡\nከሞት ሕይወትን አሳየኝ በርሱም ያምላክ ልጅ ሆንሁኝ።', english: '' },
      { type: 'chorus', amharic: 'ዘምሩ ላዳኜ ክብር፡\nላዳኜ ክብር ዘምሩ ላዳኜ ክብር፡\nበደሙ እኔን ገዛኝ፡\nእኔን ገዛኝ በደሙ እኔን ገዛኝ፡\nበመስቀሉ ይቅር አለኝ፡\nበመስቀሉ ይቅር አለኝ በመስቀሉ ይቅር አለኝ፡\nዕዳዬን ከፈለልኝ።ከፈለልኝ። ከፈለልኝ።', english: '' }
    ],
    tags: ['Praise']
  },
  {
    id: '10',
    title: { amharic: 'ፈጣሪ ንጉሤ', english: 'My Maker and My King' },
    author: { amharic: '', english: 'Anne Steele\nUnknown' },
    verses: [
      { type: 'verse', amharic: 'ፈጣሪ ንጉሤ ሁሉን የሰጠኸኝ፡\nበረከት ይፈልቅልኛል አንተ የላክህልኝ፡\nበረከት ይፈልቅልኛል አንተ የላክህልኝ።', english: '' },
      { type: 'verse', amharic: 'እኔ የጅህ ፍጥረት ባንተ ብቻ ስኖር፡\nላደረግህልኙ ጥቅም ሣመሰግን ልኑር፡\nላደረግህልኙ ጥቅም ሣመሰግን ልኑር።', english: '' },
      { type: 'verse', amharic: 'ሁሉ ያንተ ሲሆን አምላኬ ምን ልስጥህ፡\nፍቅርህ ይፈልግብኛል እንዳመሰግንህ፡\nፍቅርህ ይፈልግብኛል እንዳመሰግንህ።', english: '' },
      { type: 'verse', amharic: 'በአምላካዊ ኃይል ጸጋህ ነፍሴን ያንቃት፡\nነገሬም ምኞቴም ሁሉ ቀኔም ላንተ ይሁን፡\nነገሬም ምኞቴም ሁሉ ቀኔም ላንተ ይሁን።', english: '' }
    ],
    tags: ['Praise']
  },
  {
    id: '11',
    title: { amharic: 'አምባችን አምላካችን ነው', english: 'A Mighty Fortress is Our God' },
    author: { amharic: '', english: 'Martin Luther\nTi by Frederick H Hedge' },
    verses: [
      { type: 'verse', amharic: 'አምባችን አምላካችን ነው ብርቱ ዕቃ ጦራችን፡\nበመከራችን እርሱ ነው ጽኑ መጠጊያችን፡\nየጥንት ጠላታችን ሊያጠፋንም ሲሻ በኃይል በተንኮል፡\nቃል ጥላቻንም ለብሶ የሰው ኃይል አይችለውም።', english: '' },
      { type: 'verse', amharic: 'በኃይላችን ብንታመን በቶሎ እንጠፋለን፡\nግን እግዚአብሔር የመረጠው እርሱ በኛ በኩል ነው፡\nስሙንም ብትጠይቅ የሱስ ክርስቶስ ነው እግዚብሔር ጸባ\nኦት የማይለወጠው እርሱ ነው ድል አድራጊው።', english: '' },
      { type: 'verse', amharic: 'ዓለም በሰይጣን ቢሞላም በጣም ቢያስፈራራንም፡\nእውነት እንደምታሸንፍ አምላክ ፈቃዱ ሆኗል፡\nዘመድ ገንዘብ ይቅር ሟቹ ሕይወት ጭምር ገላን የሚገድ\nሉ እውነትህን አይገድሉም መንግሥትህ ነዋሪ ነው።', english: '' }
    ],
    tags: ['Worship']
  },
  {
    id: '12',
    title: { amharic: 'ተመስገን', english: 'To God Be the Glory' },
    author: { amharic: '', english: 'Fanny J. Crosby\nW.H. Doane' },
    verses: [
      { type: 'verse', amharic: 'ሁሉን የፈጠረ አምላክ ይመስገን ዓለምን ወ\nዶ ልጁን እስኪሰጠን ከኃጢዓት ሊያነጻን ሕይ\nወቱን ሰጠን የሕይወት መንገድ ደግሞ ከፈተልን።', english: '' },
      { type: 'verse', amharic: 'ኦ ፍጹም ደህንነት በደም የገዛን ለአማኙ፡\nሁሉ ተስፋ የሰጠን የበደለ ሁሉ በው\nነት ቢያምን በዚያችው ሰዓት ያገኛል ይቅርታን።', english: '' },
      { type: 'verse', amharic: 'እርሱ አስተማረን እርሱ ፈጠረን በልጁ በ\nየሱስ እጅግ ደስ አለን ከዚህ ሁሉ በላይ እ\nንነጻለን የሱስን እያየን እንጓዛለን።', english: '' },
      { type: 'chorus', amharic: 'ተመስገን ተመስገን ምድር ሁሉ ስሙት ተመስገን ተመስ\nገን ሰው ሁሉ ይደሰት በልጁ የሱስ ወደ:\nአብ እንድረስ ሁሉን ለፈጠረ ምስጋና ይድረስ።', english: '' }
    ],
    tags: ['Worship']
  },
  {
    id: '13',
    title: { amharic: 'ምን ሠራልን?', english: 'What Did He Do?' },
    author: { amharic: '', english: '' },
    verses: [
      { type: 'verse', amharic: 'አስደናቂውን ታሪክ ስሙ ያምላክ ልጅ የሠራውን፡\nክብሩን ትቶ ተዋረደልን በክቡር ደሙ ገዛን፡', english: '' },
      { type: 'verse', amharic: 'ኃያላን መላእክት አልቻሉም የርሱን ቦታ ሊይዙ፡\nለኛ ወደ መስቀል የሔደው የሱስ ክርስቶስ ብቻ ነው።', english: '' },
      { type: 'verse', amharic: 'ለዚህ አዳኝ ሕይወትህን ስጠው በፊቱም ስገድለት፡\nፍቅሩን ታውቀው ዘንድ ይገባሃል በኃይሉም ያድንሃል።', english: '' },
      { type: 'chorus', amharic: 'ማን ነው ከጥፋት ያዳነኝ? ምን ሠራልኝ?\nክርስቶስ የሱስ የአምላክ ልጅ ላንተ ሞተ እመን አሁን በሰማይ ያማልዳል።\nየት ይኖራል? በሰማይ ያማልዳል።', english: '' }
    ],
    tags: ['Worship']
  },
  {
    id: '14',
    title: { amharic: 'ምስጋና ይገባሃል', english: 'We Thank Thee' },
    author: { amharic: '', english: 'Moderato\nHarold A Miller' },
    verses: [
      { type: 'verse', amharic: 'ምስጋና ለአንተ ይገባሃል ለስጦታህ ከቀን ወደ ቀን\nለምሕረትህ ምስጋና ይድረስህ በየቀኑ ለምትሰጠን።', english: '' }
    ],
    tags: ['Worship']
  },
  {
    id: '15',
    title: { amharic: 'ክብር ለበጉ ይሁን', english: 'Worthy, Worthy, Is the Lamb' },
    author: { amharic: '', english: 'Anon' },
    verses: [
      { type: 'verse', amharic: 'ክብር ለበጉ ይሁን ክብር ለበጉ ይሁን:\nክብር ለበጉ ይሁን ለሞተው።', english: '' },
      { type: 'verse', amharic: 'መድኅን መንግሥትህ ትምጣ የሰይጣንም ኃይል ይጥፋ:\nብሩክ ሺህ ዓመት አምጣ ቅዱስ በግ።', english: '' },
      { type: 'verse', amharic: 'በየጊዜው ይሰማን አንተን መውደድ ማመስገን:\nበጉን በጽዮን በር ላይ እስክናይ።', english: '' },
      { type: 'chorus', amharic: 'ክብር ሃሌሉያ ስብሃት ሃሌሉያ፡\nክብር ሃሌ ሉያ ለበጉ።', english: '' }
    ],
    tags: ['Worship']
  },
  {
    id: '16',
    title: { amharic: 'ምስጋና ላምላክ', english: 'Praise to the Lord' },
    author: { amharic: '', english: 'Joachim Neander\nTR by Catherine Winkworth\nFrom Praxis Pietatis Melica' },
    verses: [
      { type: 'verse', amharic: 'ምስጋና ላምላክ ኃያሉ የፍጥረታት ንጉሥ፡\nአወድሱት ፈቃር ነውና ቸርና ቅዱስ፡\nየምትሰሙ ወደ መቅደስ ቅረቡ፡\nምስጋና በደስታ ስጡ።', english: '' },
      { type: 'verse', amharic: 'ምስጋና ላምላክ ሁሉንም በጥበብ ለሚገዛ፡\nበክንፋ ሥር ይጋርድሃል እንዳትጎዳ፡\nበምህረቱ የለመንኸውን ሁሉ፡\nጸሎትህን ሰምቶ ይሰጣል።', english: '' },
      { type: 'verse', amharic: 'ምስጋና ላምላክ ኑሮህን ለሚያበለጽግ፡\nቸርነቱና ምሕረቱ ላንት የማያቋርጥ፡\nይምርሃል ጸጋውን ያለብስሃል፡\nአሜን ይሁን ለዘላለም።', english: '' }
    ],
    tags: ['Worship']
  },
  {
    id: '17',
    title: { amharic: 'ቅዱስ ቅዱስ ብለው መላዕክት ዘመሩ', english: 'Holy, Holy, Is What the Angels Sing' },
    author: { amharic: '', english: 'Rev Johnson Oatman JR\nJNO R Sweney' },
    verses: [
      { type: 'verse', amharic: 'በሰማይ መዝሙር ሲዘመር ሰምተነው የማናውቀው፡\nመላዕክት ሲያመሰግኑት በዙፋን ላይ ያለውን፡\nበተቃኘ በገናቸው ባማረውም ድምፃቸው፡\nኦ እኛም ጌታ የሱስን ከልብ እናገልግለው።', english: '' },
      { type: 'verse', amharic: 'ግን ሌላ መዝሙርን ሰማሁ አስደሳች በሆነ ድምፅ፡\nእኛን ላዳነን ለጌታ ለገዛን ነው መዝሙሩ፡\nመከራን ሁሉ ያለፍነው ወደዚያች ግሩም አገር፡\nበሚወርደውም ንፁህ ምንጭ ልብሳችንን አነፃው።', english: '' },
      { type: 'verse', amharic: 'መላዕክት ቆመው ሲሰሙ ያልዘመሩትን መዝሙር፡\nእነዚያ በደም የነፁት በብዙ ፏፏቴ ድምፅ፡\nስለመከራ ዘመሩ ድል የነሱትን ውጊያም፡\nታላቁን አዳኛቸውን የሱስን አወደሱት።', english: '' },
      { type: 'verse', amharic: 'እኔ ምንም መልአክ ባልሆን ከዚያ ያለውን አውቃለሁ፡\nአዝማቼን እዘምራለሁ መላክት ያልዘመሩትን፡\nላዳኜ እዘምራለሁ በጨለማው መስቀል ላይ፡\nበደሌን ለደመሰሰው ከኃጢአቴም ላነፃኝ።', english: '' },
      { type: 'chorus', amharic: 'ቅዱስ ቅዱስ ብለው ሲዘምሩ እኔም ተባብሬያቸው የሰማይን ቤት ላደምቅ\nግን የመዳን ታሪክ ስዘምር ያዳምጣሉ መላክት ከቶ አላወቁም የመዳንን ደስታ።', english: '' }
    ],
    tags: ['Worship']
  },
  {
    id: '18',
    title: { amharic: 'ባርኮትህን ቁጠር', english: 'Count Your Blessings' },
    author: { amharic: '', english: 'Johnson Oatman Jr.\nEdwin O Excell' },
    verses: [
      { type: 'verse', amharic: 'በሕይወት ማዕበል ጎርፍ ስትንቀጠቀጥ፡\nሁሉም ጠፍቶብህ ተስፋህም ሲቆረጥ።\nባርኮትህን ቁጠር ዘርዝር በተራ፡\nወዲያው ታስባለህ ያምላክን ሥራ።', english: '' },
      { type: 'verse', amharic: 'በከባድ ሸክም ኃይል ተጭነሃል ወይ?\nየጥሪውስ መስቀል ከበደብህ ወይ?\nባርኮትህን ቁጠር ጥርጥር ይቅር፡\nበዘመንህ ሁሉ በደስታ ዘምር።', english: '' },
      { type: 'verse', amharic: 'ወደ ሌሎችም ሀብት ስትመለከት፡\nአስብ የክርስቶስን ባለጸግነት፡\nባርኮትህን ቁጠር አይገዛውም ሀብት፡\nያንተንም ነፍስ ዋጋ በሰማዩ ቤት።', english: '' },
      { type: 'verse', amharic: 'ትልቅም ቢሆን ትንሽ ጭንቅ መከራ፡\nተስፋ ሳትቆርጥ አምላክህን ጥራ።\nባርኮትህን ቁጠር መላእክት ይስሙት፡\nለጉዞህም ብርታት ይስጡህ መጽናናት።', english: '' },
      { type: 'chorus', amharic: 'ባርኮትህን ዘርዝር በተራ፡\nባርኮትህን ቁጠር ዘርዝር በተራ፡\nአይተህ ተገንዘብ የርሱን ሥራ፡\nአይተህ ተገንዘብ የርሱን ታምር ሥራ\nባርኮትህን ዘርዝር በተራ፡\nባርኮትህን ቁጠር፡\nአይተህ ተገንዘበው ያምላክን ሥራ።', english: '' }
    ],
    tags: ['Worship']
  },
  {
    id: '19',
    title: { amharic: 'አምላክ ይመስገን', english: 'Revive Us Again' },
    author: { amharic: '', english: 'WM Paton Mackay\nArr. From the English' },
    verses: [
      { type: 'verse', amharic: 'አምላክ ይመስገን ልጁን ስለሰጠን በክቡር ደሙ ደግሞ ስለገዛን።', english: '' },
      { type: 'verse', amharic: 'አምላክ ይመስገን መንፈስ ስለሰጠን ከጨለማ ወደ ብርሃን ስለመራን።', english: '' },
      { type: 'verse', amharic: 'ክብሩ ምስጋናም ለክርስቶስ ይሁን ከኃጢዓታችን፡ፈጽሞ ስላነጻን።', english: '' },
      { type: 'verse', amharic: 'ክብር ምስጋናም ላምላካችን ይሁን አንድ ልጁንም፡አሣልፎ ለሰጠን።', english: '' },
      { type: 'verse', amharic: 'አድሰን አሁን ፍቅርህን አካፍለን ከሰማይም፡መንፈስህን አውርድልን።', english: '' },
      { type: 'chorus', amharic: 'ሃሌሉያ ክብር ላንተ ሃሌሉያ አሜን ሃሌ ሉያ ክብር ላንተ አድሰን አሁን።', english: '' }
    ],
    tags: ['Worship']
  },
  {
    id: '20',
    title: { amharic: 'ነፍሴ ደስ የምትሰኝብህ ጌታ', english: 'O Thou in Whose Presence' },
    author: { amharic: '', english: 'Joseph Swain\nFreeman Lewis\nArr. By Hubert P Main' },
    verses: [
      { type: 'verse', amharic: 'ነፍሴ ደስ የምትሰኝብህ ጌታ፡\nበጭንቀቴ የምጠራህ አጽናኝ ደጋፊ ብርቱ፡\nመከታዬ ተስፋዬ ሁለንተናዬ።', english: '' },
      { type: 'verse', amharic: 'ግሩም ጣፋጭ የሆነው ቃሉ ኃይልም፡\nበሞት ጥላ ውስጥ ይዘልቃል በፊቱ ሁሉንም ያን\nበረክካል የሕይወት ሽታው ይደርሳል።', english: '' },
      { type: 'verse', amharic: 'ከአፉም የጽድቅ ነገር ይመነጫል፡\nየጸጋን ተክል ያጠጣል አሕዛብ መዳናቸውን፡\nያውቁበታል በፊቱም ደስ ይሰኛሉ።', english: '' },
      { type: 'verse', amharic: 'በማዳኑ ሁሉም ይደሰታሉ፡\nመላዕክት ይዘምራሉ ሠራዊትም ሁሉ ይ\nታዘዙታል ለዘላለምም ከፍ ይላል።', english: '' }
    ],
    tags: ['Worship']
  },
  {
    id: '21',
    title: { amharic: 'ታሪኩን እዘምራለሁ', english: 'I Will Sing the Wondrous Story' },
    author: { amharic: '', english: 'F. H. Rowley\nPeter P. Bilhorn' },
    verses: [
      { type: 'verse', amharic: 'እዘምራለሁ ታሪኩን ለየሱስ ለሞተልኝ፡\nክብሩን: ሁሉ እንደጣለ በቀራንዮ መስቀል።', english: '' },
      { type: 'verse', amharic: 'ጠፍቼ ነበር አገኘኝ ስባክን እኔን በጉን፡\nአፍቃሪ በሆነው ክንዱ ስቦ መራኝ መንገዱን።', english: '' },
      { type: 'verse', amharic: 'ቆስዬ ነበር አዳነኝ በድካምም ስማቅቅ።\nብርሃን ሸሽቶ ፍርሃት ውጦኝ ግን እርሱ ነፃ አወጣኝ', english: '' },
      { type: 'verse', amharic: 'የቀን ጨለማም ሲከብበኝ በኃዘን መንገድ ስዋኝ:\nአዳኜ ከኔ ጋራ ነው እጁም ለኔ መሪ ነው።', english: '' },
      { type: 'chorus', amharic: 'ልዘምር ያን ግሩም ታሪክ፤ ለየሱስ ለሞተልኝ\nዘምሩ ከቅዱሳን ጋር በገነት ደጅ ባሕር ዳር።\nልዘምር ያን ግሩም ታሪክ ለየሱስ ለሞተልኝ።\nዘምሩ ከቅዱሳን ጋር በገነት ደጅ: ባሕር ዳር ደጅ ባሕር ዳር።', english: '' }
    ],
    tags: ['Revival']
  },
  {
    id: '22',
    title: { amharic: 'ኦ የሱስ ሆይ አንተን ሣስብ', english: 'Jesus, The Very Thought Of Thee' },
    author: { amharic: '', english: 'Bernad of Clamvaux\nWilliam H. Doane.' },
    verses: [
      { type: 'verse', amharic: 'ኦ የሱስ ሆይ አንተን ሣስብ ልቤ ይደሰታል፡\nፊትህን ማየት ግን ይበልጣል ዕረፍትም ይሰጣል።', english: '' },
      { type: 'verse', amharic: 'የትሁታንም ተስፋ ሆይ የገሮችም ደስታ፡\nለወደቁት ሁሉ ቸር ነህ መልካምም ለሚሹህ።', english: '' },
      { type: 'verse', amharic: 'የየሱስ ክርስቶስን ፍቅር ካልቀመሱት በቀር፡\nለመግለጽ የማይቻል ነው በቃል ለመናገር።', english: '' },
      { type: 'verse', amharic: 'ኦ የሱስ ሆይ ደስታችን ነህ አንተ ቤዛችን ነህ፡\nክብራችን ባንተ ብቻ ነው እስከዘለዓለም።', english: '' }
    ],
    tags: ['Revival']
  },
  { 
    id: '23',
    title: { amharic: 'መዝሙሩን ዘምሩለት', english: 'Christ Receiveth Sinful Men' },
    author: { amharic: '', english: 'New from Neumaster\nJames Mc Granahan' },
    verses: [
      { type: 'verse', amharic: 'ክርስቶስ ኃጢአተኞችን በጸጋው ይቀበላል፡\nበላይኛውም መንገድ ሊመራቸው ይወዳል፡', english: '' },
      { type: 'verse', amharic: 'በጌታ ብንታመን ዕረፍትን ይሰጠናል\nእኛን ኃጢአተኞችን የሱስ ይቀበለናል', english: '' },
      { type: 'verse', amharic: 'እርሱ አይኰንነኝም ወደርሱ ከቀረብሁኝ:\nበንጽሕና መንፈስ እርሱ ይጠብቀኛል', english: '' },
      { type: 'verse', amharic: 'የሱስ ኃጢአተኞችን በፍቅሩ ይቀበላል፡\nእኔን: እንኳን: ከርሱ: ጋር እንድኖር ያደርገኛል', english: '' },
      { type: 'chorus', amharic: 'መዝሙሩን ዘምሩለት በጸጋው ይቀበላል መልክቱን ግለጽለት በጸጋው ይቀበላል።\nደጋግመህ ዘምር ደጋግመህ ዘምር ክርስቶስ\nኃጢአተኞችን ክርስቶስ ኃጢአተኞችን ግልጽ አድርግለት', english: '' }
    ],
    tags: ['Revival']
  },
  {
    id: '24',
    title: { amharic: 'ዳንኩኝ', english: 'Redeemed' },
    author: { amharic: '', english: 'Fanny J Crosby\nWilliam J Kurkpatrick' },
    verses: [
      { type: 'verse', amharic: 'መዳኔን ላውጅ እወዳለሁ በሞተው በግ ደም ድኛለሁ፡\nወሰን በሌለው ምህረት ዳንኩኝ ለዘላለምም ልጁ ነኝ።', english: '' },
      { type: 'verse', amharic: 'ዳንኩኝ በየሱስ ደስታ አለኝ ቋንቋ ሊነግረው የማይችል፡\nአውቃለሁ የጌታዬ ብርሃን ዘወትር ከኔ ጋር ይኖራል።', english: '' },
      { type: 'verse', amharic: 'ብሩክ አዳኜን አስባለሁ እርሱን ሳስብ እውላለሁ፡\nያለ እረፍትም እዘምራለሁ ፍቅሩም የመዝሙር ዜማ ነው።', english: '' },
      { type: 'verse', amharic: 'ዘውድ እንደሚቆየኝ አውቃለሁ በዚያ በሚያበራው ሥፍራ፡\nፍጹም ከሆነው መንፈስ ጋራ በጌታ ቤት እኖራለሁ።', english: '' },
      { type: 'chorus', amharic: 'ዳንኩኝ ዳንኩኝ በሞተው በግ ደም ድኛለሁ።\nዳንኩኝ ዳንኩኝ ዳንኩኝ ዳንኩኝ፡\nዳንኩኝ ዳንኩኝ ለዘላለምም ልጁ ነኝ።\nዳንኩኝ ዳንኩን ዳንኩኝ ዳንኩኝ፡', english: '' }
    ],
    tags: ['Revival']
  }, 
  {
    id: '25',
    title: { amharic: 'ጸጥ በሉ ጸጥ በሉ', english: 'Be Silent, Be Silent' },
    author: { amharic: '', english: 'Fanny J Crosby\nW H Doane' },
    verses: [
      { type: 'verse', amharic: 'ጸጥ በሉ ጸጥ በሉ አታሾክሹኩ፡\nጸጥ በሉ አድምጡ ቃላትን ስሙ።', english: '' },
      { type: 'verse', amharic: 'ጸጥ በሉ ጸጥ በሉ ቦታው ቅዱስ ነው፡\nከመሠውያው ስር ቃሉን አድምጡ።', english: '' },
      { type: 'verse', amharic: 'ጸጥ በሉ ጸጥ በሉ ጸሎት እናድርስ፡\nየኤደንን ደስታ እንድንካፈል።', english: '' },
      { type: 'verse', amharic: 'ጸጥ በሉ ጸጥ በሉ ጸጋውን አስቡ፡\nጸጥ በሉ ጸጥ በሉ ጌታን ደጅ ጥኑ።', english: '' },
      { type: 'chorus', amharic: 'በቀስታ ግቡ አምላክ ከዚህ ነው፡\nበቀስታ ግቡ እርሱን እንድንቀርብ።', english: '' }
    ],
    tags: ['Revival']
  }, 
  {
    id: '26',
    title: { amharic: 'ብሩክ መንፈስ', english: 'Sweet, Sweet Spirit' },
    author: { amharic: '', english: 'Dons Akers\nDoris Akers' },
    verses: [
      { type: 'verse', amharic: 'ብሩክ መንፈስ ከዚህ ቤት አለ አውቃ\nለሁ የጌታ ቅዱስ መንፈስ ነው አየሁ፡\nሀሴት በሁሉም ፊት ላይ አውቃለሁ ጌታ በክብሩ ከዚህ ነው', english: '' },
      { type: 'verse', amharic: 'በረከት አለ የማትወስደው ጌታን፡\nእስክታውቅ እርሱን እስክታምነው በፊ\nቱ ቀርበህ እስክትለው መንገዴን ከየሱስ ጋር እሄዳለሁ።', english: '' },
      { type: 'chorus', amharic: 'ኦ ብሩክ ቅዱስ መንፈስ፡\nግሩም ያምላክ መንፈስ ከኛ ጋራ ሁን፡\nሙላን ባንተ ፍቅር ለዚህ በረከት ከ\nልብ እናመስግን ጥርጥር አይኖርም እንነ\nቃቃለን ከዚህ ስንለያይ።', english: '' }
    ],
    tags: ['Revival']
  }, 
  {
    id: '27',
    title: { amharic: 'ወደ የሱስ እቀርባለሁ', english: 'I would Draw Nearer to Jesus' },
    author: { amharic: '', english: 'R H\nRobert Harkness' },
    verses: [
      { type: 'verse', amharic: 'ወደ የሱስ እቀርባለሁ ባለበት እኖራለሁ።\nለማገልገል እየሞከርሁ በእጁ እድናለሁ።', english: '' },
      { type: 'verse', amharic: 'ወደ የሱስ እቀርባለሁ የምሰውረው የለም።\nእንደሚወደኝ አውቃለሁ ወደርሱ እቀርባለሁ።', english: '' },
      { type: 'verse', amharic: 'ወደ የሱስ እቀርባለሁ ብርታቱንም እሻለሁ፡\nደግነቱን አወራለሁ በደስታ እሠራለሁ።', english: '' },
      { type: 'chorus', amharic: 'ወደ የሱስ እቀርባለሁ ወደርሱ እቀርባለሁ፡\nሕይወቴን እሰጠዋለሁ ወደርሱ እቀርባለሁ።', english: '' }
    ],
    tags: ['Revival']
  }, 
  {
    id: '28',
    title: { amharic: 'በተስፋ ስቀርበው', english: 'When we come to Hear His Word' },
    author: { amharic: '', english: '' },
    verses: [
      { type: 'verse', amharic: 'በተስፋ ስቀርበው ለመስማት ቃሉን ሲያበ\nራልኝ የጨለማ ኃይልም ይርቃል ከ\nኔ የሕይወትም ብርሃን ይበራል።', english: '' },
      { type: 'verse', amharic: 'በፍቅር መንፈስ ይጠራናል ዛሬ ሣይ\nቆጣ ለመንፈሱ ክፈት ልብህን አ\nሁን በንቃትም አድምጠው ቃሉን።', english: '' },
      { type: 'verse', amharic: 'እንዴት ያለ ተስፋ ይሰጣል ዛሬ ለል\nጆቹ አሁን ያለ ዋጋ ይሰጣል ጽድ\nቁን ድሆችም ደግሞ ያገኛሉ።', english: '' },
      { type: 'verse', amharic: 'ከኃጢዓት ባርነት ለማውጣት ቶሎ ለደ\nካሞች ከብዶን ሲኖርም የኃጢዓት ቀን\nበር በፀጋው ይፈታናል አሁን።', english: '' }
    ],
    tags: ['Revival']
  }, 
  {
    id: '29',
    title: { amharic: 'የጽዮን ግምብ ጠባቂ ሆይ', english: 'Watchmen on the walls of Zion' },
    author: { amharic: '', english: 'Anon\nThomas Hastings' },
    verses: [
      { type: 'verse', amharic: 'የጽዮን ግምብ ጠባቂ ሆይ ስለሌቱ ንገረን፡\nቀኑ ሊነጋ ብሏልን ንጋቱስ ሊወጣልን፡\nአብራልን አሁን የብርሃን ጮራ፡\nአብራልን አሁን የብርሃን ጮራ።', english: '' },
      { type: 'verse', amharic: 'ወሰኑን አልፈነዋል ወይ? ጌታ እስቲ ንገረን፡\nወደ ሰማይ ቀርበናል ወይ? አገሩስ ይታያል ወይ፡\nየሰማዩ መንግሥትህ ቀርቦአል ወይ?\nየሰማዩ መንግሥትህ ቀርቦአል ወይ?', english: '' },
      { type: 'verse', amharic: 'ብርሃን በርቷል ቀንም መጥቷል በአንድ ላይ እልል እንበል፡\nያጥቢያ ኮከብ ተነሣልን በሰማይ የሚያበራ፡\nቅዱሳን ሁሉ በጣም ተደሰቱ፡\nቅዱሳን ሁሉ በጣም ተደሰቱ።', english: '' },
      { type: 'verse', amharic: 'የሰማይ መሪ ተገኝቷል መድረሳችን እርግጥ ነው፡\nቶሎ ቶሎ እንራመድ ከግባችን ለመድረስ፡\nድምፃችንን እናንሣ በደስታ፡\nድምፃችንን እናንሣ በደስታ።', english: '' }
    ],
    tags: ['Revival']
  }, 
  {
    id: '30',
    title: { amharic: 'ግሩም ድንቁ የሱስ', english: 'Fairest Lord Jesus' },
    author: { amharic: '', english: 'German\nFrom Schlesische Volksheder\nArr. by Richards Willis' },
    verses: [
      { type: 'verse', amharic: 'ግሩም ድንቁ የሱስ የፍጥረታት ንጉሥ፡\nኦ ያምላክ እና የሰው ልጅ አፈቅርህአለሁ፡\nአከብርህአለሁ አንተ ነህ ክብሬ ደስታዬም።', english: '' },
      { type: 'verse', amharic: 'መስክህ ያምረኛል ይልቁንም ውድማህ፡\nበጸደዩ ልብስ አጊጧል የሱስ ያምረኛል፡\nየሱስ መልካም ነው ያዘነን ልብ ደስ ያሰኛል።', english: '' },
      { type: 'verse', amharic: 'ከፀሐይ ብርሃን ከጨረቃም ብርሃን፡\nከከዋክብትም ሠራዊት የሱስ ይደምቃል፡\nየሱስ ያበራል ከማናቸውም ሁሉ ይልቅ።', english: '' }
    ],
    tags: ['Revival']
  }, 
  {
    id: '31',
    title: { amharic: 'እላንት ተመልካች ቅዱሳን', english: 'Ye watchers and Ye Holy ones' },
    author: { amharic: '', english: 'Athelstan Riley\nIn Unison\nMelody from Geistliche Kirchengesang' },
    verses: [
      { type: 'verse', amharic: 'እላንት ተመልካች ቅዱሳን ብሩህ፡\nኪሩቤል ዙፋናትም ዘምሩለት ሃሌ\nሉያ ጩሁ ግዛት ስልጣናትም ኃ\nያል መላዕክት ዘምሩ ሃሌ ሉያ ሃሌ\nሉያ ሃሌ ሉያ ሃሌ ሉያ ሃሌ ሉያ።', english: '' },
      { type: 'verse', amharic: 'አብረን በደስታ እንዘምር መዝ\nሙራችን ሲያስተጋባ ሃሌ ሉያ ሃሌ\nሉያ ለእግዚአብሔር አብና ወልድ ለ\nመንፈስ ቅዱስ ለሶስቱም ሃሌ ሉያ ሃሌ\nሉያ ሃሌ ሉያ ሃሌ ሉያ ሃሌ ሉያ።', english: '' }
    ],
    tags: ['Repentance']
  }, 
  {
    id: '32',
    title: { amharic: 'በሩን ክፈትለት', english: 'You Must Open the Door' },
    author: { amharic: '', english: 'Unknown' },
    verses: [
      { type: 'verse', amharic: 'በሩን ክፈትለት በሩን ክፈትለት የሱስ ሲገባ አርነት ያወጣል ግን በሩን ክፈትለት፡', english: '' }
    ],
    tags: ['Repentance']
  },
  {
    id: '33',
    title: { amharic: 'የየሱስን ስም ተቀበል', english: 'Take the Name of Jesus With You' },
    author: { amharic: '', english: 'Lilhan Baxter\nWilliam H. Doane' },
    verses: [
      { type: 'verse', amharic: 'የየሱስን ስም ተቀበል አንተ ችግረኛ ልጅ፡\nመጽናናትን እንዲሰጥህ በምትሔድበት ሁሉ።', english: '' },
      { type: 'verse', amharic: 'የርሱን ስም ካንተ ጋር ወስደህ እንደ ጋሻህ አድርግው፡\nፈተና ቢመጣብህም በጸሎት ወደርሱ ሒድ።', english: '' },
      { type: 'verse', amharic: 'የየሱስ ስም የከበረው ልባችን ያስደስታል፡\nበፍቅሩ ይቀበለናል ስናወድሰው ልንኖር።', english: '' },
      { type: 'verse', amharic: 'በየሱስ ስም እንበርከክ ከዙፋኑ ፊት ቀርበን፡\nየገዦችን ገዥ እናንግሥ ጉዟችን ስንጨርስ።', english: '' },
      { type: 'chorus', amharic: 'ክቡር ስም ጣፋጭ ስም የዘላለም ደስታ ነው፡\nክቡር ስም ጣፋጭ ስም፡\nክቡር ስም ጣፋጭ ስም የዘላለም ደስታ ነው።\nክቡር ስም ጣፋጭ ስም፡', english: '' }
    ],
    tags: ['Repentance']
  }, 
  {
    id: '34',
    title: { amharic: 'በየሰዓት በየጊዜው', english: 'Every Day and Every Hour' },
    author: { amharic: '', english: 'Fanny J Crosby\nW H Doane' },
    verses: [
      { type: 'verse', amharic: 'መድኅኔ ተቀበለኝ እጠጋለሁ ጌታ ወዳንተ፡\nደምህ እንዲጠብቀኝ ከመለየት አምላኬ ካንተ።', english: '' },
      { type: 'verse', amharic: 'በዚህ ዓለምም ሳለሁ አንተ ምራኝ በመራመዴ፡\nባንተ ከታመንሁብህ አይጠፋኝም ከቶ መንገዴ።', english: '' },
      { type: 'verse', amharic: 'ሕይወቴ እስኪያልፍ ድረስ ፍቅሬ ላንተ እንዲጸናልኝ፡\nበፍቅር እጅህ ያዘኝ ወደ ሰማይ ቤትህ አድርሰኝ።', english: '' },
      { type: 'chorus', amharic: 'በየሰዓት በየጊዜው በደምህ እኔን አን\nጻኝ በምሕረትህ አቅርበኝ በፍቅርህም እኔን ሰውረኝ።', english: '' }
    ],
    tags: ['Repentance']
  }, 
  {
    id: '35',
    title: { amharic: 'እንደ የሱስ ስም አይገኝም', english: 'There\'s No Other Name Like Jesus' },
    author: { amharic: '', english: 'F.E. Belden' },
    verses: [
      { type: 'verse', amharic: 'እንደ የሱስ ስም አይገኝም ይህ የተወደደ ስም፡\nለመላእክትም ደስታ ነው ለክርስቲያንም ተድላ ነው።', english: '' },
      { type: 'verse', amharic: 'እንደ የሱስ ስም አይገኝም የሰው ልብ ሲያዝን ሳል፡\nሌላ እንደርሱ ስም የለም ደስታ ለልብ የሚሰጥ።', english: '' },
      { type: 'verse', amharic: 'እንደማየው ተስፋ አለኝ በደመና ሲገለጥ፡\nድምፁን መስማት ተስፋዬ ነው ከጥማቴ ሊያረካኝ።', english: '' },
      { type: 'verse', amharic: 'እንድሠራለት ቢፈልግ ቀን በቀን በዓለም ውስጥ፡\nእርዳታውንም ከሰጠኝ ጠንክሬ እሠራለሁ።', english: '' },
      { type: 'chorus', amharic: 'የሱስ ክርስቶስ እንደ እርሱ ያለ የለም። የሱስ ክርስቶስ፡\nየሱስ ክርስቶስ እንደ እርሱ ያለ የለም። የሱስ ክርስቶስ፡', english: '' }
    ],
    tags: ['Repentance']
  }, 
  {
    id: '36',
    title: { amharic: 'መንፈስ ቅዱስ መሪያችን', english: 'Holy Spirit Faithful Guide' },
    author: { amharic: '', english: 'MM Wells' },
    verses: [
      { type: 'verse', amharic: 'ከክርስቲያን የማይርቀው መንፈስ ቅዱስ መሪያችን፡\nበበረሃ ስንመንን እጃችን ይዘህ ምራን፡\nስንሰማ መልካም ቃልህን ደካሞች ደስ እንዲለን፡\nመንፈስ ጥራኝ ና ብለህ ስትመራኝ ልከተልህ።', english: '' },
      { type: 'verse', amharic: 'የታመንኸው ወዳጅ ሆይ እርዳታህ እንዳይርቀን፡\nጨለማውም ሲያስፈራን ጥርጥር እንዳይዘን፡\nአውሎ ነፋስ ሲነሣ እንዳይደክም ልባችን፡\nመንፈስ ጥራኝ ና ብለህ ስትመራኝ ልከተልህ።', english: '' },
      { type: 'verse', amharic: 'የሥራ ቀን ሲያበቃ ዕረፍታችን ስንጠብቅ፡\nወደ ሰማያዊ ደስታ ለመግባት ስንና\nፍቅ የየሱስ ክቡር ደሙ ያነጻናል እንወቅ፡\nመንፈስ ጥራኝ ና ብለህ ስትመራኝ ልከተልህ።', english: '' }
    ],
    tags: ['Repentance']
  }, 
  {
    id: '37',
    title: { amharic: 'ከኔ ጋር ሁን', english: 'Abide With Me' },
    author: { amharic: '', english: 'Henry F Lyte\nWilliam H Monk' },
    verses: [
      { type: 'verse', amharic: 'ከኔ ጋር ሁን በጨለመ ጊዜ፡\nጨልሟልና ከኔ ጋር እደር፡\nያላንተ ረዳት በታጣ ጊዜ፡\nየረዳተ ቢስ ረጅ አትለየኝ።', english: '' },
      { type: 'verse', amharic: 'የሕይወት ቀን ቶሎ ይቸኩላል፡\nየምድር ተስፋም በቶሎ ያልፋል፡\nበፍጥነትም ሁሉ ይለወጣል፡\nየማትለወጥ ሆይ አትለየኝ።', english: '' },
      { type: 'verse', amharic: 'በየሰዓቱ ፊትህን እሻለሁ፡\nከሐዋርያትህ ጋር እንደነበርህ፡\nእኔን እንደነሱ አትለየኝ፡\nበችግር በደስታ አትለየኝ።', english: '' },
      { type: 'verse', amharic: 'በየጊዜው እናፍቅህአለሁ፡\nበፀጋህም ድልን አገኛለሁ፡\nያለ አንተ የሚመራኝ የለም፡\nማሸነፍ እንዳገኝ አትለየኝ።', english: '' }
    ],
    tags: ['Repentance']
  }, 
  {
    id: '38',
    title: { amharic: 'ጸሐዩ ሊገባ ነው', english: 'Day is Dying in the West' },
    author: { amharic: '', english: 'Mary A Lathbury\nWillam F Sherwin' },
    verses: [
      { type: 'verse', amharic: 'ፀሐዩ ሊገባ ነው ጨለማ ሊመጣ ነው ትጋ፡\nስገድ ፀልይም የሌሊት ጸዳል ሲታይ በሰማያት።', english: '' },
      { type: 'verse', amharic: 'አንተ የሕይወት ጌታ የምትሰጠን ደስታ እርዳን፡\nፊትህን ስንሻ በፍቅር እጅህ ያዘንና ቅረበን።', english: '' },
      { type: 'verse', amharic: 'ሲመጣ የሞት ጥላ ጸጋህ አብዝቶ ይሙላ ፍቅርህ፡\nእና ሕይወትህ ያብራልን በምሕረትህ በልባችን።', english: '' },
      { type: 'verse', amharic: 'ኮከብ ጨረቃም ፀሐይ ሲጠፋ ከዓለም ላይ ግርማህ፡\nበኛ ላይ በራ ጨለማም ሁሉ ይጥፋ ለዘላለም።', english: '' },
      { type: 'chorus', amharic: 'ቅዱስ ቅዱስ ቅዱስ ልዑል አምላክ በሰማይ በ\nምድርም ሠራዊት ያመስግኑህ ልዑል አምላክ።', english: '' }
    ],
    tags: ['Repentance']
  }, 
  {
    id: '39',
    title: { amharic: 'የበረከት ዝናብ አለ', english: 'There Shall be showers of Blessing' },
    author: { amharic: '', english: 'El Nathan\nJames Mc Granahan' },
    verses: [
      { type: 'verse', amharic: 'የበረከት ዝናብ አለ ግሩም የፍቅር ተስፋ፡\nየመታደስ ወራት አለ ከአዳኙ የሚላክ።', english: '' },
      { type: 'verse', amharic: 'የበረከት ዝናብ አለ መነቃቃት ያመጣል፡\nመንፈሱን ይሰድልናል ለሁሉም ያዘንበዋል።', english: '' },
      { type: 'verse', amharic: 'የበረከት ዝናብ አለ ጌታ ቶሎ አዝንበው፡\nሕይወታችንን አድሰው ቃልህንም አክብረው።', english: '' },
      { type: 'verse', amharic: 'የበረከት ዝናብ አለ ዛሬም ሊወርድ የሚችል፡\nየሱስን ተስፋ ብናደርግ በሙሉ ልብ ብንቀርብ።', english: '' },
      { type: 'chorus', amharic: 'ባርኮት ያዘንባል የሚያሻንንም ሁሉ፡\nበጠብታ ሲወርድልን አብልጠን እንለምን።', english: '' }
    ],
    tags: ['Repentance']
  }, 
  {
    id: '40',
    title: { amharic: 'እንስገድ ላምላክ', english: 'O Worship the king' },
    author: { amharic: '', english: 'Robert Grant\nJ Michael Hayden' },
    verses: [
      { type: 'verse', amharic: 'እንስገድ ላምላክ ለክብር ጌታ፡\nእንዘምርም ፍቅሩን በደስታ፡\nመጠጊያ ጋሻችን ፈጣሪያችን፡\nግርማን ተላብሷል እንዲሁም ምስጋናን።', english: '' },
      { type: 'verse', amharic: 'ኃይሉን አስታውቁ ደግሞም ጸጋውን፡\nዙፋኑ ጠፈር ልብሶቹም ብርሃን፡\nቁጣውን በነጎድጓድ ድምፅ ያሰማል፡\nበበረታ ሞገድ ኃይሉን ያሳያል።', english: '' },
      { type: 'verse', amharic: 'ተነግሮ አያልቅ ያንተ እርዳታ፡\nሊገኝ ይችላል በሁሉ ቦታ፡\nከሰማይ በረከትን ለምታፈስ፡\nለቸር አምላካችን ምስጋና ይድረስ።', english: '' },
      { type: 'verse', amharic: 'እኛን ደካሞች ያፈር ልጆችን፡\nያላንተ ብርታት ተስፋ አይኖረንም፡\nየአንተ ርህራሄ ጸንቶ ይኖራል፡\nለሰዎችም ሁሉ ተስፋ ይሰጣል።', english: '' }
    ],
    tags: ['Repentance']
  }, 
  {
    id: '41',
    title: { amharic: 'ጌታ አምላኬ', english: 'How Great Thou Art' },
    author: { amharic: '', english: 'Stuart K Hine\nSwedish Folk Melody Adapted by Stuart K. Hine' },
    verses: [
      { type: 'verse', amharic: 'ጌታ አምላኬ እንዴት እገረማለሁ፡\nሳስብ ሳለሁ የጆችህን ፍጥረት።\nከዋክብትን ሳይ ነጎድጓድን ስሰማ።\nያንተ ሥልጣን በሕዋህ ውስጥ ታየኝ።', english: '' },
      { type: 'verse', amharic: 'ጥቅጥቅ ባለው በደን ውስጥ ስመላለስ፡\nየወፎችን ዝማሬ ስሰማ።\nሳይ ወደታች ከፍ ካለው ተራራ ላይ።\nምንጩ ሲፈልቅ ነፋሱም ሽው ሲል።', english: '' },
      { type: 'verse', amharic: 'ሳስብ ሳለሁ አብ ለልጁ ሳይሳሳ፡\nእንደ ላከው ሊሞት በኔ ፈንታ።\nበመስቀል ላይ ሸክሜን በደስታ ችሎ።\nተሰቃየ ኃጢአቴን ለመውሰድ።', english: '' },
      { type: 'verse', amharic: 'ክርስቶስ የሱስ በታላቅ ክብር መጥቶ፡\nይዞኝ ሲሄድ ደስታዬ እንዴት ይሆን።\nከዚያም ለርሱ በምስጋና እሰግዳለሁ።\nለታላቁ ግሩም ኃያል አምላክ።', english: '' },
      { type: 'chorus', amharic: 'ነፍሴ ላንተ መዝሙር ታቀርባለች፡\nኃያል ግሩም ታላቅ አምላክ፡\nነፍሴ ላንተ መዝሙር ታቀርባለች፡\nኃያል ግሩም ታላቅ አምላክ።', english: '' }
    ],
    tags: ['Prayer']
  }, 
  {
    id: '42',
    title: { amharic: 'የሱስ ከኔ ጋር', english: 'I want Jesus to Walk With Me' },
    author: { amharic: '', english: 'American Negro Spiritual\nArr. By Eurydice Osterman' },
    verses: [
      { type: 'verse', amharic: 'የሱስ ከኔ ጋር ይራመድ (ይራመድ)\nየሱስ ከኔ ጋር ይራመድ (ይራመድ)\nየሕይወቴን መናኝ ጉዞ ሁሉ፡', english: '' },
      { type: 'verse', amharic: 'በኔ ስቃይ ከኔ ጋር ሁን (ከኔ ጋር)\nበኔ ስቃይ ከኔ ጋር ሁን (ከኔ ጋር)\nሕይወት ሐዘን ሲያጠላባት፡', english: '' },
      { type: 'verse', amharic: 'በሐዘኔ ከኔ ጋር ሁን (ከኔ ጋር)\nበሐዘኔ ከኔ ጋር ሁን (ከኔ ጋር)\nነፍሴ ጨንቋት ስትታክት፡\nየሱስ ከኔ ጋር ይራመድ። (ይራመድ)', english: '' }
    ],
    tags: ['Prayer']
  }, 
  {
    id: '43',
    title: { amharic: 'ከበረዶ እነፃለሁ', english: 'Whiter than Snow' },
    author: { amharic: '', english: 'James Nicholson\nWilliam G Fischer' },
    verses: [
      { type: 'verse', amharic: 'ፍጹም መሆንን እወዳለሁ የሱስ ለዘላለም፡\nበውስጤ እንድትኖር ጣዖትን ስበር ጠላትን አርቀው፡\nእጠበኝ ከበረዶ እነፃለሁ።', english: '' },
      { type: 'verse', amharic: 'ኦ ጌታ ከዙፋንህ ተመልከተኝ ፍጹም መስዋ\nዕትን ለማቅረብ እርዳኝ ያለኝን ሁሉ ላንተ እሰጣለሁ፡\nእጠበኝ ከበረዶ እነፃለሁ።', english: '' },
      { type: 'verse', amharic: 'በትህትና ልኑር ጌታ የሱስ ከእግርህ በ\nታች ሆኜ ላመስግንህ የፈሰሰውን ደምህን እንዳስታውስ፡\nእጠበኝ ከበረዶ እነፃለሁ።', english: '' },
      { type: 'verse', amharic: 'በትእግሥት ስጠብቅህ ጌታ የሱስ አሁንና አ\nዲሱን ልብ ፍጠርልኝ ለፈለገህ ሁሉ እምቢ አትልም፡\nእጠበኝ ከበረዶ እነፃለሁ።', english: '' },
      { type: 'chorus', amharic: 'እነፃለሁ ከበረድ ይልቅ እጠበኝ ከበረዶ እነፃለሁ።', english: '' }
    ],
    tags: ['Prayer']
  }, 
  {
    id: '44',
    title: { amharic: 'የሱስ ይጠራሃል', english: 'Jesus is Tenderly calling' },
    author: { amharic: '', english: 'Fanny J Crosby\nGeorge C. Stebbins' },
    verses: [
      { type: 'verse', amharic: 'የሱስ በገርነት ይጠራሃል ዛሬውኑ፡\nይጠራሃል ስለምንስ ከሚያበራው ፍቅር\nበጣሙን ትርቃለህ።', english: '' },
      { type: 'verse', amharic: 'የሱስ ደካማን እንዲያርፍ ይጠራል ዛሬውኑ፡\nይጠራናል ሸክምህን አምጣ እንድትባረክ፡\nእርሱም አያባርህም።', english: '' },
      { type: 'verse', amharic: 'የሱስ ይጠራሃል ና ወደርሱ ዛሬውኑ፡\nይጠብቃል ከነኃጢዓትህ መጥተህ ተምበርከክ፡\nና እንግዲህ አትዘግይ።', english: '' },
      { type: 'verse', amharic: 'የሱስ ይጠራክ ጥሪውን ስማ ዛሬ ስማው፡\nዛሬ ስማው ስሙን ያመኑ ይደሰታሉ፡\nተነሱ እንቅረበው።', english: '' },
      { type: 'chorus', amharic: 'ዛሬውኑ፡ይጠራሃል የሱስ ይጠራል በለዘብታ ይጠራሃል።', english: '' }
    ],
    tags: ['Prayer']
  }, 
  {
    id: '45',
    title: { amharic: 'ያለ ደስታ ስኖር', english: 'Just as I am' },
    author: { amharic: '', english: 'Charlotte Elliott\nWilliam B. Bradbury' },
    verses: [
      { type: 'verse', amharic: 'ያለ ደስታ ስኖር ሳለሁ ክቡር ደምህ ፈ\nሰሰልኝ ምሕረትህን ላገኝ መጣሁ፡\nየአምላክ በግ መጣሁ እርዳኝ።', english: '' },
      { type: 'verse', amharic: 'ከጨለማ ልዳን ብዬ ሳልዘጋጅ ለ\nጌታዬ ጊዜያቱ አለፈብኝ፡\nየአምላክ በግ ና ውሰደኝ።', english: '' },
      { type: 'verse', amharic: 'በምድር ተንገላትቼ በችግርና፡\nበጭንቀት እንደዚህ ኖርሁ ተዋግቼ፡\nና ና አድነኝ ከጭንቀት።', english: '' },
      { type: 'verse', amharic: 'መጣሁ ትቀበለኛለህ ይቅርታን ትሰ\nጠኛለህ ያንተን ተስፋ አምነዋለሁ፡\nየአምላክ በግ መጣሁ መጣሁ።', english: '' },
      { type: 'verse', amharic: 'አሁን ያንተ ፍቅር አለኝ ጠላቴን አስወ\nግድልኝ የአንተ ነኝ ያንተ ብቻ፡\nአሁን መጣሁ ተቀበለኝ።', english: '' }
    ],
    tags: ['Prayer']
  }, 
  {
    id: '46',
    title: { amharic: 'ቸሩ አባት መድኃኒታችን', english: 'Jesus Comes to Us' },
    author: { amharic: '', english: 'Mattlight Fort\nFolkmelodi' },
    verses: [
      { type: 'verse', amharic: 'ቸሩ አባት መድኃኒታችን በ\nፀጋህ ኃይል ወደኛ ና በልጆችህ መካከል፡\nደግሞ የመንፈስህን ብርሃን አብራ።', english: '' },
      { type: 'verse', amharic: 'የሱስ አሁን ወደ ሁላችን ና\nና በፍቅርህ አሙቀን የራሴን ኃጢዓት ግለ\nጽልኝ ወዳንተ እንድሸሽ አሁን።', english: '' },
      { type: 'verse', amharic: 'ምስጋና ኃይል ውዳሴ ክብር ለ\nአንተ ብቻ ይገባል በቃልህም እንድን\nጸና በፍቅርህ ፀጋህን ስጠን።', english: '' }
    ],
    tags: ['Prayer']
  }, 
  {
    id: '47',
    title: { amharic: 'ወደ ቤት መጣሁ', english: 'Lord, I\'m coming Home' },
    author: { amharic: '', english: 'William J Kirkpatrick' },
    verses: [
      { type: 'verse', amharic: 'ከአምላክ ርቄ ዙሪያለሁ አሁን ተመለስሁ፡\nበኃጢዓት መንገድ ሄጃለሁ ጌታ ሆይ መጣሁ።', english: '' },
      { type: 'verse', amharic: 'ክቡር ዘመናት አባከንሁ አሁን ተመለስሁ፡\nበመራር እንባ ተጸጸትሁ ጌታ ሆይ መጣሁ።', english: '' },
      { type: 'verse', amharic: 'በኃጢዓቴ ብዛት ደከምሁ አሁን ተመለስሁ፡\nቃልህን ፍቅርህን አምናለሁ ጌታ ሆይ መጣሁ።', english: '' },
      { type: 'verse', amharic: 'የሚያነጻ ደምህን ስጠኝ አሁን ተመለስሁ፡\nከበረድ አብልጠህ አንጻኝ ጌታ ሆይ መጣሁ።', english: '' },
      { type: 'chorus', amharic: 'ወደ ቤት መጣሁኝ አልዞርም በቃኝ፡\nእጆችህን ዘርጋልኝ ጌታ መጣሁኝ።', english: '' }
    ],
    tags: ['Prayer']
  }, 
  {
    id: '48',
    title: { amharic: 'የየሱስ ድምጽ ሲለኝ ሰማሁ', english: 'I heard the voice of Jesus Say' },
    author: { amharic: '', english: 'Horatius Bonar\nLouis Spohr' },
    verses: [
      { type: 'verse', amharic: 'የየሱስ ድምፅ ሲለኝ ሰማሁ ና ወደ ዕረፍቴ፡\nአንተ የደከመህ ሰው ሆይ ዕረፍ በእቅፌ፡\nወደርሱ መጣሁ በድካም በኃዘንም ሳለሁ፡\nእርሱ ደስታን ስለሰጠኝ ዕረፍትን አገኘሁ።', english: '' },
      { type: 'verse', amharic: 'የየሱስ ድምፅ ሲለኝ ሰማሁ እነሆ ሰጠሁህ፡\nየህይወትን ውኃ ጠጣ አንተ የተጠማህ፡\nወደርሱ መጣሁ ሕይወትን ከሚሰጠው ጠጣሁ፡\nነፍሴ ከህይወት ምንጭ ረካች በርሱም እኖራለሁ።', english: '' },
      { type: 'verse', amharic: 'የየሱስ ድምፅ ሲለኝ ሰማሁ የዓለም ብርሃን ነኝ፡\nብርሃንህ ይወጣልሃል እኔን ተመልከተኝ፡\nወደርሱም አየሁ ፀሐዬን ኮከቤን አገኘሁ፡\nጉዞዬ እስከሚፈጸም አብረን እንሔዳለን።', english: '' }
    ],
    tags: ['Prayer']
  }, 
  {
    id: '49',
    title: { amharic: 'እንግዳ አለ በደጅ', english: 'There\'s a Stranger at the Door' },
    author: { amharic: '', english: 'J B Atchinson\nE O Excell' },
    verses: [
      { type: 'verse', amharic: 'እንግዳ አለ በደጅ አስገባው፡\nከዚያ ብዙ ቆይቷል አስገባው፡\nአስገባው ሳይሔድብህ አስገባው ቅዱስ ጌታን፡\nየሱስን የአብን ልጅ አስገባው፡', english: '' },
      { type: 'verse', amharic: 'ልብህን አሁን ክፈት አስገባው፡\nብትዘገይ ይሔዳል አስገባው፡\nአስገባው ወዳጅህን ነፍስህን ይጠብቃል፡\nእርሱ ይጠብቅሃል አስገባው፡', english: '' },
      { type: 'verse', amharic: 'አሁን ምክሩን ተቀበል አስገባው፡\nአሁን እርሱን ምረጠው አስገባው፡\nእርሱ በደጅህ ቆሟል ደስታን ያመጣልሃል፡\nስሙንም ታከብራለህ አስገባው፡', english: '' },
      { type: 'verse', amharic: 'ተቀበል እንግዳውን አስገባው፡\nድግሥ ያደርግልሃል አስገባው፡\nበነፃ ይጠራሃል ይቅርታም ይሰጥሃል።\nበሰማይ ያገባሃል አስገባው፡', english: '' }
    ],
    tags: ['Prayer']
  }, 
  {
    id: '50',
    title: { amharic: 'ለየሱስ አስረክባለሁ', english: 'All to Jesus I Surrender' },
    author: { amharic: '', english: 'JW Vande Venter\nWS Wikden' },
    verses: [
      { type: 'verse', amharic: 'ለየሱስ አስረክባለሁ በነፃ እሰጣለሁ\nሁልጊዜ እወደዋለሁ በፊቱ እኖራለሁ', english: '' },
      { type: 'verse', amharic: 'ለየሱስ አስረክባለሁ በፊቱ እሰግዳለሁ\nየአለምን ሃብት እረሳለሁ ውሰደኝ የሱስ መጣሁ ', english: '' },
      { type: 'verse', amharic: 'ለየሱስ አስረክባለሁ አዳኜ ያንተ አርገኝ\nመንፈስ ቅዱስህ ይንገረኝ የኔ እንደሆንህልኝ ', english: '' },
      { type: 'verse', amharic: 'ለየሱስ እስረክባለሁ መንፈስህን እሰማለሁ\nበመድኅን እደሰታለሁ ክብር ለስሙ', english: '' },
      { type: 'chorus', amharic: 'አስረክባለሁ አስረክባለሁ\nአስረክባለሁ አስረክባለሁ\nሁሉን ላንት መድሃኒቴ አስረክባለሁ', english: '' }
    ],
    tags: ['Prayer']
  }
];