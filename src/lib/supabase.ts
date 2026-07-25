import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables. Copy .env.example to .env and fill in your values.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface GameSubmission {
  title: string;
  developer_name: string;
  email: string;
  category: string;
  price: number;
  description: string;
  tag: string;
  download_url: string;
  dev_wallet_sol?: string;
  dev_wallet_evm?: string;
}

export async function fetchCatalogFromSupabase() {
  try {
    const { data, error } = await supabase
      .from('catalog_games')
      .select('*')
      .eq('is_active', true)
      .order('price', { ascending: false });

    if (error || !data) return null;
    return data;
  } catch (err) {
    console.warn('Supabase fetch error:', err);
    return null;
  }
}

export async function registerUserProfileSupabase(username: string, email: string, role: 'player' | 'developer' = 'player') {
  try {
    await supabase.from('user_profiles').upsert(
      {
        username,
        email,
        role,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'username' }
    );
  } catch (err) {
    console.warn('Error saving user profile to Supabase:', err);
  }
}

export async function submitGameToDeveloperPortal(sub: GameSubmission) {
  try {
    // 1. Save developer profile
    if (sub.developer_name && sub.email) {
      await supabase.from('developer_profiles').upsert(
        {
          developer_name: sub.developer_name,
          email: sub.email,
          payout_split_percent: 95.00,
        },
        { onConflict: 'developer_name' }
      );
    }

    // 2. Submit game — starts as inactive pending review
    const gameId = `dev_${Date.now()}`;
    const { error } = await supabase.from('catalog_games').insert([
      {
        id: gameId,
        title: sub.title,
        developer_name: sub.developer_name,
        category: sub.category,
        price: sub.price,
        rating: 5.0,
        description: sub.description,
        tag: sub.tag || 'New Release',
        download_url: sub.download_url,
        is_active: false, // requires Duat Studio review before going live
      },
    ]);

    if (error) throw error;
    return { success: true, gameId };
  } catch (err: any) {
    console.error('Error submitting game:', err);
    return { success: false, message: err?.message || 'Failed to submit game to Supabase database.' };
  }
}
