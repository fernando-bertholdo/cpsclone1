import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { mergeApplicationConfig } from '@angular/core';

// Combinando as configurações existentes com a configuração Auth0
const auth0Config = {
  providers: [
    provideAuth0({
      domain: 'dev-nfiphfmax3tlczly.us.auth0.com',
      clientId: '2Bp5N6ZgIZZDNWDoPyVqbLrrqoZRSDSo',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ]
};

// Mesclando configurações
const mergedConfig = mergeApplicationConfig(appConfig, auth0Config);

// Inicializando o aplicativo com a configuração combinada
bootstrapApplication(AppComponent, mergedConfig)
  .catch((err) => console.error(err));
