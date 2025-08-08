import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHighlightOptions } from 'ngx-highlightjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
   provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'), // Loads the entire library with all languages
      // Or, for specific languages:
      // coreLibraryLoader: () => import('highlight.js/lib/core'),
      // languages: {
      //   typescript: () => import('highlight.js/lib/languages/typescript'),
      //   javascript: () => import('highlight.js/lib/languages/javascript')
      // }
    })
  
  ]
};
