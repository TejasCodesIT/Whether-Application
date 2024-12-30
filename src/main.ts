import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Tejas Wakchaure
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
