import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-number-yield',
  template: `<span class="is-nowrap">
    {{ value }}
  </span>`,
  styleUrls: ['./number-yield.component.scss']
})
export class NumberYieldComponent {
  @Input() value: string
}
