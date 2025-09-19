import { createClient } from '@supabase/supabase-js';

// Multi-tenant architecture: Master admin project for managing kindergartens
const MASTER_SUPABASE_URL = import.meta.env.VITE_MASTER_SUPABASE_URL || '';
const MASTER_SUPABASE_ANON_KEY = import.meta.env.VITE_MASTER_SUPABASE_ANON_KEY || '';

// Individual kindergarten project (will be set dynamically)
let currentKindergartenUrl = '';
let currentKindergartenKey = '';

// Master admin client for managing kindergartens
export const masterSupabase = createClient(MASTER_SUPABASE_URL, MASTER_SUPABASE_ANON_KEY);

// Current kindergarten client (will be initialized when user selects a kindergarten)
export let kindergartenSupabase = createClient('', '');

// Function to switch to a specific kindergarten's database
export const switchToKindergarten = (kindergartenId: string) => {
  // This will fetch the kindergarten's database credentials from the master database
  // For now, we'll use environment variables for development
  const kindergartenUrl = import.meta.env[`VITE_KINDERGARTEN_${kindergartenId}_URL`];
  const kindergartenKey = import.meta.env[`VITE_KINDERGARTEN_${kindergartenId}_ANON_KEY`];
  
  if (kindergartenUrl && kindergartenKey) {
    currentKindergartenUrl = kindergartenUrl;
    currentKindergartenKey = kindergartenKey;
    kindergartenSupabase = createClient(kindergartenUrl, kindergartenKey);
    return kindergartenSupabase;
  }
  
  throw new Error(`Kindergarten ${kindergartenId} not found`);
};

// Database types for the master admin project
export type MasterDatabase = {
  public: {
    Tables: {
      kindergartens: {
        Row: {
          id: string;
          name: string;
          address: string;
          phone: string;
          email: string;
          admin_email: string;
          supabase_url: string;
          supabase_anon_key: string;
          subscription_status: 'active' | 'inactive' | 'trial';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          address: string;
          phone: string;
          email: string;
          admin_email: string;
          supabase_url: string;
          supabase_anon_key: string;
          subscription_status?: 'active' | 'inactive' | 'trial';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          address?: string;
          phone?: string;
          email?: string;
          admin_email?: string;
          supabase_url?: string;
          supabase_anon_key?: string;
          subscription_status?: 'active' | 'inactive' | 'trial';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};

// Database types for individual kindergarten projects
export type KindergartenDatabase = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          role: 'admin' | 'employee' | 'parent' | 'family';
          kindergarten_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          role: 'admin' | 'employee' | 'parent' | 'family';
          kindergarten_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          role?: 'admin' | 'employee' | 'parent' | 'family';
          kindergarten_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      children: {
        Row: {
          id: string;
          name: string;
          birth_date: string;
          kindergarten_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          birth_date: string;
          kindergarten_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          birth_date?: string;
          kindergarten_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      family_children: {
        Row: {
          id: string;
          family_member_id: string;
          child_id: string;
          relationship: 'parent' | 'guardian' | 'grandparent' | 'other';
          approved: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          family_member_id: string;
          child_id: string;
          relationship: 'parent' | 'guardian' | 'grandparent' | 'other';
          approved?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          family_member_id?: string;
          child_id?: string;
          relationship?: 'parent' | 'guardian' | 'grandparent' | 'other';
          approved?: boolean;
          created_at?: string;
        };
      };
      posts: {
        Row: {
          id: string;
          title: string;
          content: string;
          image_url?: string;
          author_id: string;
          kindergarten_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          image_url?: string;
          author_id: string;
          kindergarten_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          image_url?: string;
          author_id?: string;
          kindergarten_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      calendar_events: {
        Row: {
          id: string;
          title: string;
          description: string;
          event_date: string;
          event_time?: string;
          kindergarten_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          event_date: string;
          event_time?: string;
          kindergarten_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          event_date?: string;
          event_time?: string;
          kindergarten_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      messages: {
        Row: {
          id: string;
          sender_id: string;
          receiver_id: string;
          content: string;
          kindergarten_id: string;
          read: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          sender_id: string;
          receiver_id: string;
          content: string;
          kindergarten_id: string;
          read?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          sender_id?: string;
          receiver_id?: string;
          content?: string;
          kindergarten_id?: string;
          read?: boolean;
          created_at?: string;
        };
      };
    };
  };
};
