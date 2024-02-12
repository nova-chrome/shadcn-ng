import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'shadcn-ng-root',
  templateUrl: './app.component.html',
  imports: [RouterModule],
})
export class AppComponent {}
