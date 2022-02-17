import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'input-with-focus',
  styleUrl: 'input-with-focus.css',
  shadow: true,
})
export class InputWithFocus {
  inputElement: HTMLInputElement;

  componentDidLoad() {
    this.inputElement.focus();
  }

  render() {
    return (
      <Host>
        <input ref={(el) => { this.inputElement = el; }} placeholder="I should be focused" />
      </Host>
    );
  }

}
