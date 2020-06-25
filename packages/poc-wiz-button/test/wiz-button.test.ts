import { html, fixture, expect } from '@open-wc/testing';

import {WizButton} from '../src/WizButton.js';
import '../wiz-button.js';

describe('WizButton', () => {
  it('passes the a11y audit', async () => {
    const el: WizButton = await fixture(html`
      <wiz-button>Wiz Button</wiz-button>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
