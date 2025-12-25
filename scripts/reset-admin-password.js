const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey);

const email = process.argv[2];
const newPassword = process.argv[3];

if (!email || !newPassword) {
  console.log('Usage: node scripts/reset-admin-password.js <email> <new_password>');
  process.exit(1);
}

async function findUserByEmail(targetEmail) {
  let page = 1;
  const perPage = 1000;
  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage });
    if (error) throw error;
    const match = data.users.find(u => (u.email || '').toLowerCase() === targetEmail.toLowerCase());
    if (match) return match;
    if (!data.users.length || data.users.length < perPage) return null;
    page += 1;
  }
}

async function run() {
  try {
    console.log(`Searching for user ${email}...`);
    const user = await findUserByEmail(email);
    if (!user) {
      console.error('User not found');
      process.exit(1);
    }
    console.log(`Resetting password for user ${user.id} (${email})...`);
    const { data, error } = await supabase.auth.admin.updateUserById(user.id, { password: newPassword });
    if (error) throw error;
    console.log('Password updated successfully');
  } catch (err) {
    console.error('Error:', err.message || err);
    process.exit(1);
  }
}

run();

