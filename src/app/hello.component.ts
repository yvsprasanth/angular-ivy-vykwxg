import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>{{name}}</h1>`,
  styles: [`h1`]
})
export class HelloComponent  {
  @Input() name: string;
}
