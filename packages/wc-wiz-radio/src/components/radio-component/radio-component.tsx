import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wiz-radio',
  styleUrl: 'radio-component.css',
  shadow: true
})
export class RadioComponent {
  @Prop() name;
  @Prop() value;
  @Prop() disabled: boolean;
  @Event() returnEvent: EventEmitter;


  toggle(e) {
    this.value = e;
    this.returnEvent.emit(this.value);
  }

  render() {
    return (
      <div class={`wiz-radio ${this.disabled ? 'disabled' : ''}`} >
        <label class="container-radio">
          <input onChange={(e) => this.toggle(e)} disabled={this.disabled} type="radio" name="{{name}}" />
          <span class="checkmark-radio"></span>
          <span class="checkmark-radio-select"></span>
        </label>
      </div >)
  }
}
