import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AlertModule,
  AspectRatioModule,
  AvatarModule,
  BadgeModule,
  ButtonModule,
} from '@shadcn-ng/ui-kit/ui';

@Component({
  standalone: true,
  selector: 'shadcn-ng-root',
  templateUrl: './app.component.html',
  imports: [
    AlertModule,
    AspectRatioModule,
    AvatarModule,
    BadgeModule,
    ButtonModule,
    RouterModule,
  ],
})
export class AppComponent {}
