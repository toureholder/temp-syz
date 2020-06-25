import { html, css, LitElement, property } from 'lit-element';
import { LionButton } from '@lion/button';

export class WizButton extends LionButton {
  static get styles() {
    return [
      super.styles,
      css`
        .btn {
            background: var(--wiz-button-primary, rgb(245, 108, 0));
            color: rgb(255, 255, 255);
            font-family: 'Roboto', sans-serif;
            font-size: small;
            border-radius: 5px;
        }

        :host(:hover) .btn {
            background: var(--wiz-button-background-hover, rgb(255, 145, 0));
        }

        :host(:focus:not([disabled])) .btn {
            outline: none;
          }

        :host(:active) .btn, /* keep native :active to render quickly where possible */
        :host([active]) .btn /* use custom [active] to fix IE11 */ {
            background: var(--wiz-button-background-clicked, rgb(255, 173, 66));
        }
    `
    ];
  }
}
