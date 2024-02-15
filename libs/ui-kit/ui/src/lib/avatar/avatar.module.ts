import { NgModule } from '@angular/core';

import { AvatarFallbackDirective } from './avatar-fallback/avatar-fallback.directive';
import { AvatarImageDirective } from './avatar-image/avatar-image.directive';
import { AvatarComponent } from './avatar.component';

@NgModule({
  imports: [AvatarComponent, AvatarFallbackDirective, AvatarImageDirective],
  exports: [AvatarComponent, AvatarFallbackDirective, AvatarImageDirective],
})
export class AvatarModule {}
