import { HymnList } from '@/components/hymns/hymn-list';

export default function HymnsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Hymns</h1>
          <p className="text-muted-foreground">
            Browse and manage the collection of hymns in Amharic and English.
          </p>
        </div>
        
        <HymnList />
      </div>
    </div>
  );
} 