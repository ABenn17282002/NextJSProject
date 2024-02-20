import { createClient } from '@supabase/supabase-js'

// envファイルからURLとKeyを読み込む
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// auth認証をfalseでsupabaseをexportする
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
	auth: {
	  persistSession: false,
	},
  });