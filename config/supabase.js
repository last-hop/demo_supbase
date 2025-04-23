import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL ='https://drpiiaylqoeybagmeuol.supabase.co'; 
const SUPABASE_ANON_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRycGlpYXlscW9leWJhZ21ldW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTkxNDQsImV4cCI6MjA2MDk5NTE0NH0.eiJqRCthwSqqV58giTEAbAWjXoLCHRibkTtxgoccDFQ'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
