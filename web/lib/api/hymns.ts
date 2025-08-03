import { createClient } from '@/lib/supabase/client';
import type { Hymn, LyricLine } from '@/types/database';

export interface CreateHymnData {
  hymn_number: number;
  title_amharic: string;
  title_english: string;
  lyrics: LyricLine[];
  category?: string;
}

export interface UpdateHymnData extends Partial<CreateHymnData> {
  is_approved?: boolean;
}

// Get all hymns (approved only for regular users, all for admins)
export async function getHymns(isAdmin: boolean = false): Promise<Hymn[]> {
  const supabase = createClient();
  
  let query = supabase
    .from('hymns')
    .select('*')
    .order('hymn_number', { ascending: true });

  // If not admin, only show approved hymns
  if (!isAdmin) {
    query = query.eq('is_approved', true);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching hymns:', error);
    throw new Error('Failed to fetch hymns');
  }

  return data || [];
}

// Get a single hymn by ID
export async function getHymn(id: string): Promise<Hymn | null> {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('hymns')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching hymn:', error);
    return null;
  }

  return data;
}

// Get hymn by number
export async function getHymnByNumber(hymnNumber: number): Promise<Hymn | null> {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('hymns')
    .select('*')
    .eq('hymn_number', hymnNumber)
    .single();

  if (error) {
    console.error('Error fetching hymn by number:', error);
    return null;
  }

  return data;
}

// Create a new hymn (admin only)
export async function createHymn(hymnData: CreateHymnData, userId: string): Promise<Hymn | null> {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('hymns')
    .insert({
      ...hymnData,
      created_by: userId,
      is_approved: false, // New hymns need approval
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating hymn:', error);
    throw new Error('Failed to create hymn');
  }

  return data;
}

// Update a hymn (admin only)
export async function updateHymn(id: string, hymnData: UpdateHymnData): Promise<Hymn | null> {
  const supabase = createClient();
  
  const { data, error } = await supabase
    .from('hymns')
    .update(hymnData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating hymn:', error);
    throw new Error('Failed to update hymn');
  }

  return data;
}

// Delete a hymn (admin only)
export async function deleteHymn(id: string): Promise<boolean> {
  const supabase = createClient();
  
  const { error } = await supabase
    .from('hymns')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting hymn:', error);
    throw new Error('Failed to delete hymn');
  }

  return true;
}

// Approve a hymn (admin only)
export async function approveHymn(id: string): Promise<Hymn | null> {
  return updateHymn(id, { is_approved: true });
}

// Search hymns
export async function searchHymns(query: string, isAdmin: boolean = false): Promise<Hymn[]> {
  const supabase = createClient();
  
  let searchQuery = supabase
    .from('hymns')
    .select('*')
    .or(`title_amharic.ilike.%${query}%,title_english.ilike.%${query}%`)
    .order('hymn_number', { ascending: true });

  // If not admin, only search approved hymns
  if (!isAdmin) {
    searchQuery = searchQuery.eq('is_approved', true);
  }

  const { data, error } = await searchQuery;

  if (error) {
    console.error('Error searching hymns:', error);
    throw new Error('Failed to search hymns');
  }

  return data || [];
}

// Get hymns by category
export async function getHymnsByCategory(category: string, isAdmin: boolean = false): Promise<Hymn[]> {
  const supabase = createClient();
  
  let query = supabase
    .from('hymns')
    .select('*')
    .eq('category', category)
    .order('hymn_number', { ascending: true });

  // If not admin, only show approved hymns
  if (!isAdmin) {
    query = query.eq('is_approved', true);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching hymns by category:', error);
    throw new Error('Failed to fetch hymns by category');
  }

  return data || [];
} 