import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "interview-tracker-f94a8", appId: "1:335360251007:web:40efdb85f0444ed02c1b4a", storageBucket: "interview-tracker-f94a8.firebasestorage.app", apiKey: "AIzaSyCZh0PvCyVJy3m70uhuFaSlcFA40GA-FY4", authDomain: "interview-tracker-f94a8.firebaseapp.com", messagingSenderId: "335360251007" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
