export interface Profile {
    id: string;
    name: string;
    role: 'ADMIN' | 'USER';
    created_at: string;
    updated_at: string;
  }
  
  export interface Hymn {
    id: string;
    hymn_number: number;
    title_amharic: string;
    title_english: string;
    lyrics: LyricLine[];
    category?: string;
    created_by?: string;
    is_approved: boolean;
    created_at: string;
    updated_at: string;
  }
  
  export interface LyricLine {
    type: 'verse' | 'chorus';
    amharic: string;
    english: string;
  }
  
  export interface Submission {
    id: string;
    hymn_id: string;
    submitted_by: string;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    notes?: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface Playlist {
    id: string;
    name: string;
    description?: string;
    created_by: string;
    is_public: boolean;
    created_at: string;
    updated_at: string;
  }
  
  export interface PlaylistHymn {
    playlist_id: string;
    hymn_id: string;
    position: number;
    created_at: string;
  }
  
  // Database helper types
  export type Database = {
    public: {
      Tables: {
        profiles: {
          Row: Profile;
          Insert: Omit<Profile, 'created_at'>;
          Update: Partial<Omit<Profile, 'id' | 'created_at'>>;
        };
        hymns: {
          Row: Hymn;
          Insert: Omit<Hymn, 'id' | 'created_at' | 'updated_at'>;
          Update: Partial<Omit<Hymn, 'id' | 'created_at' | 'updated_at'>>;
        };
        submissions: {
          Row: Submission;
          Insert: Omit<Submission, 'id' | 'created_at' | 'updated_at'>;
          Update: Partial<Omit<Submission, 'id' | 'created_at' | 'updated_at'>>;
        };
        playlists: {
          Row: Playlist;
          Insert: Omit<Playlist, 'id' | 'created_at' | 'updated_at'>;
          Update: Partial<Omit<Playlist, 'id' | 'created_at' | 'updated_at'>>;
        };
        playlist_hymns: {
          Row: PlaylistHymn;
          Insert: Omit<PlaylistHymn, 'created_at'>;
          Update: Partial<Omit<PlaylistHymn, 'playlist_id' | 'hymn_id' | 'created_at'>>;
        };
      };
    };
  };