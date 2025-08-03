'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { getHymn, deleteHymn } from '@/lib/api/hymns';
import type { Hymn } from '@/types/database';
import Link from 'next/link';

export default function HymnDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isAdmin } = useAuth();
  const [hymn, setHymn] = useState<Hymn | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      loadHymn(params.id as string);
    }
  }, [params.id]);

  const loadHymn = async (id: string) => {
    try {
      setLoading(true);
      const data = await getHymn(id);
      setHymn(data);
    } catch (error) {
      console.error('Error loading hymn:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!hymn || !confirm('Are you sure you want to delete this hymn?')) return;
    
    try {
      await deleteHymn(hymn.id);
      router.push('/hymns');
    } catch (error) {
      console.error('Error deleting hymn:', error);
      alert('Failed to delete hymn');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading hymn...</div>
      </div>
    );
  }

  if (!hymn) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Hymn Not Found</h1>
          <Link href="/hymns" className="text-blue-600 hover:text-blue-800">
            Back to Hymns
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                #{hymn.hymn_number} - {hymn.title_amharic}
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                {hymn.title_english}
              </p>
              {hymn.category && (
                <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                  {hymn.category}
                </span>
              )}
            </div>
            
            <div className="flex gap-2">
              <Link
                href="/hymns"
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Back to Hymns
              </Link>
              
              {isAdmin && (
                <>
                  <Link
                    href={`/hymns/${hymn.id}/edit`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
          
          {!hymn.is_approved && (
            <div className="p-4 bg-yellow-100 text-yellow-800 rounded-md">
              ⚠️ This hymn is pending approval and not visible to regular users.
            </div>
          )}
        </div>

        {/* Lyrics */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Lyrics</h2>
          
          {hymn.lyrics.map((line, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  line.type === 'verse' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {line.type === 'verse' ? 'Verse' : 'Chorus'}
                </span>
                {line.type === 'verse' && (
                  <span className="text-gray-500">Verse {index + 1}</span>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">
                    Amharic
                  </h3>
                  <div className="whitespace-pre-wrap text-lg leading-relaxed">
                    {line.amharic}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-800">
                    English
                  </h3>
                  <div className="whitespace-pre-wrap text-lg leading-relaxed">
                    {line.english}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t">
          <div className="text-sm text-gray-500">
            <p>Created: {new Date(hymn.created_at).toLocaleDateString()}</p>
            <p>Last updated: {new Date(hymn.updated_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 