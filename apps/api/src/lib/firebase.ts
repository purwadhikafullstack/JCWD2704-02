// firebaseAdmin.ts

import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const auth = admin.auth();

export { auth };
