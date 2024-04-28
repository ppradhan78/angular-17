import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { IfExampleComponent } from './app/if-example/if-example.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
