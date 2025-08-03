'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { getHymns, searchHymns, deleteHymn, approveHymn } from '@/lib/api/hymns';
import type { Hymn } from '@/types/database';
import Link from 'next/link';

export function HymnList() {
  const { isAdmin } = useAuth();
  const [hymns, setHymns] = useState<Hymn[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'approved' | 'pending'>('all');

  useEffect(() => {
    loadHymns();
  }, [isAdmin]);

  const loadHymns = async () => {
    try {
      setLoading(true);
      const data = await getHymns(isAdmin);
      setHymns(data);
    } catch (error) {
      console.error('Error loading hymns:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      try {
        const results = await searchHymns(query, isAdmin);
        setHymns(results);
      } catch (error) {
        console.error('Error searching hymns:', error);
      }
    } else {
      loadHymns();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this hymn?')) return;
    
    try {
      await deleteHymn(id);
      setHymns(hymns.filter(hymn => hymn.id !== id));
    } catch (error) {
      console.error('Error deleting hymn:', error);
      alert('Failed to delete hymn');
    }
  };

  const handleApprove = async (id: string) => {
    try {
      await approveHymn(id);
      setHymns(hymns.map(hymn => 
        hymn.id === id ? { ...hymn, is_approved: true } : hymn
      ));
    } catch (error) {
      console.error('Error approving hymn:', error);
      alert('Failed to approve hymn');
    }
  };

  const filteredHymns = hymns.filter(hymn => {
    if (filter === 'approved') return hymn.is_approved;
    if (filter === 'pending') return !hymn.is_approved;
    return true;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-lg">Loading hymns...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search hymns..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {isAdmin && (
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Hymns</option>
            <option value="approved">Approved Only</option>
            <option value="pending">Pending Approval</option>
          </select>
        )}
        
        {isAdmin && (
          <Link
            href="/hymns/create"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Hymn
          </Link>
        )}
      </div>

      {/* Hymn List */}
      <div className="grid gap-4">
        {filteredHymns.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No hymns found.
          </div>
        ) : (
          filteredHymns.map((hymn) => (
            <div
              key={hymn.id}
              className={`p-4 border rounded-lg hover:shadow-md transition-shadow ${
                !hymn.is_approved ? 'bg-yellow-50 border-yellow-200' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-lg text-blue-600">
                      #{hymn.hymn_number}
                    </span>
                    {!hymn.is_approved && (
                      <span className="px-2 py-1 text-xs bg-yellow-200 text-yellow-800 rounded">
                        Pending
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-1">
                    {hymn.title_amharic}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {hymn.title_english}
                  </p>
                  
                  {hymn.category && (
                    <span className="inline-block px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded">
                      {hymn.category}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Link
                    href={`/hymns/${hymn.id}`}
                    className="px-3 py-1 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View
                  </Link>
                  
                  {isAdmin && (
                    <>
                      <Link
                        href={`/hymns/${hymn.id}/edit`}
                        className="px-3 py-1 text-green-600 hover:text-green-800 transition-colors"
                      >
                        Edit
                      </Link>
                      
                      {!hymn.is_approved && (
                        <button
                          onClick={() => handleApprove(hymn.id)}
                          className="px-3 py-1 text-green-600 hover:text-green-800 transition-colors"
                        >
                          Approve
                        </button>
                      )}
                      
                      <button
                        onClick={() => handleDelete(hymn.id)}
                        className="px-3 py-1 text-red-600 hover:text-red-800 transition-colors"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 