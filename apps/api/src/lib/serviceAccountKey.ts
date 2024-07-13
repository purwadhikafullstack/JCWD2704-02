// Load environment variables from .env file
require('dotenv').config();

// Accessing environment variables with type assertion
const serviceAccount = {
  type: process.env.TYPE!,
  project_id: process.env.PROJECT_ID!,
  private_key_id: process.env.PRIVATE_KEY_ID!,
  private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n') ?? '', // Use empty string as default if PRIVATE_KEY is undefined
  client_email: process.env.CLIENT_EMAIL!,
  client_id: process.env.CLIENT_ID!,
  auth_uri: process.env.AUTH_URI!,
  token_uri: process.env.TOKEN_URI!,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_CERT_URL!,
  client_x509_cert_url: process.env.CLIENT_CERT_URL!,
  universe_domain: process.env.UNIVERSE_DOMAIN!,
};

// Use serviceAccount object as needed
console.log(serviceAccount);
