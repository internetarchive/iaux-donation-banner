import { html, css, LitElement, TemplateResult, CSSResult } from 'lit';

import { property, customElement } from 'lit/decorators.js';

@customElement('donation-banner')
export class DonationBanner extends LitElement {
  @property({ type: String }) imageUrl?: string = './girls.jpg';

  render(): TemplateResult {
    return html`
      <div id="banner" class="vertical">
        <div id="image" style=${this.backgroundImageStyle}></div>
        <div id="content">
          <strong>Can You Chip In?</strong><br /><br />The Internet Archive is
          growing faster than ever before-and we need your help. Right now we're
          getting over 1.5 million daily unique visitors and storing more than
          70 petabytes of data. We build and maintain all our own systems, but
          we don't charge for access, sell user information, or run ads.
          Instead, we rely on individual generosity to fund our infrastructure;
          we're powered by donations averaging $32. Unfortunately, fewer than
          1&nbsp;in 1000 of our patrons donate.<br /><br />Access to knowledge
          is more vital than ever. If you&nbsp;can&nbsp;afford to pitch in, I
          promise it will be money well spent. Thank you for your support.<br /><br />-<i
            >Brewster Kahle, Founder, Internet Archive</i
          >
        </div>
        <div id="donation-form"></div>
      </div>
    `;
  }

  private get backgroundImageStyle(): string {
    if (this.imageUrl) {
      return `background-image: url(${this.imageUrl})`;
    }
    return '';
  }

  static get styles(): CSSResult {
    return css`
      #banner {
        background-color: #2a487c;
        width: 100%;
        display: flex;
        color: #fff;
        outline: 1px solid red;
      }

      #banner.vertical {
        flex-direction: column;
      }

      #image {
        width: 300px;
        height: 240px;
        background-repeat: no-repeat;
        background-position-x: 50%;
        background-position-y: 10%;
        background-size: cover;
        clip-path: polygon(
          0% 0%,
          calc(100% - 50px) 0%,
          100% 50%,
          calc(100% - 50px) 100%,
          0% 100%
        );
      }

      .vertical #image {
        width: 100%;
        height: 100px;
        background-position-y: 30%;
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% calc(100% - 20px),
          50% 100%,
          0% calc(100% - 20px)
        );
      }

      #content {
        flex: 1;
        padding: 1rem;
      }

      #donation-form {
        background-color: #fff;
        clip-path: polygon(
          0% 0%,
          calc(100% - 50px) 0%,
          100% 50%,
          calc(100% - 50px) 100%,
          0% 100%,
          50px 50%
        );
        width: 25rem;
      }

      .vertical #donation-form {
        width: 100%;
        height: 20rem;
        clip-path: polygon(0% 0%, 50% 20px, 100% 0, 100% 100%, 0% 100%);
      }
    `;
  }
}
