import { HymnForm } from '@/components/hymns/hymn-form';

export default function CreateHymnPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create New Hymn</h1>
          <p className="text-muted-foreground">
            Add a new hymn to the collection with lyrics in both Amharic and English.
          </p>
        </div>
        
        <HymnForm />
      </div>
    </div>
  );
} 