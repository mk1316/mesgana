import { createClient } from '@/lib/supabase/client';
import type { Profile } from '@/types/database';

export async function createUserProfile(userId: string, name: string): Promise<Profile | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('profiles')
    .insert({
      id: userId,
      name,
      role: 'USER' // Default role
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating profile:', error);
    return null;
  }

  return data;
}

export async function getUserProfile(userId: string): Promise<Profile | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }

  return data;
}

export async function isUserAdmin(userId: string): Promise<boolean> {
  const profile = await getUserProfile(userId);
  return profile?.role === 'ADMIN';
}

export async function promoteToAdmin(userId: string): Promise<boolean> {
  const supabase = createClient();

  const { error } = await supabase
    .from('profiles')
    .update({ role: 'ADMIN' })
    .eq('id', userId);

  if (error) {
    console.error('Error promoting user to admin:', error);
    return false;
  }

  return true;
}