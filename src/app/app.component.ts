import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent  {
  items = Array.from({length: 200000}).map((_, i) => `Item ${i}`);
}
