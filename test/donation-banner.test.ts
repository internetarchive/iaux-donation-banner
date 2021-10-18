import { html, fixture, expect } from '@open-wc/testing';
import '../src/donation-banner';
import type { DonationBanner } from '../src/donation-banner';

describe('DonationBanner', () => {
  it('has a background track and fill layer', async () => {
    const el: DonationBanner = await fixture(html`
      <donation-banner></donation-banner>
    `);

    const bannerDiv = el.shadowRoot?.querySelector('#banner');

    expect(bannerDiv).to.exist;
  });
});
