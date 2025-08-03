'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { createHymn, updateHymn, getHymn } from '@/lib/api/hymns';
import type { Hymn, LyricLine } from '@/types/database';
import { useRouter } from 'next/navigation';

interface HymnFormProps {
  hymnId?: string; // If provided, we're editing
  onSuccess?: () => void;
}

export function HymnForm({ hymnId, onSuccess }: HymnFormProps) {
  const { profile } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    hymn_number: '',
    title_amharic: '',
    title_english: '',
    category: '',
    lyrics: [] as LyricLine[]
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Load hymn data if editing
  useEffect(() => {
    if (hymnId) {
      loadHymn();
    }
  }, [hymnId]);

  const loadHymn = async () => {
    if (!hymnId) return;
    
    try {
      setLoading(true);
      const hymn = await getHymn(hymnId);
      if (hymn) {
        setFormData({
          hymn_number: hymn.hymn_number.toString(),
          title_amharic: hymn.title_amharic,
          title_english: hymn.title_english,
          category: hymn.category || '',
          lyrics: hymn.lyrics
        });
      }
    } catch (error) {
      console.error('Error loading hymn:', error);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.hymn_number) newErrors.hymn_number = 'Hymn number is required';
    if (!formData.title_amharic) newErrors.title_amharic = 'Amharic title is required';
    if (!formData.title_english) newErrors.title_english = 'English title is required';
    if (formData.lyrics.length === 0) newErrors.lyrics = 'At least one verse is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    if (!profile) return;

    try {
      setSaving(true);
      
      const hymnData = {
        hymn_number: parseInt(formData.hymn_number),
        title_amharic: formData.title_amharic,
        title_english: formData.title_english,
        category: formData.category || undefined,
        lyrics: formData.lyrics
      };

      if (hymnId) {
        // Update existing hymn
        await updateHymn(hymnId, hymnData);
      } else {
        // Create new hymn
        await createHymn(hymnData, profile.id);
      }

      onSuccess?.();
      router.push('/hymns');
    } catch (error) {
      console.error('Error saving hymn:', error);
      alert('Failed to save hymn');
    } finally {
      setSaving(false);
    }
  };

  const addLyricLine = (type: 'verse' | 'chorus') => {
    setFormData(prev => ({
      ...prev,
      lyrics: [...prev.lyrics, { type, amharic: '', english: '' }]
    }));
  };

  const updateLyricLine = (index: number, field: keyof LyricLine, value: string) => {
    setFormData(prev => ({
      ...prev,
      lyrics: prev.lyrics.map((line, i) => 
        i === index ? { ...line, [field]: value } : line
      )
    }));
  };

  const removeLyricLine = (index: number) => {
    setFormData(prev => ({
      ...prev,
      lyrics: prev.lyrics.filter((_, i) => i !== index)
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-lg">Loading hymn...</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Hymn Number *
          </label>
          <input
            type="number"
            value={formData.hymn_number}
            onChange={(e) => setFormData(prev => ({ ...prev, hymn_number: e.target.value }))}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.hymn_number ? 'border-red-500' : ''
            }`}
          />
          {errors.hymn_number && (
            <p className="text-red-500 text-sm mt-1">{errors.hymn_number}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Category
          </label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Praise, Worship, Prayer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Amharic Title *
          </label>
          <input
            type="text"
            value={formData.title_amharic}
            onChange={(e) => setFormData(prev => ({ ...prev, title_amharic: e.target.value }))}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title_amharic ? 'border-red-500' : ''
            }`}
          />
          {errors.title_amharic && (
            <p className="text-red-500 text-sm mt-1">{errors.title_amharic}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            English Title *
          </label>
          <input
            type="text"
            value={formData.title_english}
            onChange={(e) => setFormData(prev => ({ ...prev, title_english: e.target.value }))}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.title_english ? 'border-red-500' : ''
            }`}
          />
          {errors.title_english && (
            <p className="text-red-500 text-sm mt-1">{errors.title_english}</p>
          )}
        </div>
      </div>

      {/* Lyrics Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Lyrics</h3>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => addLyricLine('verse')}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Verse
            </button>
            <button
              type="button"
              onClick={() => addLyricLine('chorus')}
              className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add Chorus
            </button>
          </div>
        </div>

        {errors.lyrics && (
          <p className="text-red-500 text-sm mb-2">{errors.lyrics}</p>
        )}

        <div className="space-y-4">
          {formData.lyrics.map((line, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 text-xs rounded ${
                  line.type === 'verse' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {line.type === 'verse' ? 'Verse' : 'Chorus'}
                </span>
                <button
                  type="button"
                  onClick={() => removeLyricLine(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Amharic
                  </label>
                  <textarea
                    value={line.amharic}
                    onChange={(e) => updateLyricLine(index, 'amharic', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="የአማርኛ ግጥም..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    English
                  </label>
                  <textarea
                    value={line.english}
                    onChange={(e) => updateLyricLine(index, 'english', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="English lyrics..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : (hymnId ? 'Update Hymn' : 'Create Hymn')}
        </button>
        
        <button
          type="button"
          onClick={() => router.push('/hymns')}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
} 