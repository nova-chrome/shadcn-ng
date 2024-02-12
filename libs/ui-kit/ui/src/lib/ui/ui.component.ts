import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shadcn-ng-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponent {}
