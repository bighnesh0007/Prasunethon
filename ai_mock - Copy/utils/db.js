import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';



const sql = neon('postgresql://ai-mock-interview_owner:0B9WxwtnmLSe@ep-noisy-firefly-a5pc6dvq.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require');
export const db = drizzle(sql, { schema });
