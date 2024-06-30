/** @type { import("drizzle-kit").Config } */

export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-mock-interview_owner:0B9WxwtnmLSe@ep-noisy-firefly-a5pc6dvq.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require',
  }
};

