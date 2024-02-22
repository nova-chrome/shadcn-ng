import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AlertModule,
  AspectRatioModule,
  AvatarModule,
  BadgeModule,
  ButtonModule,
} from '@sng/ui-kit/ui';

@Component({
  standalone: true,
  selector: 'sng-root',
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
