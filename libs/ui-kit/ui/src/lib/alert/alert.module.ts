import { NgModule } from '@angular/core';

import { AlertDescriptionComponent } from './alert-description/alert-description.component';
import { AlertTitleComponent } from './alert-title/alert-title.component';
import { AlertComponent } from './alert.component';

@NgModule({
  imports: [AlertComponent, AlertDescriptionComponent, AlertTitleComponent],
  exports: [AlertComponent, AlertDescriptionComponent, AlertTitleComponent],
})
export class AlertModule {}
