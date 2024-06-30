require('dotenv').config({ path: '.env.local' });

console.log('NEXT_DRIZZLE_DATABASE_URL:', process.env.NEXT_DRIZZLE_DATABASE_URL);
