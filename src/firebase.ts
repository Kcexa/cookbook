import 'firebase/auth';
import * as firebase from 'firebase/app';

import { firebaseApiKey, firebaseAuthDomain, firebaseProjectId } from './configuration';

const config = {
    apiKey: firebaseApiKey,
    authDomain: firebaseAuthDomain,
    projectId: firebaseProjectId,
};

export { config };
