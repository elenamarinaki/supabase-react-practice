import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://lirejblahwfmbdtzeqqc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODMxMDM0NCwiZXhwIjoxOTUzODg2MzQ0fQ.6b-ZobYCrBjEPCMB5kktl0ayLKVGYlZgJ6mqQu7kMgQ'
);
