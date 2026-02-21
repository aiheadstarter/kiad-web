import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dzducnbpttqklcoeahlp.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6ZHVjbmJwdHRxa2xjb2VhaGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NjkwNjMsImV4cCI6MjA1NTQ0NTA2M30.JjiQRmdduSSnAKtDDIP7gQ_SgLsECyB-HWaMm1R-hIo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabaseUrl, supabaseAnonKey };
