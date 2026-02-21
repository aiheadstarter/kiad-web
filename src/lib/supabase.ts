import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dzducnbpttqklcoeahlp.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6ZHVjbmJwdHRxa2xjb2VhaGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExODM2OTAsImV4cCI6MjA4Njc1OTY5MH0.qPUkEfay_QToW9L9KJ91sRFrv5P0XbNE6rhAxGqve7Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabaseUrl, supabaseAnonKey };
