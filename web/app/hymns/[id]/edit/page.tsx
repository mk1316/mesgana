'use client';

import { useParams } from 'next/navigation';
import { HymnForm } from '@/components/hymns/hymn-form';

export default function EditHymnPage() {
  const params = useParams();
  const hymnId = params.id as string;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Edit Hymn</h1>
          <p className="text-muted-foreground">
            Update the hymn details and lyrics.
          </p>
        </div>
        
        <HymnForm hymnId={hymnId} />
      </div>
    </div>
  );
} 