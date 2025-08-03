'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { createUserProfile, getUserProfile } from '@/lib/auth/profile';
import type { Profile } from '@/types/database';

export function useAuth() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          let userProfile = await getUserProfile(session.user.id);
          if (!userProfile) {
            userProfile = await createUserProfile(
              session.user.id,
              session.user.email?.split('@')[0] || 'User'
            );
          }
          setProfile(userProfile);
        }
      } catch (error) {
        console.error('Error getting initial session:', error);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          try {
            let userProfile = await getUserProfile(session.user.id);
            if (!userProfile) {
              userProfile = await createUserProfile(
                session.user.id,
                session.user.email?.split('@')[0] || 'User'
              );
            }
            setProfile(userProfile);
          } catch (error) {
            console.error('Error handling auth state change:', error);
          }
        } else if (event === 'SIGNED_OUT') {
          setProfile(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  return {
    profile,
    loading,
    isAdmin: profile?.role === 'ADMIN',
    isAuthenticated: !!profile
  };
}